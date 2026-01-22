import Lead from "../models/Lead.js";

export const createLead = async (req, res) => {
  const lead = await Lead.create(req.body);
  res.status(201).json(lead);
};

export const getAgentLeads = async (req, res) => {
  const leads = await Lead.find({ agent: req.user.id }).populate("property");
  res.json(leads);
};
