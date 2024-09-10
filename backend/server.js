import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import projectRoutes from "./routes/project.route.js";

dotenv.config();
const PORT = 5001;

const app = express();

app.use(express.json());

app.use("/api/projects", projectRoutes);
// app.use("/api/teams", teamRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at https://localhost:" + PORT);
});
