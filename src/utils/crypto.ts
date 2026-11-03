/**
 * Cryptographic helper to securely hash passwords before storing in Firestore
 * Uses the Web Crypto API (SHA-256) with application salt
 */

const SALT = 'bhashalab_salt_v1_secure_';

export async function hashPassword(plainText: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(SALT + plainText);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function verifyPassword(plainText: string, hashed: string): Promise<boolean> {
  const computed = await hashPassword(plainText);
  return computed === hashed;
}
