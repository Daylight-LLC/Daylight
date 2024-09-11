import mongoose from "mongoose";
import issueSchema from "./issue.model.js";

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  assignedIssues: [issueSchema], // Each team member has an array of assigned issues
});

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);

export default teamMemberSchema;
