import mongoose from "mongoose";
import logger from "./logger.config.js";
import { MONGO_DB_URI } from "../constants/common.constant.js";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI);
    logger.info("MongoDB connected");
  } catch (err) {
    logger.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

export default connectDB;
