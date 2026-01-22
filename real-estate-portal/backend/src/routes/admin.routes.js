import express from "express";
import { getAllUsers, approveProperty } from "../controllers/admin.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { adminOnly } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/users", protect, adminOnly, getAllUsers);
router.put("/property/:id/approve", protect, adminOnly, approveProperty);

export default router;
