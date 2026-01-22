import Lead from "../models/Lead.js";

export const createLead = async (data) => {
  return await Lead.create(data);
};

export const getAgentLeads = async (agentId) => {
  return await Lead.find({ agent: agentId }).populate("property");
};
