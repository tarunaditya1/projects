import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  room: String,
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: String
}, { timestamps: true });

export default mongoose.model("Message", messageSchema);
