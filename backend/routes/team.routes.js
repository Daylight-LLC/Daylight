import express from "express";
import { addTeam } from "../controllers/team.controller.js";
import rateLimit from "express-rate-limit";

const router = express.Router();

const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

router.post("/:projectId/teams", rateLimiter, addTeam);

export default router;
