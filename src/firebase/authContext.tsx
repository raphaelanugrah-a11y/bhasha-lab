import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut as fbSignOut,
  User as FirebaseUser,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  query,
  where,
  onSnapshot,
} from 'firebase/firestore';
import { auth, db } from './config';
import { UserProfile, UserRole } from '../types';
import { hashPassword, verifyPassword } from '../utils/crypto';

interface AuthContextType {
  currentUser: UserProfile | null;
  firebaseUser: FirebaseUser | null;
  loading: boolean;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithEmail: (
    email: string,
    pass: string,
    displayName: string,
    role: UserRole,
    assignedClass?: number
  ) => Promise<void>;
  signInWithGoogle: (preferredRole?: UserRole, assignedClass?: number) => Promise<void>;
  quickLoginDemo: (role: UserRole, assignedClass?: number) => Promise<void>;
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SESSION_KEY = 'bhashalab_active_uid';

// Default pre-seeded test accounts
const DEFAULT_STUDENT_EMAIL = 'student@bhashalab.edu';
const DEFAULT_STUDENT_PASS = 'Study@2026';
const DEFAULT_TEACHER_EMAIL = 'teacher@bhashalab.edu';
const DEFAULT_TEACHER_PASS = 'Teacher@2026';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Initialize and seed default accounts in Firestore if needed
  useEffect(() => {
    async function seedDefaults() {
      try {
        const studentRef = doc(db, 'users', 'usr_demo_student_6');
        const studentSnap = await getDoc(studentRef);
        if (!studentSnap.exists()) {
          const passHash = await hashPassword(DEFAULT_STUDENT_PASS);
          await setDoc(studentRef, {
            uid: 'usr_demo_student_6',
            email: DEFAULT_STUDENT_EMAIL,
            displayName: 'Aarav Patel (Class 6)',
            role: 'student',
            assignedClass: 6,
            passwordHash: passHash,
            totalXp: 40,
            streakDays: 5,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          });
        }

        const teacherRef = doc(db, 'users', 'usr_demo_teacher_1');
        const teacherSnap = await getDoc(teacherRef);
        if (!teacherSnap.exists()) {
          const passHash = await hashPassword(DEFAULT_TEACHER_PASS);
          await setDoc(teacherRef, {
            uid: 'usr_demo_teacher_1',
            email: DEFAULT_TEACHER_EMAIL,
            displayName: 'Acharya Sharma (Teacher)',
            role: 'teacher',
            passwordHash: passHash,
            totalXp: 120,
            streakDays: 14,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          });
        }
      } catch (err) {
        console.warn('Could not seed default accounts:', err);
      }
    }
    seedDefaults();
  }, []);

  // Sync active user session from Firestore
  useEffect(() => {
    let unsubscribeDoc: (() => void) | null = null;

    const restoreSession = async () => {
      const activeUid = localStorage.getItem(SESSION_KEY);
      if (activeUid) {
        const userRef = doc(db, 'users', activeUid);
        unsubscribeDoc = onSnapshot(
          userRef,
          (snapshot) => {
            if (snapshot.exists()) {
              setCurrentUser(snapshot.data() as UserProfile);
            } else {
              localStorage.removeItem(SESSION_KEY);
              setCurrentUser(null);
            }
            setLoading(false);
          },
          (error) => {
            console.warn('Session profile snapshot error:', error);
            setLoading(false);
          }
        );
      } else {
        setLoading(false);
      }
    };

    restoreSession();

    // Listen to Firebase Google Auth state as well
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      if (user && !localStorage.getItem(SESSION_KEY)) {
        const userRef = doc(db, 'users', user.uid);
        const snap = await getDoc(userRef);
        if (snap.exists()) {
          setCurrentUser(snap.data() as UserProfile);
          localStorage.setItem(SESSION_KEY, user.uid);
        }
      }
    });

