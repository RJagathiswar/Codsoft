const express = require("express");
const Project = require("../models/Project");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const project = await Project.create({ ...req.body, userId: req.userId });
  res.json(project);
});

router.get("/", auth, async (req, res) => {
  const projects = await Project.find({ userId: req.userId });
  res.json(projects);
});

router.put("/:id", auth, async (req, res) => {
  await Project.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Updated" });
});

router.delete("/:id", auth, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
