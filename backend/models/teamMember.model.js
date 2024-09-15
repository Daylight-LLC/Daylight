import mongoose from "mongoose";
import issueSchema from "./issue.model.js";

const teamMemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    // status: {
    //   enum: ["online", "offline"],
    //   default: "online",
    // },
    assignedIssues: [issueSchema],
  },
  {
    timestamps: true,
  }
);

export default teamMemberSchema;
