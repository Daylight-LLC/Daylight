import React from "react";
import Dropdown from "./common/Dropdown";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Project } from "../interfaces/interfaces";

interface ProjectSummaryProps {
  projects: Project[];
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ projects }) => {
  const rows = projects.map((project) => ({
    projectName: project.name,
    teamLead: project.teams[0]?.teamLeadName || "Unknown",
    createdAt: project.createdAt,
    status: "Open",
  }));

  const dropdowns = [
    {
      label: "Project",
      options: [
        "Internal",
        "Client",
        "Research",
        "Maintenance",
        "New Development",
      ],
    },
    {
      label: "Status",
      options: ["Open", "Progress", "Review", "Closed"],
    },
  ];

  return (
    <div className="border border-gray-300 rounded-md">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg md:text-xl font-semibold">Project Summary</h2>
        <div className="flex gap-4">
          {dropdowns.map((dropdown, index) => (
            <Dropdown
              key={index}
              label={dropdown.label}
              options={dropdown.options}
            />
          ))}
        </div>
      </div>
      <div className="p-4" style={{ height: "17rem", overflowY: "auto" }}>
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="project table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>
                  Project Name
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Team Lead</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Created At</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.projectName}</TableCell>
                  <TableCell>{row.teamLead}</TableCell>
                  <TableCell>{row.createdAt}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ProjectSummary;
