import express from "express";
import { createLead, getAgentLeads } from "../controllers/lead.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", createLead);
router.get("/agent", protect, getAgentLeads);

export default router;
