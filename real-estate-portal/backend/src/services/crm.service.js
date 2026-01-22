import Pipeline from "../models/Pipeline.js";

export const getPipelineData = async () => {
  return await Pipeline.find().populate("lead");
};

export const updatePipelineStage = async (id, stage) => {
  return await Pipeline.findByIdAndUpdate(id, { stage }, { new: true });
};
