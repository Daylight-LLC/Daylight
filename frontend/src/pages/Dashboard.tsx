import React from 'react';
import StatsCard from '../components/StatsCard';


const Dashboard: React.FC = () => {

  async function getProjects() {
    try{
      const response = await fetch('http://localhost:5001/api/project')
      console.log(response.json()) 
    } catch{
      console.log('error')
    }
  }

  getProjects()
  return (
    <div className="p-2 min-h-screen">
        <div className="flex">
          <div className="w-3/4">
            <h2 className="text-2xl font-semibold">Your Dashboard</h2>
            <StatsCard/>
          </div>

          <div className="w-1/4 bg-gray-100 p-4 ">
            <h2 className="text-2xl font-bold">Right Content</h2>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
