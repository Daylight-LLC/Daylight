import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import projectRoutes from "./routes/project.route.js";
import teamRoutes from "./routes/team.routes.js";

dotenv.config();
const PORT = 5001;

const app = express();

app.use(express.json());

app.use("/api/project", projectRoutes);
app.use("/api/project", teamRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at https://localhost:" + PORT);
});
