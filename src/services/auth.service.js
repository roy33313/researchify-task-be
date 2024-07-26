import bcrypt from "bcryptjs";

import * as UserRepository from "../repositories/auth.repository.js";
import logger from "../config/logger.config.js";

const registerUser = async (username, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserRepository.createUser(username, hashedPassword);
    return user;
  } catch (error) {
    logger.error("Error registering user:", error);
    throw new Error("Error registering user");
  }
};

const authenticateUser = async (username, password) => {
  try {
    const user = await UserRepository.findUserByUsername(username);
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch ? user : null;
  } catch (error) {
    logger.error("Error authenticating user:", error);
    throw new Error("Error authenticating user");
  }
};

export { registerUser, authenticateUser };
