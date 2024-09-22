// src/controllers/user.controller.js
import { User } from "../models/User.model.js";
import { Team } from "../models/Team.model.js";
import { Project } from "../models/Project.model.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const userController = {
  register: async (req, res) => {
    try {
      const { username, email, password, role, teamId, projectId } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      let user = new User({
        username,
        email,
        password: hashedPassword,
        role,
      });

      // Team association (optional for all roles)
      if (teamId) {
        const team = await Team.findById(teamId);
        if (!team) {
          return res.status(404).json({ error: "Team not found" });
        }
        user.team = teamId;
        // Add user to team members
        await Team.findByIdAndUpdate(teamId, { $push: { members: user._id } });
      }

      // Project association (optional for all roles)
      if (projectId) {
        const project = await Project.findById(projectId);
        if (!project) {
          return res.status(404).json({ error: "Project not found" });
        }
        user.projects = [projectId];
      }

      await user.save();

      res
        .status(201)
        .json({ message: "User created successfully", userId: user._id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addUserToProject: async (req, res) => {
    try {
      const { userId, projectId } = req.body;
      const user = await User.findById(userId);
      const project = await Project.findById(projectId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }

      if (!user.projects.includes(projectId)) {
        user.projects.push(projectId);
        await user.save();
      }

      if (user.team && !project.teams.includes(user.team)) {
        project.teams.push(user.team);
        await project.save();
      }

      res.json({ message: "User added to project successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({
        token,
        user: { id: user._id, username: user.username, role: user.role },
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.find().populate(
        "assignedIssues",
        "title status"
      );
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json({ success: true, data: user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
