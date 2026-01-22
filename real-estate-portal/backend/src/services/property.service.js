import Property from "../models/Property.js";

export const createProperty = async (data) => {
  return await Property.create(data);
};

export const getAllProperties = async () => {
  return await Property.find().populate("agent");
};

export const getPropertyById = async (id) => {
  return await Property.findById(id).populate("agent");
};

export const updateProperty = async (id, data) => {
  return await Property.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProperty = async (id) => {
  return await Property.findByIdAndDelete(id);
};
