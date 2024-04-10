import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Layout = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [isIsSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div>
      <Box width="100%" height="100%" display={isNonMobile ? 'flex' : 'block'}>
        <Sidebar
          isNotMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isIsSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box>
          <Navbar
            isSidebarOpen={isIsSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
