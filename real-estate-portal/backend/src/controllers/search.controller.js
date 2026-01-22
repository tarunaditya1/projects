import Property from "../models/Property.js";

export const searchProperties = async (req, res) => {
  const { location, min, max, type } = req.query;

  let query = {};

  if (location) query.location = new RegExp(location, "i");
  if (type) query.type = type;
  if (min && max) query.price = { $gte: min, $lte: max };

  const results = await Property.find(query);
  res.json(results);
};
