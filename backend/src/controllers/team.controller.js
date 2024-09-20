import { Team } from "../models/Team.model.js";
import { Project } from "../models/Project.model.js";

export const teamController = {
  createTeam: async (req, res) => {
    try {
      const { name, projectId } = req.body;

      // Check if the project exists
      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }

      const team = new Team({
        name,
        project: projectId,
        members: [], // Initialize with an empty array
      });

      await team.save();

      // Add the team to the project's teams array
      await Project.findByIdAndUpdate(projectId, {
        $push: { teams: team._id },
      });

      res.status(201).json(team);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  assignTeamLead: async (req, res) => {
    try {
      const { teamId, userId } = req.body;

      const team = await Team.findById(teamId);
      const user = await User.findById(userId);

      if (!team) {
        return res.status(404).json({ error: "Team not found" });
      }
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (user.role !== "TEAM_LEAD") {
        return res.status(400).json({ error: "User must have TEAM_LEAD role" });
      }

      team.teamLead = userId;
      user.team = teamId;

      await team.save();
      await user.save();

      res.json({ message: "Team lead assigned successfully", team });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getTeams: async (req, res) => {
    try {
      const teams = await Team.find().populate("teamLead members project");
      res.json(teams);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getTeamById: async (req, res) => {
    try {
      const team = await Team.findById(req.params.id).populate(
        "teamLead members project"
      );
      if (!team) return res.status(404).json({ message: "Team not found" });
      res.json(team);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateTeam: async (req, res) => {
    try {
      const team = await Team.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!team) return res.status(404).json({ message: "Team not found" });
      res.json(team);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteTeam: async (req, res) => {
    try {
      const team = await Team.findByIdAndDelete(req.params.id);
      if (!team) return res.status(404).json({ message: "Team not found" });
      res.json({ message: "Team deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addTeamMember: async (req, res) => {
    try {
      const { id } = req.params;
      const { userId } = req.body;
      const team = await Team.findByIdAndUpdate(
        id,
        { $addToSet: { members: userId } },
        { new: true }
      );
      if (!team) return res.status(404).json({ message: "Team not found" });
      res.json(team);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  removeTeamMember: async (req, res) => {
    try {
      const { id, memberId } = req.params;
      const team = await Team.findByIdAndUpdate(
        id,
        { $pull: { members: memberId } },
        { new: true }
      );
      if (!team) return res.status(404).json({ message: "Team not found" });
      res.json(team);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
