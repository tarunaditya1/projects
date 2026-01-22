import User from "../models/User.js";
import Property from "../models/Property.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const approveProperty = async (req, res) => {
  const property = await Property.findByIdAndUpdate(
    req.params.id,
    { status: "approved" },
    { new: true }
  );
  res.json(property);
};
