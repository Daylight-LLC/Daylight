import express from "express";

import {
  addProject,
  getProjects,
  deleteProject,
  updateProject,
} from "../controllers/project.controller.js";

const router = express.Router();

router.post("/", addProject);
router.get("/", getProjects);
router.delete("/:id", deleteProject);
router.put("/:id", updateProject);

export default router;
