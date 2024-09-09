import express from "express";

import { addProject } from "../controllers/project.controller.js";

const router = express.Router();

router.post("/", addProject);

export default router;
