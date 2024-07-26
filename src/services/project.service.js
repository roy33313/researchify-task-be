import * as ProjectRepository from '../repositories/project.repository.js';
import logger from '../config/logger.config.js';

const createProject = async (name, description, userId) => {
  try {
    const project = await ProjectRepository.createProject(name, description, userId);
    return project;
  } catch (error) {
    logger.error('Error creating project:', error);
    throw new Error('Error creating project');
  }
};

const getProjectsByUserId = async (userId) => {
  try {
    const result = await ProjectRepository.findProjectsByUserId(userId);
    return result;
  } catch (error) {
    logger.error('Error fetching projects:', error);
    throw new Error('Error fetching projects');
  }
};

export { createProject, getProjectsByUserId };
