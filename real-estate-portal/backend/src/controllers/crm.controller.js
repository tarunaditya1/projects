import Pipeline from "../models/Pipeline.js";

export const getPipeline = async (req, res) => {
  const pipeline = await Pipeline.find().populate("lead");
  res.json(pipeline);
};

export const updateStage = async (req, res) => {
  const { stage } = req.body;

  const pipeline = await Pipeline.findByIdAndUpdate(
    req.params.id,
    { stage },
    { new: true }
  );

  res.json(pipeline);
};
