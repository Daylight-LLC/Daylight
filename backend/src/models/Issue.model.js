import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    status: {
      type: String,
      enum: ["OPEN", "IN_PROGRESS", "CLOSED"],
      default: "OPEN",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: false,
    },
  },
  { timestamps: true }
);

export const Issue = mongoose.model("Issue", issueSchema);
