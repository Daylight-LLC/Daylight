import express from "express";
import rateLimit from "express-rate-limit";

import {
  addProject,
  getProjects,
  deleteProject,
  updateProject,
} from "../controllers/project.controller.js";

const router = express.Router();

const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

//project routes
router.post("/", rateLimiter, addProject);
router.get("/", rateLimiter, getProjects);
router.delete("/:id", rateLimiter, deleteProject);
router.put("/:id", rateLimiter, updateProject);

export default router;
