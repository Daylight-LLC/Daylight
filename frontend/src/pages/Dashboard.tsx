import React from 'react';
import StatsCard from '../components/StatsCard';
import MeetingCard from '../components/MeetingCard';



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
    <div className="p-2 ">
        <div className="flex">
          <div className="w-3/4"> 
            <h2 className="text-2xl font-semibold">Your Dashboard</h2>
            <StatsCard/>
          </div>

          <div className="w-1/4 p-4 ">
            <MeetingCard/>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
