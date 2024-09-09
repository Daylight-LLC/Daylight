import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-400">ProjectPulse</h1>
        <p className="text-gray-400 text-sm">Your Project Management Hub</p>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link 
              to="/" 
              className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              <span className="text-lg">🏠</span>
              <span className="ml-4">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/teams" 
              className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              <span className="text-lg">👥</span>
              <span className="ml-4">Teams</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              <span className="text-lg">📁</span>
              <span className="ml-4">Projects</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/issues" 
              className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              <span className="text-lg">⚠️</span>
              <span className="ml-4">Issues</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              <span className="text-lg">🔑</span>
              <span className="ml-4">Login</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/signup" 
              className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              <span className="text-lg">✍️</span>
              <span className="ml-4">Signup</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
