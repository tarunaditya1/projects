import mongoose from "mongoose";

const virtualTourSchema = new mongoose.Schema({
  property: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  videoUrl: String,
  images360: [String]
}, { timestamps: true });

export default mongoose.model("VirtualTour", virtualTourSchema);
