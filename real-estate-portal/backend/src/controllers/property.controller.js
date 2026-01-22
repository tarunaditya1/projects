import Property from "../models/Property.js";

export const addProperty = async (req, res) => {
  try {
    const property = await Property.create(req.body);
    res.status(201).json(property);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate("agent");
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate("agent");
    res.json(property);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
