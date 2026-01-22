import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  lat: Number,
  lng: Number,
  type: { type: String, enum: ["rent", "buy", "commercial"] },
  bedrooms: Number,
  bathrooms: Number,
  area: Number,
  images: [String],
  agent: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, default: "pending" },
  views: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("Property", propertySchema);
