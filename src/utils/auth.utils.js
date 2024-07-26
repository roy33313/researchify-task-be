import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/common.constant.js";

const generateToken = (user) => {
  return jwt.sign({ username: user.username }, JWT_SECRET, {
    expiresIn: "1h",
  });
};

export { generateToken };
