import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const drawerWidth = 200;
const collapsedWidth = '4.6rem';

const menuItems = [
  {
    lable: 'Home',
    path: '/Home',
    icon: HomeIcon,
  },
  {
    lable: 'Compare',
    path: '/Compare',
    icon: CompareArrowsIcon,
  },
];

const Sidebar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const drawer = (
    <div>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginTop: 2,
        }}
      >
        <Link
          to="/home"
          className="px-3 flex items-center gap-x-3 text-xl font-bold"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 10,
          }}
        >
          <img
            src="https://analytic.polycruz.io/_next/static/media/logo.32e9a1fc.svg"
            alt=""
            style={{
              filter: isActive('/home') ? 'brightness(1.5)' : 'none',
              transition: 'filter 0.2s',
            }}
          />
          <Typography
            fontSize={26}
            fontWeight={600}
            display={open ? 'block' : 'none'}
            color={isActive('/home') ? 'text.primary' : 'text.primary'}
            sx={{ transition: 'color 0.2s' }}
          >
            Polycruz
          </Typography>
        </Link>

        {menuItems.map((item) => {
          const active = isActive(item.path);
          return (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  minHeight: 48,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor: active ? 'primary.main' : 'transparent', //
                  color: active ? '#fff' : 'text.primary',
                  '&:hover': {
                    bgcolor: 'primary.light',
                    color: '#fff',
                  },
                  borderRadius: 2,
                  transition: 'all 0.2s',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: active ? 'text.primary' : 'text.primary',
                    transition: 'color 0.2s',
                  }}
                >
                  <item.icon />
                </ListItemIcon>
                <ListItemText
                  primary={item.lable}
                  sx={{
                    opacity: open ? 1 : 0,
                    '& .MuiTypography-root': {
                      fontSize: '14px',
                      fontWeight: 500,
                      color: active ? 'text.primary' : 'text.primary',
                      transition: 'color 0.2s',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          width: open ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          display: { xs: 'none', lg: 'block' },
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : collapsedWidth,
            transition: 'width 0.3s',
            backgroundColor: 'secondary.main',
            overflowX: 'hidden',
            color: 'text.primary',
            borderRight: '2px solid',
            borderColor: 'custom.borderblack01',
          },
        }}
        open={open}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
