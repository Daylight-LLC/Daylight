import { Team } from "../models/Team";

export const teamController = {
  createTeam: async (req, res) => {
    try {
      const { name, teamLeadId, projectId } = req.body;
      const team = new Team({
        name,
        teamLead: teamLeadId,
        project: projectId,
        members: [teamLeadId],
      });
      await team.save();
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

  addTeamMember: async (req, res) => {
    try {
      const { teamId, userId } = req.body;
      const team = await Team.findByIdAndUpdate(
        teamId,
        { $addToSet: { members: userId } },
        { new: true }
      );
      res.json(team);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
