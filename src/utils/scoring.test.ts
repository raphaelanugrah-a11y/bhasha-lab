import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeText,
  levenshteinDistance,
  calculatePronunciationScore,
  calculateQuizScore,
  matchesClassGrade,
} from './scoring.js';

test('normalizeText handles English, Hindi, and Sanskrit punctuation', () => {
  assert.equal(normalizeText('Hello, World!'), 'hello world');
  assert.equal(normalizeText('नमस्ते, भारत!'), 'नमस्ते भारत');
  assert.equal(normalizeText('सर्वे भवन्तु सुखिनः।'), 'सर्वे भवन्तु सुखिनः');
});

test('levenshteinDistance calculates correct edit distance', () => {
  assert.equal(levenshteinDistance('kitten', 'sitting'), 3);
  assert.equal(levenshteinDistance('read', 'read'), 0);
  assert.equal(levenshteinDistance('', 'abc'), 3);
});

test('calculatePronunciationScore scores exact match as 100', () => {
  const result = calculatePronunciationScore('Good morning teacher', 'good morning teacher');
  assert.equal(result.score, 100);
  assert.equal(result.accuracy, 'excellent');
});

test('calculatePronunciationScore evaluates minor pronunciation deviation', () => {
  const result = calculatePronunciationScore('sanskrit grammar rules', 'sanscrit gramar rules');
  assert.ok(result.score >= 80);
  assert.equal(result.accuracy, 'excellent');
});

test('calculateQuizScore evaluates correct answers and passes at 60%', () => {
  const questions = [
    { correctIndex: 1 },
    { correctIndex: 0 },
    { correctIndex: 2 },
    { correctIndex: 3 },
  ];
  // 3 out of 4 correct = 75%
  const answers = { 0: 1, 1: 0, 2: 2, 3: 1 };
  const res = calculateQuizScore(answers, questions);
  assert.equal(res.correctCount, 3);
  assert.equal(res.score, 75);
  assert.equal(res.passed, true);
});

test('matchesClassGrade correctly matches individual and wildcard grades', () => {
  assert.equal(matchesClassGrade(5, 5), true);
  assert.equal(matchesClassGrade(5, 6), false);
  assert.equal(matchesClassGrade(10, 0), true);
});
