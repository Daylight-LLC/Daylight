import { Issue } from '../models/Issue';

export const issueController = {
  createIssue: async (req, res) => {
    try {
      const { title, description, assignedToId, teamId } = req.body;
      const issue = new Issue({ title, description, assignedTo: assignedToId, team: teamId });
      await issue.save();
      res.status(201).json(issue);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getIssues: async (req, res) => {
    try {
      const issues = await Issue.find().populate('assignedTo team');
      res.json(issues);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateIssueStatus: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const issue = await Issue.findByIdAndUpdate(id, { status }, { new: true });
      res.json(issue);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
