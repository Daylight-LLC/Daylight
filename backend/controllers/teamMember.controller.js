import mongoose, { mongo } from "mongoose";
import Project from "../models/project.model.js";

export const addTeamMember = async (req, res) => {
  const { projectId, teamId } = req.params;
  const { name, role } = req.body;

  if (
    !mongoose.isValidObjectId(projectId) ||
    !mongoose.isValidObjectId(teamId)
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid project or team ID" });
  }
  if (!name || !role) {
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

    if (!team.members) {
      team.members = [];
    }

    const newTeamMember = {
      name,
      role,
      assignedIssues: [],
    };

    team.members.push(newTeamMember);

    await project.save();

    res.status(200).json({ success: true, data: team.members });
    console.log("members", team.members);
  } catch (error) {
    console.error("Error in adding new team member", error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getTeamMembers = async (req, res) => {
  const { projectId, teamId } = req.params;
  if (
    !mongoose.isValidObjectId(projectId) ||
    !mongoose.isValidObjectId(teamId)
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid project or team ID" });
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
    return res.status(200).json({ success: true, data: team.members });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateTeamMember = async (req, res) => {
  const { projectId, teamId, teamMemberId } = req.params;
  const { name, role } = req.body;

  if (!mongoose.isValidObjectId(teamMemberId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid Team Member Id",
    });
  }

  if (!mongoose.isValidObjectId(projectId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid Project Id",
    });
  }

  if (!mongoose.isValidObjectId(teamId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid Team Id",
    });
  }

  if (!name || !role) {
    return res.status(400).json({
      success: false,
      message: "Please provide all the fields",
    });
  }
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      res.status(404).json({
        success: false,
        message: "Project not found",
      });
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
    teamMember.name = name;
    teamMember.role = role;
    await project.save();
    return res.status(200).json({
      success: true,
      message: "Team member updated",
      data: teamMember,
    });
  } catch (error) {
    console.error("Error in updating team member", error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
