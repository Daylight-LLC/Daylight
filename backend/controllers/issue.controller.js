import mongoose from "mongoose";
import Project from "../models/project.model.js";

export const addIssue = async (req, res) => {
  const { projectId, teamId, teamMemberId } = req.params;
  const { title, description } = req.body;

  if (
    !mongoose.isValidObjectId(projectId) ||
    !mongoose.isValidObjectId(teamId) ||
    !mongoose.isValidObjectId(teamMemberId)
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid Project or Team or Team Member Id",
    });
  }
  if (!title || !description) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all the fields" });
  }
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    const team = project.teams.find((team) => team._id.toString() === teamId);
    if (!team) {
      return res
        .status(404)
        .json({ success: false, message: "Team not found" });
    }
    const teamMember = team.members.find(
      (member) => member._id.toString() === teamMemberId
    );
    if (!teamMember) {
      return res
        .status(404)
        .json({ success: false, message: "Team Member not found" });
    }
    const newIssue = { title, description };
    teamMember.assignedIssues.push(newIssue);
    await project.save();

    return res.status(200).json({
      success: true,
      message: "Issue added successfully",
      data: teamMember.assignedIssues,
    });
  } catch (error) {
    console.error("Error adding issue", error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getIssues = async (req, res) => {
  const { projectId, teamId, teamMemberId } = req.params;

  if (
    !mongoose.isValidObjectId(projectId) ||
    !mongoose.isValidObjectId(teamId) ||
    !mongoose.isValidObjectId(teamMemberId)
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid Project or Team or Team Member Id",
    });
  }
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    const team = project.teams.find((team) => team._id.toString() === teamId);
    if (!team) {
      return res
        .status(404)
        .json({ success: false, message: "Team not found" });
    }
    const teamMember = team.members.find(
      (member) => member._id.toString() === teamMemberId
    );
    if (!teamMember) {
      return res
        .status(404)
        .json({ success: false, message: "Team Member not found" });
    }
    const issues = teamMember.assignedIssues;
    if (issues === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No issues found" });
    }

    return res.status(200).json({ success: true, data: issues });
  } catch (error) {
    console.error("Error in getting issues", error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateIssue = async (req, res) => {
  const { projectId, teamId, teamMemberId, issueId } = req.params;
  const { title, description } = req.body;

  if (
    !mongoose.isValidObjectId(projectId) ||
    !mongoose.isValidObjectId(teamId) ||
    !mongoose.isValidObjectId(teamMemberId)
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid Project or Team or Team Member Id",
    });
  }
  if (!title || !description) {
    return res
      .status(400)
      .json({ success: true, message: "Please provide all fields" });
  }
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    const team = project.teams.find((team) => team._id.toString() === teamId);
    if (!team) {
      return res
        .status(404)
        .json({ success: false, message: "Team not found" });
    }
    const teamMember = team.members.find(
      (member) => member._id.toString() === teamMemberId
    );
    if (!teamMember) {
      return res
        .status(404)
        .json({ success: false, message: "Team Member not found" });
    }
    const issue = teamMember.assignedIssues.find(
      (issue) => issue._id.toString() === issueId
    );
    if (!issue) {
      return res
        .status(404)
        .json({ success: false, message: "Issue not found" });
    }
    issue.title = title;
    issue.description = description;
    await project.save();
    return res.status(200).json({
      success: true,
      message: "Issue updated successfully",
      data: issue,
    });
  } catch (error) {
    console.error("Error in updating issue", error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteIssue = async (req, res) => {
  const { projectId, teamId, teamMemberId, issueId } = req.params;

  if (
    !mongoose.isValidObjectId(projectId) ||
    !mongoose.isValidObjectId(teamId) ||
    !mongoose.isValidObjectId(teamMemberId) ||
    !mongoose.isValidObjectId(issueId)
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid Project or Team or Team Member or Issue ID",
    });
  }
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    const team = project.teams.find((team) => team._id.toString() === teamId);
    if (!team) {
      return res.status(404).json({
        success: false,
        message: "Team not found",
      });
    }

    const teamMember = team.members.find(
      (member) => member._id.toString() === teamMemberId
    );
    if (!teamMember) {
      return res.status(404).json({
        success: false,
        message: "Team Member not found",
      });
    }

    teamMember.assignedIssues = teamMember.assignedIssues.filter(
      (issue) => !issue._id.equals(issueId)
    );
    await project.save();
    return res.status(200).json({
      success: true,
      message: "Issue deleted",
      data: teamMember.assignedIssues,
    });
  } catch (error) {
    console.error("Error in deleting issue", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
