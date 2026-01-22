import API from "./axios";

export const getPipeline = () => API.get("/crm/pipeline");
export const updateStage = (leadId, stage) =>
  API.put(`/crm/update-stage/${leadId}`, { stage });
