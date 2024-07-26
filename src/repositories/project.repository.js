import Project from '../models/Project.model.js';

const findProjectById = async (projectId) => {
  const result = await Project.findById(projectId).populate('tasks');
  return result;
};

const createProject = async (name, description, userId) => {
  const result = await Project.create({
    name,
    description,
    user: userId,
  });
  return result;
};

const findProjectsByUserId = async (userId) => {
  const result = await Project.find({ user: userId }).populate('tasks');
  return result;
};

export { findProjectById, createProject, findProjectsByUserId };
