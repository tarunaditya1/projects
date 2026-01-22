import Property from "../models/Property.js";

export const searchProperties = async (filters) => {
  const { location, min, max, type } = filters;
  let query = {};

  if (location) query.location = new RegExp(location, "i");
  if (type) query.type = type;
  if (min && max) query.price = { $gte: min, $lte: max };

  return await Property.find(query);
};
