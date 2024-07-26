import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants/common.constant.js';

const generateToken = (user) => {
  return jwt.sign({ username: user.username }, JWT_SECRET, {
    expiresIn: '1h',
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

export { generateToken, verifyToken };
