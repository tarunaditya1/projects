import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  property: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  agent: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  stage: { type: String, default: "New Lead" }
}, { timestamps: true });

export default mongoose.model("Lead", leadSchema);
