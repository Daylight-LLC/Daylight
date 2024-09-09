import mongoose from "mongoose";
import Project from "../models/project.model.js";

export const addProject = async (req, res) => {
  const project = req.body;

  if (!project.name || !project.description) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }
  const newProject = new Project(project);

  try {
    await newProject.save();
    res.status(200).json({
      success: true,
      data: newProject,
    });
  } catch (error) {
    console.error("Error in creating project", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
