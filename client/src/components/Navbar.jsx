import React from 'react';
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from '@mui/icons-material';
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import profileImage from '../assets/tk.jpeg';
import {
  AppBar,
  Toolbar,
  useTheme,
  IconButton,
  InputBase,
} from '@mui/material';
import { setMode } from '../state';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <div>
      <AppBar
        sx={{ position: 'static', background: 'none', boxShadow: 'none' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBetween>
            <IconButton onClick={() => console.log('toggle sidebar')}>
              <MenuIcon />
            </IconButton>
            <FlexBetween
              backgroundColor={theme.palette.background.alt}
              borderRadius="9px"
              gap="3rem"
              p={'.1rem 1.5rem'}
            >
              <InputBase placeholder="Search..." />
              <IconButton>
                <Search />
              </IconButton>
            </FlexBetween>
          </FlexBetween>
          {/* right side */}

          <FlexBetween gap="1.5rem">
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === 'dark' ? (
                <DarkModeOutlined sx={{ fontSize: '25px' }} />
              ) : (
                <LightModeOutlined sx={{ fontSize: '25px' }} />
              )}
            </IconButton>
            <IconButton>
              <SettingsOutlined sx={{ fontSize: '25px' }} />
            </IconButton>
          </FlexBetween>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;