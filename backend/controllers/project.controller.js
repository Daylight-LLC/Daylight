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

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error) {
    console.error("Error in fetching projects");
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid project ID" });
  }
  try {
    await Project.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Project deleted" });
  } catch (error) {
    console.error("Error in deleting project", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const project = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid project ID",
    });
  }

  // Validate project fields (add additional validation as needed)
  if (!project.name || !project.description) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
    });
  }

  try {
    const updatedProject = await Project.findByIdAndUpdate(id, project, {
      new: true,
      runValidators: true, // Validate data against the schema before saving
    });
    if (!updatedProject) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    res.status(200).json({ success: true, data: updatedProject });
  } catch (error) {
    console.error("Error in updating project", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
