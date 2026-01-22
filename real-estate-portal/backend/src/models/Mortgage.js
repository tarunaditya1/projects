import mongoose from "mongoose";

const mortgageSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: Number,
  interest: Number,
  years: Number,
  emi: Number
}, { timestamps: true });

export default mongoose.model("Mortgage", mortgageSchema);
