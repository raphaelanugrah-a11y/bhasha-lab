export type Language = 'english' | 'hindi' | 'sanskrit';

export type LabSection = 'reading' | 'pronunciation' | 'listening' | 'grammar';

export type UserRole = 'student' | 'teacher' | 'admin';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  assignedClass?: number; // 1 - 12
  passwordHash?: string;
  totalXp?: number;
  streakDays?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface VocabularyItem {
  word: string;
  meaning: string;
  pronunciation?: string;
  exampleSentence?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface LabContentItem {
  id: string;
  language: Language;
  section: LabSection;
  classGrade: number; // 1 to 12
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  contentBody: string;
  translation?: string;
  audioText?: string;
  phoneticGuide?: string;
  grammarNotes?: string;
  vocabulary?: VocabularyItem[];
  exercises?: QuizQuestion[];
  authorId: string;
  authorName?: string;
  status: 'published' | 'draft';
  createdAt?: string;
  updatedAt?: string;
}

export interface UserProgressRecord {
  id: string;
  userId: string;
  contentId: string;
  language: Language;
  section: LabSection;
  score: number;
  completed: boolean;
  notes?: string;
  updatedAt?: string;
}
