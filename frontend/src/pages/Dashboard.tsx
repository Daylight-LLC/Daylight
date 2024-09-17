import React, { useEffect, useState } from "react";
import StatsCard from "../components/StatsCard";
import MeetingCard from "../components/MeetingCard";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ProjectSummary from "../components/ProjectSummary";
import { ApiResponse, Project } from "../interfaces/interfaces";
import { getProjects } from "../services/api/projectService";

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const result: ApiResponse = await getProjects();
  //       console.log(result.data)
  //       if (result.success) {
  //         setProjects(result.data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching projects:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Top Section: Dashboard Header and Stats */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
              Your Dashboard
            </h2>
            <div className="px-3 py-1 border border-gray-300 rounded-md flex items-center">
              Last 30 days <ArrowDropDownOutlinedIcon className="ml-1" />
            </div>
          </div>
          <StatsCard />
        </div>

        <div className="w-full md:w-1/4">
          <MeetingCard />
        </div>
      </div>

      {/* Bottom Section: Project Summary and Preview */}
      <div className="flex flex-col lg:flex-row gap-4 mt-6">
        <div className="lg:w-2/3 w-full">
          <ProjectSummary projects={projects} />
        </div>
        <div className="lg:w-1/3 w-full flex justify-center items-center border border-gray-300 rounded-md">
          Place for the Preview
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
