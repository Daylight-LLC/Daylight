import React, { useEffect, useState } from 'react';
import StatsCard from '../components/StatsCard';
import MeetingCard from '../components/MeetingCard';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ProjectSummary from '../components/ProjectSummary';
import { ApiResponse, Project } from '../interfaces/interfaces';
import { getProjects } from '../services/api/projectService';





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
    <div className="p-2">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 flex flex-col md:mb-0">
          <div className='w-full flex justify-between items-center'>
            <h2 className="lg:text-2xl md:text-lg font-semibold">Your Dashboard</h2>
            <div className='px-3 py-1 border border-gray-300 rounded-md flex items-center'>
              last 30 days <ArrowDropDownOutlinedIcon className="ml-1" />
            </div>
          </div>
          <StatsCard />
        </div>

        <div className="md:w-full lg:w-1/4 md:px-4 md:pb-4">
          <MeetingCard />
        </div>
      </div>
      <div className="flex">
        <div className="basis-2/3">
          <ProjectSummary projects={projects}/>
        </div>
        <div className="basis-1/3 flex justify-center items-center">
        place for the Preview 
        </div>
      </div>
  </div>
  );
};

export default Dashboard;
