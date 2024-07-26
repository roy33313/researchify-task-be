import User from '../models/User.model.js';

const findUserByUsername = async (username) => {
  const result = await User.findOne({ username });
  return result;
};

const createUser = async (username, password) => {
  const result = await User.create({ username, password });
  return result;
};

const getUserByUsername = async (username) => {
  const result = User.findOne({ username });
  return result;
};

export { findUserByUsername, createUser, getUserByUsername };
