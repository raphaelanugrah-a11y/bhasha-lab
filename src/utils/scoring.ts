/**
 * Scoring and text comparison utilities for Language Lab
 */

export function normalizeText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .trim()
    // Remove punctuation, quotes, symbols while keeping Devanagari and Latin letters
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'।॥]/g, '')
    .replace(/\s+/g, ' ');
}

/**
 * Levenshtein distance between two strings
 */
export function levenshteinDistance(s1: string, s2: string): number {
  const m = s1.length;
  const n = s2.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1, // deletion
        dp[i][j - 1] + 1, // insertion
        dp[i - 1][j - 1] + cost // substitution
      );
    }
  }

  return dp[m][n];
}

/**
 * Calculate similarity percentage (0 - 100) between spoken and target text
 */
export function calculatePronunciationScore(target: string, spoken: string): {
  score: number;
  accuracy: 'excellent' | 'good' | 'needs-practice';
  normalizedTarget: string;
  normalizedSpoken: string;
} {
  const normTarget = normalizeText(target);
  const normSpoken = normalizeText(spoken);

  if (!normTarget || !normSpoken) {
    return {
      score: 0,
      accuracy: 'needs-practice',
      normalizedTarget: normTarget,
      normalizedSpoken: normSpoken,
    };
  }

  if (normTarget === normSpoken) {
    return {
      score: 100,
      accuracy: 'excellent',
      normalizedTarget: normTarget,
      normalizedSpoken: normSpoken,
    };
  }

  const maxLen = Math.max(normTarget.length, normSpoken.length);
  const dist = levenshteinDistance(normTarget, normSpoken);
  const similarityRatio = Math.max(0, (maxLen - dist) / maxLen);
  const score = Math.round(similarityRatio * 100);

  let accuracy: 'excellent' | 'good' | 'needs-practice' = 'needs-practice';
  if (score >= 80) accuracy = 'excellent';
  else if (score >= 60) accuracy = 'good';

  return {
    score,
    accuracy,
    normalizedTarget: normTarget,
    normalizedSpoken: normSpoken,
  };
}

/**
 * Calculate quiz score percentage
 */
export function calculateQuizScore(answers: Record<number, number>, questions: { correctIndex: number }[]): {
  score: number;
  correctCount: number;
  total: number;
  passed: boolean;
} {
  const total = questions.length;
  if (total === 0) return { score: 100, correctCount: 0, total: 0, passed: true };

  let correctCount = 0;
  questions.forEach((q, idx) => {
    if (answers[idx] === q.correctIndex) {
      correctCount += 1;
    }
  });

  const score = Math.round((correctCount / total) * 100);
  return {
    score,
    correctCount,
    total,
    passed: score >= 60,
  };
}

/**
 * Filter items by Class grade range
 */
export function matchesClassGrade(itemGrade: number, selectedGrade: number): boolean {
  if (selectedGrade === 0) return true; // all classes
  return itemGrade === selectedGrade;
}

/**
 * Format Grade badge
 */
export function formatClassLabel(classNum: number): string {
  return `Class ${classNum}`;
}
