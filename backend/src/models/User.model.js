import { Schema, Model } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["PROJECT_MANAGER", "TEAM_LEAD", "TEAM_MEMBER"],
      required: true,
    },
  },
  { timestamps: true }
);

export const User = Model("User", userSchema);
