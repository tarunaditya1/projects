import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema({
  totalUsers: Number,
  totalProperties: Number,
  totalLeads: Number,
  totalSales: Number
}, { timestamps: true });

export default mongoose.model("Analytics", analyticsSchema);
