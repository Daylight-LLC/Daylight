import mongoose from "mongoose";
const issueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["open", "in progress", "closed"],
    default: "open",
    required: true,
  },
  githubIssueLink: {
    type: String,
    required: true,
    default: "issuelink.github.com",
  },
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
