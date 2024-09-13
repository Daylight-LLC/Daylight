import mongoose from "mongoose";
import teamSchema from "./team.model.js";

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
    // due date and status
    // project manager name
    teams: [teamSchema],
  },

  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
