import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  action: String,
  description: String
}, { timestamps: true });

export default mongoose.model("ActivityLog", activityLogSchema);
