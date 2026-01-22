import dotenv from "dotenv";
import http from "http";
import app from "./app.js";
import connectDB from "./config/db.js";
import { Server } from "socket.io";

import { chatSocket } from "./sockets/chat.socket.js";
import { notificationSocket } from "./sockets/notification.socket.js";

import { analyticsJob } from "./jobs/analytics.job.js";
import { leadFollowupJob } from "./jobs/leadFollowup.job.js";
import { reportJob } from "./jobs/report.job.js";

dotenv.config();
console.log("MONGO_URI:", process.env.MONGO_URI);
// Connect MongoDB
connectDB();

// Create HTTP server
const server = http.createServer(app);

// Setup Socket.io
const io = new Server(server, {
  cors: { origin: "*" }
});

// Attach sockets
chatSocket(io);
notificationSocket(io);

// Start background jobs
analyticsJob();
leadFollowupJob();
reportJob();

// Start server
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
