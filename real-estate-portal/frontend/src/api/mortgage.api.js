import API from "./axios";

export const calculateMortgage = (data) =>
  API.post("/mortgage/calculate", data);
