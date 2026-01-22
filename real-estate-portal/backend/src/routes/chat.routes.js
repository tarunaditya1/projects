import express from "express";
import { sendMessage, getMessages } from "../controllers/chat.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, sendMessage);
router.get("/:room", protect, getMessages);

export default router;
