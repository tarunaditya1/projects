import express from "express";
import { getPipeline, updateStage } from "../controllers/crm.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getPipeline);
router.put("/:id", protect, updateStage);

export default router;
