import Task from "../models/Task.model.js";
import { RECENT } from "../constants/task.constant.js";

const findTaskById = async (taskId) => {
  const result = await Task.findById(taskId);
  return result;
};

const createTask = async (name, createdBy, project) => {
  const result = await Task.create({ name, createdBy, project });
  return result;
};

const findTasksByUserId = async (userId, status, sort) => {
  const filter = { createdBy: userId };
  if (status) {
    filter.status = status;
  }

  const sortOptions = {};
  if (sort === RECENT) {
    sortOptions.createdAt = -1;
  }

  const result = await Task.find(filter).sort(sortOptions);
  return result;
};

const findTasksByProject = async (projectId, userId) => {
  const result = await Task.find({ project: projectId, createdBy: userId });
  return result;
};

export { findTaskById, createTask, findTasksByUserId, findTasksByProject };
