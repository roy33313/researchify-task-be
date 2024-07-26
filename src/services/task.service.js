import * as TaskRepository from '../repositories/task.repository.js';
import * as ProjectRepository from '../repositories/project.repository.js';
import logger from '../config/logger.config.js';

const createTask = async (name, createdBy, projectId) => {
  try {
    const project = await ProjectRepository.findProjectById(projectId);
    if (!project) {
      throw new Error('Project not found');
    }

    const task = await TaskRepository.createTask(name, createdBy, projectId);

    project.tasks.push(task._id);
    await project.save();

    return task;
  } catch (error) {
    logger.error('Error creating task:', error);
    throw new Error('Error creating task');
  }
};

const getTasksByUserId = async (userId, status, sort) => {
  try {
    const result = await TaskRepository.findTasksByUserId(userId, status, sort);
    return result;
  } catch (error) {
    logger.error('Error fetching tasks:', error);
    throw new Error('Error fetching tasks');
  }
};

const getTasksByProject = async (projectId, userId) => {
  try {
    const result = await TaskRepository.findTasksByProject(projectId, userId);
    return result;
  } catch (error) {
    logger.error('Error fetching tasks by project:', error);
    throw new Error('Error fetching tasks by project');
  }
};

export { createTask, getTasksByUserId, getTasksByProject };
