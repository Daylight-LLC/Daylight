import mongoose from "mongoose";
import teamSchema from "./team.model.js";

// schema for Projects
const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    teams: [teamSchema], // Each project has an array of teams
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
);

// Create the Project model
const Project = mongoose.model("Project", projectSchema);

export default Project;
