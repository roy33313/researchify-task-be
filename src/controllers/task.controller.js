import * as TaskService from '../services/task.service.js';

const createTask = async (req, res) => {
  try {
    const { name, projectId } = req.body;
    const createdBy = req.user._id;
    const task = await TaskService.createTask(name, createdBy, projectId);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Task creation failed' });
  }
};

const getTasks = async (req, res) => {
  try {
    const { status, sort } = req.query;
    const userId = req.user._id;
    const tasks = await TaskService.getTasksByUserId(userId, status, sort);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Fetching tasks failed' });
  }
};

const getTasksByProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const userId = req.user._id;
    const tasks = await TaskService.getTasksByProject(projectId, userId);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Fetching tasks by project failed' });
  }
};

export { createTask, getTasks, getTasksByProject };
