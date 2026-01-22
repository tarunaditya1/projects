import VirtualTour from "../models/VirtualTour.js";

export const addVirtualTour = async (req, res) => {
  const tour = await VirtualTour.create(req.body);
  res.status(201).json(tour);
};

export const getVirtualTour = async (req, res) => {
  const tour = await VirtualTour.findOne({ property: req.params.propertyId });
  res.json(tour);
};
