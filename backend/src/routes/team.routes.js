import express from "express";
import { teamController } from "../controllers/team.controller.js";

const router = express.Router();

router.post("/", teamController.createTeam);
router.post("/:id/members", teamController.addTeamMember);
router.post("/:id/assign-lead", teamController.assignTeamLead);

router.get("/", teamController.getTeams);
router.get("/:id", teamController.getTeamById);

router.put("/:id", teamController.updateTeam);
router.put("/:id/assign-lead", teamController.updateTeamLead);

router.delete("/:id", teamController.deleteTeam);
router.delete("/:id/members/:memberId", teamController.removeTeamMember);

export default router;
