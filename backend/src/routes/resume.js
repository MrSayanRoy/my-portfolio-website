const express = require("express");
const path = require("path");
const https = require("https");
const http = require("http");

const router = express.Router();

const RESUME_URL = "https://my-portfolio-website-rho-black.vercel.app/resume.pdf";

/**
 * GET /api/resume
 * Proxies the resume PDF so the frontend can track downloads
 * and you can swap the file source any time without changing the frontend URL.
 */
router.get("/", (req, res) => {
  const protocol = RESUME_URL.startsWith("https") ? https : http;

  const request = protocol.get(RESUME_URL, (pdfResponse) => {
    if (pdfResponse.statusCode !== 200) {
      return res.status(404).json({ success: false, message: "Resume not found." });
    }

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="Sayan_Roy_Resume.pdf"');
    res.setHeader("Cache-Control", "public, max-age=3600"); // cache 1 hour

    pdfResponse.pipe(res);

    console.log(`[Resume] Downloaded by ${req.ip}`);
  });

  request.on("error", (err) => {
    console.error("[Resume] Proxy error:", err.message);
    res.status(500).json({ success: false, message: "Could not fetch resume. Try again later." });
  });
});

module.exports = router;
