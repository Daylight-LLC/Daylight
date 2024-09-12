import mongoose from "mongoose";
import Project from "../models/project.model.js";

export const addTeam = async (req, res) => {
  const { projectId } = req.params;
  const { teamName, teamLeadName } = req.body;

  if (!mongoose.isValidObjectId(projectId)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Project ID" });
  }

  if (!teamName || !teamLeadName) {
    return res.status(400).json({
      success: false,
      message: "Please provide all the fields",
    });
  }

  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }

    if (!project.teams) {
      project.teams = [];
    }

    const newTeam = {
      teamName,
      teamLeadName,
      members: [],
    };

    project.teams.push(newTeam);

    await project.save();
    return res.status(200).json({ success: true, data: project.teams });
  } catch (error) {
    console.error("Error in adding team to project", error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getTeams = async (req, res) => {
  const { projectId } = req.params;

  if (!mongoose.isValidObjectId(projectId)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Project ID" });
  }

  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }

    res.status(200).json({ success: true, data: project.teams });
  } catch (error) {
    console.error("Error in fetching teams", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateTeam = async (req, res) => {
  const { projectId, teamId } = req.params;
  const updatedTeamData = req.body;

  if (
    !mongoose.isValidObjectId(projectId) ||
    !mongoose.isValidObjectId(teamId)
  ) {
    return res.status(400).json({ success: false, message: "Invalid ID(s)" });
  }

  if (!updatedTeamData.teamName || !updatedTeamData.teamLeadName) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all required fields" });
  }

  try {
    const project = await Project.findOneAndUpdate(
      { _id: projectId, "teams._id": teamId },
      {
        $set: {
          "teams.$.teamName": updatedTeamData.teamName,
          "teams.$.teamLeadName": updatedTeamData.teamLeadName,
          "teams.$.members": updatedTeamData.members || [],
        },
      },
      { new: true, runValidators: true }
    );

    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project or team not found" });
    }

    const updatedTeam = project.teams.id(teamId);
    res.status(200).json({ success: true, data: updatedTeam });
  } catch (error) {
    console.error("Error in updating team", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteTeam = async (req, res) => {
  const { projectId, teamId } = req.params;
  if (
    !mongoose.isValidObjectId(projectId) ||
    !mongoose.isValidObjectId(teamId)
  ) {
    return res.status(400).json({ success: false, message: "Invalid ID(s)" });
  }
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }

    const teamExists = project.teams.some(
      (team) => team._id.toString() === teamId
    );

    if (!teamExists) {
      return res
        .status(404)
        .json({ success: false, message: "Team not found" });
    }

    project.teams = project.teams.filter(
      (team) => team._id.toString() !== teamId
    );

    await project.save();

    res.status(200).json({ success: true, message: "Team deleted" });
  } catch (error) {
    console.error("Error in deleting team", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
