import express from "express";
import { userController } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/project", userController.addUserToProject);

router.get("/", userController.getUsers);

router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
