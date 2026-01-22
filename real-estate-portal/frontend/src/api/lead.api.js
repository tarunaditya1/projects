import API from "./axios";

export const sendLead = (data) => API.post("/lead/create", data);
export const getLeads = () => API.get("/lead/my-leads");
