import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import propertyRoutes from "./routes/property.routes.js";
import searchRoutes from "./routes/search.routes.js";
import leadRoutes from "./routes/lead.routes.js";
import crmRoutes from "./routes/crm.routes.js";
import chatRoutes from "./routes/chat.routes.js";
import mortgageRoutes from "./routes/mortgage.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";
import virtualTourRoutes from "./routes/virtualTour.routes.js";
import mapRoutes from "./routes/map.routes.js";
import adminRoutes from "./routes/admin.routes.js";

import { errorHandler } from "./middlewares/error.middleware.js";
import { apiLimiter } from "./middlewares/rateLimit.middleware.js";
import { logger } from "./utils/logger.js";

const app = express();

// Middlewares
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(logger);
app.use(apiLimiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/property", propertyRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/crm", crmRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/mortgage", mortgageRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/virtual-tour", virtualTourRoutes);
app.use("/api/map", mapRoutes);
app.use("/api/admin", adminRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Real Estate Portal Backend API Running...");
});

// Error handler
app.use(errorHandler);

export default app;