    return () => {
      if (unsubscribeDoc) unsubscribeDoc();
      unsubscribeAuth();
    };
  }, []);

  /**
   * Log in with Email & Password verified against Firestore Database
   */
  const signInWithEmail = async (rawEmail: string, pass: string) => {
    setLoading(true);
    const cleanEmail = rawEmail.trim().toLowerCase();

    try {
      const q = query(collection(db, 'users'), where('email', '==', cleanEmail));
      const snap = await getDocs(q);

      if (snap.empty) {
        throw new Error('No account found with this email. Please check your credentials or create an account.');
      }

      const userDoc = snap.docs[0];
      const userData = userDoc.data() as UserProfile;

      if (!userData.passwordHash) {
        throw new Error('This account was created via Google Sign-In. Please sign in with Google.');
      }

      const isValid = await verifyPassword(pass, userData.passwordHash);
      if (!isValid) {
        throw new Error('Incorrect password. Please verify and try again.');
      }

      // Successful login
      localStorage.setItem(SESSION_KEY, userData.uid);
      setCurrentUser(userData);
    } catch (err: any) {
      console.error('Login error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Register with Email & Password and store credentials securely in Firestore
   */
  const signUpWithEmail = async (
    rawEmail: string,
    pass: string,
    displayName: string,
    role: UserRole,
    assignedClass = 6
  ) => {
    setLoading(true);
    const cleanEmail = rawEmail.trim().toLowerCase();

    try {
      // Check for existing account
      const q = query(collection(db, 'users'), where('email', '==', cleanEmail));
      const snap = await getDocs(q);

      if (!snap.empty) {
        throw new Error('An account with this email address already exists. Please sign in.');
      }

      const passHash = await hashPassword(pass);
      const newUid = `usr_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

      const newProfile: UserProfile = {
        uid: newUid,
        email: cleanEmail,
        displayName: displayName.trim() || (role === 'teacher' ? 'Teacher' : `Student (Class ${assignedClass})`),
        role,
        assignedClass: role === 'student' ? assignedClass : undefined,
        passwordHash: passHash,
        totalXp: 0,
        streakDays: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const userRef = doc(db, 'users', newUid);
      await setDoc(userRef, newProfile);

      localStorage.setItem(SESSION_KEY, newUid);
      setCurrentUser(newProfile);
    } catch (err: any) {
      console.error('Registration error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Google OAuth Sign-in
   */
  const signInWithGoogle = async (preferredRole: UserRole = 'student', assignedClass = 6) => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, 'users', user.uid);
      const snap = await getDoc(userRef);

      const isBootstrappedAdmin = user.email === 'raphaelanugrah@gmail.com';
      const role: UserRole = isBootstrappedAdmin ? 'teacher' : preferredRole;

      let profile: UserProfile;

      if (snap.exists()) {
        profile = snap.data() as UserProfile;
      } else {
        profile = {
          uid: user.uid,
          email: user.email || '',
          displayName: user.displayName || 'Language Student',
          role,
          assignedClass: role === 'student' ? assignedClass : undefined,
          totalXp: 0,
          streakDays: 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        await setDoc(userRef, profile);
      }

      localStorage.setItem(SESSION_KEY, user.uid);
      setCurrentUser(profile);
    } catch (error) {
      console.error('Google Sign-In failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Database-backed Demo Login
   */
  const quickLoginDemo = async (role: UserRole, assignedClass = 6) => {
    const emailToUse = role === 'teacher' ? DEFAULT_TEACHER_EMAIL : DEFAULT_STUDENT_EMAIL;
    const passToUse = role === 'teacher' ? DEFAULT_TEACHER_PASS : DEFAULT_STUDENT_PASS;
    await signInWithEmail(emailToUse, passToUse);
  };

  /**
   * Update User Profile in Firestore
   */
  const updateUserProfile = async (updates: Partial<UserProfile>) => {
    if (!currentUser) return;
    const updated: UserProfile = {
      ...currentUser,
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    setCurrentUser(updated);

    try {
      const userDocRef = doc(db, 'users', currentUser.uid);
      await setDoc(userDocRef, updated, { merge: true });
    } catch (error) {
      console.warn('Error saving profile updates to Firestore:', error);
    }
  };

  /**
   * Sign out
   */
  const signOut = async () => {
    localStorage.removeItem(SESSION_KEY);
    try {
      await fbSignOut(auth);
    } catch (err) {
      console.warn('Error signing out of Firebase Auth:', err);
    }
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        firebaseUser,
        loading,
        signInWithEmail,
        signUpWithEmail,
        signInWithGoogle,
        quickLoginDemo,
        updateUserProfile,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
