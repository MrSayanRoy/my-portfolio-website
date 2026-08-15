const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const { globalRateLimiter } = require("./middleware/rateLimiter");
const contactRoutes = require("./routes/contact");
const projectRoutes = require("./routes/projects");
const resumeRoutes = require("./routes/resume");

const app = express();
app.set("trust proxy", 1);

// ─── Security ────────────────────────────────────────────────────────────────
app.use(helmet());

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:3000",
  "http://localhost:5173",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // allow curl / Postman (no origin) in dev
      if (!origin && process.env.NODE_ENV !== "production") return callback(null, true);
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS blocked: ${origin}`));
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ─── General Middleware ───────────────────────────────────────────────────────
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(globalRateLimiter);

// ─── Routes ──────────────────────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "Sayan Roy Portfolio API",
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
  });
});

app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/resume", resumeRoutes);

// ─── 404 ─────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

// ─── Global Error Handler ─────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("[Error]", err.message);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Something went wrong. Please try again."
        : err.message,
  });
});

module.exports = app;
