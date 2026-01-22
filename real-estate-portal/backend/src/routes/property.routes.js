import express from "express";
import {
  addProperty,
  getAllProperties,
  getPropertyById
} from "../controllers/property.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, addProperty);
router.get("/", getAllProperties);
router.get("/:id", getPropertyById);

export default router;
