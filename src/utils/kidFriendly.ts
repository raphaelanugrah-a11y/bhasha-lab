/**
 * Helper utilities for kid-friendly grade stages, greetings, and simplified UI formatting
 */

export interface GradeStage {
  id: 'primary' | 'middle' | 'secondary' | 'senior';
  name: string;
  emoji: string;
  classes: number[];
  tagline: string;
}

export const GRADE_STAGES: GradeStage[] = [
  {
    id: 'primary',
    name: 'Primary (1–5)',
    emoji: '🌱',
    classes: [1, 2, 3, 4, 5],
    tagline: 'Letters, Sounds & Fun Stories',
  },
  {
    id: 'middle',
    name: 'Middle (6–8)',
    emoji: '🚀',
    classes: [6, 7, 8],
    tagline: 'Speaking, Grammar & Fluency',
  },
  {
    id: 'secondary',
    name: 'High School (9–10)',
    emoji: '⚡',
    classes: [9, 10],
    tagline: 'Deep Reading & Expression',
  },
  {
    id: 'senior',
    name: 'Senior (11–12)',
    emoji: '👑',
    classes: [11, 12],
    tagline: 'Literature & Mastery',
  },
];

export function getStageForClass(grade: number): GradeStage {
  if (grade >= 1 && grade <= 5) return GRADE_STAGES[0];
  if (grade >= 6 && grade <= 8) return GRADE_STAGES[1];
  if (grade >= 9 && grade <= 10) return GRADE_STAGES[2];
  return GRADE_STAGES[3];
}

export function getKidMascotGreeting(language: string, section: string, userName?: string): string {
  const name = userName ? userName.split(' ')[0] : 'friend';

  if (language === 'hindi') {
    switch (section) {
      case 'reading': return `नमस्ते ${name}! आओ मजेदार कहानियां पढ़ें! 📖`;
      case 'pronunciation': return `मेरे साथ बोलो ${name}! माइक दबाओ और बोलो! 🎙️`;
      case 'listening': return `ध्यान से सुनो ${name}! कान खोलो और उत्तर दो! 🎧`;
      case 'grammar': return `शब्दों का जादू सीखो ${name}! बहुत आसान है! ✨`;
      default: return `नमस्ते ${name}! आज क्या सीखना है? ✏️`;
    }
  }

  if (language === 'sanskrit') {
    switch (section) {
      case 'reading': return `नमो नमः ${name}! सुन्दर-श्लोकान् सस्वरं पठामः! 📖`;
      case 'pronunciation': return `शुद्धं वदतु ${name}! मया सह अभ्यासम् कुरु! 🎙️`;
      case 'listening': return `सावधानतया शृणोतु ${name}! मधुरं वचनम्! 🎧`;
      case 'grammar': return `संस्कृत-व्याकरणम् अतीव सरलम् अस्ति! ✨`;
      default: return `नमो नमः ${name}! स्वागतम्! ✏️`;
    }
  }

  // English default
  switch (section) {
    case 'reading': return `Hey ${name}! Ready for a fun story? Let's read! 📖`;
    case 'pronunciation': return `Repeat after me, ${name}! Tap the mic and speak! 🎙️`;
    case 'listening': return `Listen closely, ${name}! Can you hear every word? 🎧`;
    case 'grammar': return `Grammar is like a puzzle, ${name}! Let's solve it! ✨`;
    default: return `Hi ${name}! Pick a lesson and let's play! ✏️`;
  }
}
