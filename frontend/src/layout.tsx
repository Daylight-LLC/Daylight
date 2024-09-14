import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const Layout: React.FC = () => {
  const [isOnlyIcon, setIsOnlyIcon] = useState<boolean>(false)

  const updateSidebarState = () => {
    if (window.innerWidth <= 768) { 
      setIsOnlyIcon(true);
    } else {
      setIsOnlyIcon(false);
    }
  };

  useEffect(() => {
    updateSidebarState();
    window.addEventListener('resize', updateSidebarState);

    return () => window.removeEventListener('resize', updateSidebarState);
  }, []);

  const toggleSidebar = () => {
    if (window.innerWidth > 768) {
      setIsOnlyIcon(!isOnlyIcon);
    }
  };
  return (
    <>
    <div className="flex w-full">
      <div>
        <Sidebar isOnlyIcon={isOnlyIcon}/>
      </div>
        <div className='w-full'>
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="flex flex-1">
            <main className="flex-1 p-4">
              <Outlet />
            </main>
          </div>
        </div>

    </div>

    </>
  );
};

export default Layout;
