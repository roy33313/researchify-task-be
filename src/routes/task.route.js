import express from 'express';
import * as TaskController from '../controllers/task.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', authMiddleware, TaskController.createTask);

router.get('/', authMiddleware, TaskController.getTasks);

router.get('/project/:projectId', authMiddleware, TaskController.getTasksByProject);

export default router;
