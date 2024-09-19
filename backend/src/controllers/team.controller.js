import { Team } from "../models/Team.model.js";

export const teamController = {
  createTeam: async (req, res) => {
    try {
      const { name, teamLeadId, projectId } = req.body;

      const teamLead = await User.findById(teamLeadId);
      if (!teamLead) {
        return res.status(404).json({ error: "Team lead not found" });
      }

      if (teamLead.role !== "TEAM_LEAD") {
        return res
          .status(400)
          .json({ error: "Team lead must have TEAM_LEAD role" });
      }

      const team = new Team({
        name,
        teamLead: teamLeadId,
        project: projectId,
        members: [teamLeadId],
      });

      await team.save();

      // Update the team lead's team
      await User.findByIdAndUpdate(teamLeadId, { team: team._id });

      res.status(201).json(team);
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
