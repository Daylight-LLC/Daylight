import mongoose from "mongoose";
import Project from "../models/project.model.js";

// Add a Team to a Project
export const addTeam = async (req, res) => {
  const { projectId } = req.params;
  const { teamName, members } = req.body;

  if (!mongoose.isValidObjectId(projectId)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Project ID" });
  }

  if (!teamName || !members || members.length === 0) {
    return res.status(400).json({
      success: false,
      message: "Please provide a team name and add members",
    });
  }
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    const newTeam = { teamName, members };
    project.teams.push(newTeam);
    await project.save();
    return res.status(200).json({ success: true, data: project.teams });
  } catch (error) {
    console.error("Error in adding team to project", error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
// Get All Teams from a Project
// Update a Team within a Project
// Delete a Team from a Project
