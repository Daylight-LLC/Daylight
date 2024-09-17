import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import FolderIcon from "@mui/icons-material/Folder";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const menuItems = [
  { to: "/app/dashboard", icon: <DashboardIcon />, label: "Dashboard" },
  { to: "/app/teams", icon: <PeopleIcon />, label: "Teams" },
  { to: "/app/projects", icon: <FolderIcon />, label: "Projects" },
  { to: "/app/issues", icon: <ReportProblemIcon />, label: "Issues" },
];

const Sidebar: React.FC<{ isOnlyIcon: boolean }> = ({ isOnlyIcon }) => {
  return (
    <aside
      className={` bg-blue-500 text-white h-screen p-1 ${
        isOnlyIcon ? "w-16" : "w-56"
      }`}
    >
      <div className="py-3">
        <div className="text-xl font-bold pb-3 flex justify-center">
          {!isOnlyIcon ? (
            <Link to="/app/dashboard" className="hover:text-blue-400">
              ProjectPulse
            </Link>
          ) : (
            <Link to="/app/dashboard" className="hover:text-blue-400">
              P
            </Link>
          )}
        </div>
        <hr />
      </div>

      <nav className="pt-8">
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className={`flex items-center p-3 rounded-md hover:bg-blue-400 transition-colors ${
                  isOnlyIcon ? "justify-center" : ""
                }`}
              >
                {item.icon}
                {!isOnlyIcon && <span className="ml-4">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
