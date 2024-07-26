import * as AuthService from "../services/auth.service.js";
import logger from "../config/logger.config.js";
import { generateToken } from "../utils/auth.utils.js";

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await AuthService.registerUser(username, password);
    res.status(201).json({ message: "User registered", user });
  } catch (error) {
    logger.error("Error in register controller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await AuthService.authenticateUser(username, password);
    if (user) {
      const token = generateToken(user);
      res.status(200).json({ message: "Login successful", token });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    logger.error("Error in login controller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { register, login };
