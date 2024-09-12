import React from 'react';
import StatsCard from '../components/StatsCard';
import MeetingCard from '../components/MeetingCard';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';




const Dashboard: React.FC = () => {

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
  </div>
  );
};

export default Dashboard;
