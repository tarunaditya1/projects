import API from "./axios";

export const getAllProperties = () => API.get("/property");
export const getPropertyById = (id) => API.get(`/property/${id}`);
export const addProperty = (data) => API.post("/property", data);   // fixed
export const searchProperty = (query) => API.get(`/search?${query}`);
