import express from "express";
import { calculateMortgage } from "../controllers/mortgage.controller.js";

const router = express.Router();

router.post("/calculate", calculateMortgage);

export default router;
