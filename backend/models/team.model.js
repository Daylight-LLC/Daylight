import mongoose from "mongoose";
import teamMemberSchema from "./teamMember.model.js";
const teamSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    teamLeadName: {
      type: String,
      required: true,
      // make team lead schema to store their name and tasks
    },
    members: [teamMemberSchema],
  },
  {
    timestamps: true,
  }
);

export const Team = mongoose.model("Team", teamSchema);

export default teamSchema;
