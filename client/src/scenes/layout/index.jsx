import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { useGetUserQuery } from '../../state/api';

const Layout = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [isIsSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <div>
      <Box width="100%" height="100%" display={isNonMobile ? 'flex' : 'block'}>
        <Sidebar
          user={data || {}}
          isNotMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isIsSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1}>
          <Navbar
            user={data || {}}
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
