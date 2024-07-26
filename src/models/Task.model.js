import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  completedAt: { type: Date },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed", "postponed", "cancelled"],
    default: "pending",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
