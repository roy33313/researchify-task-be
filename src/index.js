import express from "express";

import connectDB from "./config/database.config.js";
import authRoutes from "./routes/auth.route.js";
import { EXPRESS_PORT_NO } from "./constants/common.constant.js";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

connectDB();

app.listen(EXPRESS_PORT_NO, () => {
  console.log("app is listening on", EXPRESS_PORT_NO);
});
