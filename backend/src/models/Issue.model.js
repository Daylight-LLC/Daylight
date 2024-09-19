import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["OPEN", "IN_PROGRESS", "CLOSED"],
      default: "OPEN",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
  },
  { timestamps: true }
);

export const Issue = mongoose.model("Issue", issueSchema);
