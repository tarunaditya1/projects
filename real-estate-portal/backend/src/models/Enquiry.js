import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  property: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  message: String
}, { timestamps: true });

export default mongoose.model("Enquiry", enquirySchema);
