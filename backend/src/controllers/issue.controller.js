import { Issue } from "../models/Issue.model.js";

export const issueController = {
  createIssue: async (req, res) => {
    try {
      const { title, description, assignedToId, teamId } = req.body;
      const issue = new Issue({
        title,
        description,
        assignedTo: assignedToId,
        team: teamId,
      });
      await issue.save();
      res.status(201).json(issue);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getIssues: async (req, res) => {
    try {
      const issues = await Issue.find().populate("assignedTo team");
      res.json(issues);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getIssueById: async (req, res) => {
    try {
      const issue = await Issue.findById(req.params.id).populate(
        "assignedTo team"
      );
      if (!issue) return res.status(404).json({ message: "Issue not found" });
      res.json(issue);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateIssue: async (req, res) => {
    try {
      const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!issue) return res.status(404).json({ message: "Issue not found" });
      res.json(issue);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteIssue: async (req, res) => {
    try {
      const issue = await Issue.findByIdAndDelete(req.params.id);
      if (!issue) return res.status(404).json({ message: "Issue not found" });
      res.json({ message: "Issue deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateIssueStatus: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const issue = await Issue.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
      if (!issue) return res.status(404).json({ message: "Issue not found" });
      res.json(issue);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
