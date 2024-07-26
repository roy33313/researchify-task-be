import logger from '../config/logger.config.js';
import { getUserByUsername } from '../repositories/auth.repository.js';
import { verifyToken } from '../utils/auth.utils.js';

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = verifyToken(token);
    const user = await getUserByUsername(decoded.username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  } catch (error) {
    logger.error('Authentication failed:', error);
    res.status(401).json({ message: 'Authentication failed' });
  }
};

export default authMiddleware;
