import test from 'node:test';
import assert from 'node:assert/strict';
import { hashPassword, verifyPassword } from './crypto';

test('hashPassword produces consistent SHA-256 hex string', async () => {
  const hash1 = await hashPassword('Student@123');
  const hash2 = await hashPassword('Student@123');
  assert.equal(hash1, hash2);
  assert.equal(hash1.length, 64); // 256 bits = 64 hex chars
});

test('verifyPassword validates correct passwords and rejects wrong ones', async () => {
  const hash = await hashPassword('SecretPass2026!');
  const isMatch = await verifyPassword('SecretPass2026!', hash);
  assert.equal(isMatch, true);

  const isWrong = await verifyPassword('WrongPassword', hash);
  assert.equal(isWrong, false);
});
