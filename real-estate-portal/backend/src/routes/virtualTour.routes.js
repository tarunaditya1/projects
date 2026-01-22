import express from "express";
import { addVirtualTour, getVirtualTour } from "../controllers/virtualTour.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, addVirtualTour);
router.get("/:propertyId", getVirtualTour);

export default router;
