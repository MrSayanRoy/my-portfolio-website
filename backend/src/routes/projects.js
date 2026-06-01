const express = require("express");
const router = express.Router();

// Your actual projects from the portfolio
const projects = [
  {
    id: 1,
    title: "Rent For Cents",
    description:
      "A full-stack vehicle rental application focusing on seamless user experience and secure transactions.",
    tags: ["Full Stack", "React", "Node.js", "MongoDB"],
    liveUrl: null,
    githubUrl: null,
    featured: true,
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "An immersive personal showcase built with Tailwind CSS and React, prioritizing performance and motion design.",
    tags: ["React", "Tailwind CSS", "Frontend"],
    liveUrl: "https://my-portfolio-website-rho-black.vercel.app",
    githubUrl: "https://github.com/MrSayanRoy",
    featured: true,
    createdAt: "2024-06-01",
  },
];

// GET /api/projects — all projects
router.get("/", (req, res) => {
  const { featured } = req.query;

  let result = projects;
  if (featured === "true") {
    result = projects.filter((p) => p.featured);
  }

  res.json({
    success: true,
    count: result.length,
    data: result,
  });
});

// GET /api/projects/:id — single project
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return res.status(404).json({ success: false, message: "Project not found." });
  }

  res.json({ success: true, data: project });
});

module.exports = router;
