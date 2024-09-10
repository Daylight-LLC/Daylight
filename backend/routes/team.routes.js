import express from "express";

import { addTeam } from "../controllers/team.controller.js";

const router = express.Router();

router.post("/:projectId/teams", addTeam);

export default router;
