import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import FolderIcon from '@mui/icons-material/Folder';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-blue-500 text-white h-screen p-6">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link 
              to="/" 
              className="flex items-center p-2 rounded-md hover:bg-blue-400 transition-colors"
            >
              <DashboardIcon className="text-lg" />
              <span className="ml-4">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/teams" 
              className="flex items-center p-2 rounded-md hover:bg-blue-400 transition-colors"
            >
              <PeopleIcon className="text-lg" />
              <span className="ml-4">Teams</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className="flex items-center p-2 rounded-md hover:bg-blue-400 transition-colors"
            >
              <FolderIcon className="text-lg" />
              <span className="ml-4">Projects</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/issues" 
              className="flex items-center p-2 rounded-md hover:bg-blue-400 transition-colors"
            >
              <ReportProblemIcon className="text-lg" />
              <span className="ml-4">Issues</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              className="flex items-center p-2 rounded-md hover:bg-blue-400 transition-colors"
            >
              <LoginIcon className="text-lg" />
              <span className="ml-4">Login</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/signup" 
              className="flex items-center p-2 rounded-md hover:bg-blue-400 transition-colors"
            >
              <PersonAddIcon className="text-lg" />
              <span className="ml-4">Signup</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
