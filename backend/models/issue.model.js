import mongoose from "mongoose";
const issueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["open", "in progress", "closed"],
    default: "open",
  },
  githubIssueLink: String, // Optional: store a GitHub issue link or other relevant info
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default issueSchema;
