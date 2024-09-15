import express from "express";
import rateLimit from "express-rate-limit";
import {
  addIssue,
  getIssues,
  updateIssue,
} from "../controllers/issue.controller.js";

const router = express.Router();

const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

router.post("/:projectId/:teamId/:teamMemberId/issues", rateLimiter, addIssue);
router.get("/:projectId/:teamId/:teamMemberId/issues", rateLimiter, getIssues);
router.put(
  "/:projectId/:teamId/:teamMemberId/:issueId/issues",
  rateLimiter,
  updateIssue
);

export default router;
