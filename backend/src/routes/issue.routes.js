import express from "express";
import { issueController } from "../controllers/issue.controller.js";

const router = express.Router();

router.post("/", issueController.createIssue);

router.get("/", issueController.getIssues);
router.get("/:id", issueController.getIssueById);

router.put("/:id", issueController.updateIssue);
router.put("/:id/status", issueController.updateIssueStatus);

router.delete("/:id", issueController.deleteIssue);

export default router;
