import { Project } from "../models/Project.model.js";
import { User } from "../models/User.model.js";

export const projectController = {
  createProject: async (req, res) => {
    try {
      const { name, description, dueDate, projectManagerId } = req.body;

      const projectManager = await User.findById(projectManagerId);
      if (!projectManager) {
        return res.status(404).json({ error: "Project manager not found" });
      }

      if (projectManager.role !== "PROJECT_MANAGER") {
        return res
          .status(400)
          .json({ error: "Project manager must have PROJECT_MANAGER role" });
      }

      const project = new Project({
        name,
        description,
        dueDate,
        projectManager: projectManagerId,
      });

      await project.save();

      // Add the project to the project manager's projects
      await User.findByIdAndUpdate(projectManagerId, {
        $push: { projects: project._id },
      });

      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addTeamToProject: async (req, res) => {
    try {
      const { projectId, teamId } = req.body;
      const project = await Project.findById(projectId);
      const team = await Team.findById(teamId);

      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      if (!team) {
        return res.status(404).json({ error: "Team not found" });
      }

      if (!project.teams.includes(teamId)) {
        project.teams.push(teamId);
        await project.save();
      }

      // Add project to all team members' projects
      await User.updateMany(
        { team: teamId },
        { $addToSet: { projects: projectId } }
      );

      res.json({ message: "Team added to project successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getProjects: async (req, res) => {
    try {
      const projects = await Project.find().populate(
        "projectManager",
        "username email"
      );
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getProjectById: async (req, res) => {
    try {
      const project = await Project.findById(req.params.id)
        .populate("projectManager", "username email")
        .populate("teams");
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateProject: async (req, res) => {
    try {
      const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteProject: async (req, res) => {
    try {
      const project = await Project.findByIdAndDelete(req.params.id);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      // Remove the project from the project manager's projects
      await User.findByIdAndUpdate(project.projectManager, {
        $pull: { projects: project._id },
      });
      res.json({ message: "Project deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
