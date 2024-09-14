import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import projectRoutes from "./routes/project.route.js";
import teamRoutes from "./routes/team.routes.js";
import cors from "cors";
import teamMemberRoutes from "./routes/teamMember.route.js";
import issueRoutes from "./routes/issue.route.js";

dotenv.config();
const PORT = 5001;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/project", projectRoutes);
app.use("/api/project", teamRoutes);
app.use("/api/project", teamMemberRoutes);
app.use("/api/project", issueRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at https://localhost:" + PORT);
});
