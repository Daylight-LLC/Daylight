import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    teamLead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
  },
  { timestamps: true }
);

export const Team = mongoose.model("Team", teamSchema);
