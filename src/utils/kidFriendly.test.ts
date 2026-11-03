import test from 'node:test';
import assert from 'node:assert/strict';
import { getStageForClass, getKidMascotGreeting, GRADE_STAGES } from './kidFriendly';

test('getStageForClass maps classes correctly to kid-friendly stages', () => {
  assert.equal(getStageForClass(1).id, 'primary');
  assert.equal(getStageForClass(5).id, 'primary');
  assert.equal(getStageForClass(6).id, 'middle');
  assert.equal(getStageForClass(8).id, 'middle');
  assert.equal(getStageForClass(9).id, 'secondary');
  assert.equal(getStageForClass(10).id, 'secondary');
  assert.equal(getStageForClass(11).id, 'senior');
  assert.equal(getStageForClass(12).id, 'senior');
});

test('getKidMascotGreeting returns short, punchy kid-friendly strings', () => {
  const enGreeting = getKidMascotGreeting('english', 'reading', 'Aarav');
  assert.match(enGreeting, /Hey Aarav/);
  assert.match(enGreeting, /fun story/);

  const hiGreeting = getKidMascotGreeting('hindi', 'pronunciation', 'Priya');
  assert.match(hiGreeting, /मेरे साथ बोलो Priya/);

  const saGreeting = getKidMascotGreeting('sanskrit', 'listening', 'Rohan');
  assert.match(saGreeting, /सावधानतया शृणोतु Rohan/);
});
