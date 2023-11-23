// auth.js

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const secret = 'helloworld'; // the key to use when signing the JWTs

export function generateToken(data) {
  return jwt.sign(data, secret, { expiresIn: '1h' });
}

export function verifyToken(token) {
  return jwt.verify(token, secret);
}

export async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(inputPassword, hashedPassword) {
  return bcrypt.compare(inputPassword, hashedPassword);
}
