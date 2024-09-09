import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">ProjectPulse</h1>
        <p className="text-lg text-gray-600">Welcome to your dashboard. Here you can view your recent activity and updates.</p>
      </div>
      {/* Add more dashboard content here */}
    </div>
  );
};

export default Dashboard;
