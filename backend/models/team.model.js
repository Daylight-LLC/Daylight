import mongoose from "mongoose";
import teamMemberSchema from "./teamMember.model.js";
const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  teamLeadName: {
    type: String,
    required: true,
  },
  members: [teamMemberSchema], // Each team has an array of members
});

const Team = mongoose.model("Team", teamSchema);

export default teamSchema;
