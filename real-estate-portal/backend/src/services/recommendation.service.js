import Property from "../models/Property.js";

export const getRecommendations = async (userPreferences) => {
  const { location, type, budget } = userPreferences;

  return await Property.find({
    location: new RegExp(location, "i"),
    type,
    price: { $lte: budget }
  }).limit(5);
};
