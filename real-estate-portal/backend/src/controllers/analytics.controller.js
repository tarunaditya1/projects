import User from "../models/User.js";
import Property from "../models/Property.js";
import Lead from "../models/Lead.js";

export const getDashboardStats = async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalProperties = await Property.countDocuments();
  const totalLeads = await Lead.countDocuments();

  res.json({ totalUsers, totalProperties, totalLeads });
};
