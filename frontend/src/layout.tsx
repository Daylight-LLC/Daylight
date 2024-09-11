import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const Layout: React.FC = () => {
  const [isOnlyIcon, setIsOnlyIcon] = useState<boolean>(false)

  const toggleSidebar = () => setIsOnlyIcon(!isOnlyIcon);
  return (
    <>
    <div className="flex">
        <Sidebar isOnlyIcon={isOnlyIcon}/>
        <div className='w-full'>
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="flex flex-1">
            <main className="flex-1 p-4">
              <Outlet />
            </main>
          </div>
        </div>

    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default Layout;
