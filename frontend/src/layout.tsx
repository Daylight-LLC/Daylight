import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
