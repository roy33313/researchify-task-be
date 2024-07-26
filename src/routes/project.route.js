import express from 'express';
import * as ProjectController from '../controllers/project.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', authMiddleware, ProjectController.createProject);

router.get('/', authMiddleware, ProjectController.getProjects);

export default router;
