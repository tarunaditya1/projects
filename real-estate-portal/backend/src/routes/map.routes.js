import express from "express";
import { getNearbyProperties } from "../controllers/map.controller.js";

const router = express.Router();

router.get("/nearby", getNearbyProperties);

export default router;
