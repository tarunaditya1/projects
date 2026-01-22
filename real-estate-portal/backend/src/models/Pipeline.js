import mongoose from "mongoose";

const pipelineSchema = new mongoose.Schema({
  lead: { type: mongoose.Schema.Types.ObjectId, ref: "Lead" },
  stage: { type: String, enum: ["New Lead", "Contacted", "Site Visit", "Negotiation", "Closed"] }
}, { timestamps: true });

export default mongoose.model("Pipeline", pipelineSchema);
