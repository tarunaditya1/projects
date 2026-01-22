import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
  const msg = await Message.create(req.body);
  res.status(201).json(msg);
};

export const getMessages = async (req, res) => {
  const messages = await Message.find({ room: req.params.room });
  res.json(messages);
};
