import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';
import { db, auth } from './config';
import { handleFirestoreError, OperationType } from './errors';
import { LabContentItem, UserProgressRecord, Language, LabSection } from '../types';
import { SEED_CURRICULUM } from '../data/seedCurriculum';

const CONTENT_COLLECTION = 'content';
const PROGRESS_COLLECTION = 'userProgress';

/**
 * Fetch all published content (for students) and draft content (for teachers)
 */
export async function getLabContentList(
  userRole: 'student' | 'teacher' | 'admin',
  userId?: string
): Promise<LabContentItem[]> {
  try {
    let q;
    if (userRole === 'teacher' || userRole === 'admin') {
      q = query(collection(db, CONTENT_COLLECTION));
    } else {
      q = query(collection(db, CONTENT_COLLECTION), where('status', '==', 'published'));
    }

    const snapshot = await getDocs(q);
    const itemMap = new Map<string, LabContentItem>();

    // Pre-populate with our complete comprehensive seed curriculum
    SEED_CURRICULUM.forEach((item) => itemMap.set(item.id, item));

    // Merge any published or authored items from Firestore
    snapshot.forEach((docSnap) => {
      const data = docSnap.data() as LabContentItem;
      itemMap.set(docSnap.id, {
        ...data,
        id: docSnap.id,
      });
    });

    return Array.from(itemMap.values());
  } catch (error) {
    // Graceful fallback to seed curriculum if network issue occurs
    console.warn('Falling back to local curriculum cache:', error);
    return SEED_CURRICULUM;
  }
}

/**
 * Save new or updated content item (Teacher/Admin only)
 */
export async function saveLabContentItem(item: LabContentItem): Promise<void> {
  const path = `${CONTENT_COLLECTION}/${item.id}`;
  try {
    const docRef = doc(db, CONTENT_COLLECTION, item.id);
    const cleanPayload: Record<string, any> = {
      id: item.id,
      language: item.language,
      section: item.section,
      classGrade: Number(item.classGrade),
      title: item.title.trim().slice(0, 250),
      description: (item.description || '').trim().slice(0, 1000),
      difficulty: item.difficulty || 'beginner',
      contentBody: item.contentBody.trim().slice(0, 50000),
      translation: (item.translation || '').trim().slice(0, 20000),
      audioText: (item.audioText || item.contentBody).trim().slice(0, 20000),
      phoneticGuide: (item.phoneticGuide || '').trim().slice(0, 10000),
      grammarNotes: (item.grammarNotes || '').trim().slice(0, 20000),
      authorId: item.authorId || auth.currentUser?.uid || 'teacher',
      authorName: item.authorName || auth.currentUser?.displayName || 'Teacher',
      status: item.status || 'published',
      updatedAt: new Date().toISOString(),
    };

    if (item.vocabulary && item.vocabulary.length > 0) {
      cleanPayload.vocabulary = item.vocabulary.slice(0, 20);
    }
    if (item.exercises && item.exercises.length > 0) {
      cleanPayload.exercises = item.exercises.slice(0, 10);
    }

    await setDoc(docRef, cleanPayload, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path, auth.currentUser);
  }
}

/**
 * Delete a content item (Teacher/Admin only)
 */
export async function deleteLabContentItem(contentId: string): Promise<void> {
  const path = `${CONTENT_COLLECTION}/${contentId}`;
  try {
    const docRef = doc(db, CONTENT_COLLECTION, contentId);
    await deleteDoc(docRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path, auth.currentUser);
  }
}

/**
 * Save user progress score directly to Firestore userProgress collection
 */
export async function saveUserProgress(progress: Omit<UserProgressRecord, 'id'>): Promise<void> {
  const progressId = `${progress.userId}_${progress.contentId}`;
  const path = `${PROGRESS_COLLECTION}/${progressId}`;
  try {
    const docRef = doc(db, PROGRESS_COLLECTION, progressId);
    await setDoc(
      docRef,
      {
        id: progressId,
        userId: progress.userId,
        contentId: progress.contentId,
        language: progress.language,
        section: progress.section,
        score: Math.min(100, Math.max(0, Math.round(progress.score))),
        completed: Boolean(progress.completed),
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );

    // Also update student's total XP and stats in users/{userId}
    if (progress.completed && auth.currentUser) {
      const userRef = doc(db, 'users', progress.userId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        const currentXp = Number(userData.totalXp || 0);
        await setDoc(
          userRef,
          {
            totalXp: currentXp + 20,
            updatedAt: new Date().toISOString(),
          },
          { merge: true }
        );
      }
    }
  } catch (error) {
    console.warn('Could not save user progress to Firestore:', error);
  }
}

/**
 * Get progress for a specific student directly from Firestore
 */
export async function getUserProgressList(userId: string): Promise<UserProgressRecord[]> {
  try {
    const q = query(collection(db, PROGRESS_COLLECTION), where('userId', '==', userId));
    const snapshot = await getDocs(q);
    const records: UserProgressRecord[] = [];
    snapshot.forEach((snap) => {
      records.push(snap.data() as UserProgressRecord);
    });
    return records;
  } catch (error) {
    console.warn('Could not fetch user progress remotely:', error);
    return [];
  }
}

/**
 * Seed all curriculum into Firestore
 */
export async function seedStandardCurriculum(): Promise<number> {
  let count = 0;
  for (const item of SEED_CURRICULUM) {
    try {
      await saveLabContentItem(item);
      count++;
    } catch (e) {
      console.error('Error seeding item:', item.id, e);
    }
  }
  return count;
}
