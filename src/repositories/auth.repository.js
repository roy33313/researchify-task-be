import User from "../models/User.model.js";

const findUserByUsername = async (username) => {
  const result = await User.findOne({ username });
  return result;
};

const createUser = async (username, password) => {
  const result = await User.create({ username, password });
  return result;
};

export { findUserByUsername, createUser };
