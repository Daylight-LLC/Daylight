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

    // Ensure teams array is initialized
    if (!project.teams) {
      project.teams = [];
    }

    // Create a new team object
    const newTeam = {
      teamName,
      teamLeadName,
      members: [], // Initialize members if needed
    };

    // Add the new team to the project's teams array
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
