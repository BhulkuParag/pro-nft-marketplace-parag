import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { menuItems } from '../constants/menuItem';

const drawerWidth = 200;
const collapsedWidth = 65;

const sideBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

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
        <div className="px-3 flex items-center gap-x-3 text-xl font-bold">
          <img
            src="https://analytic.polycruz.io/_next/static/media/logo.32e9a1fc.svg"
            alt=""
          />
          <span>Polycruz</span>
        </div>

        {menuItems.map((item, index) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              sx={{
                minHeight: 48,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                '&:hover': {
                  fill: 'custom.primaryLight',
                  // backgroundColor: '',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  // mr: open ? 3 : 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'text.primary',
                }}
              >
                {<item.icon />}
              </ListItemIcon>
              <ListItemText
                primary={item.lable}
                sx={{
                  opacity: open ? 1 : 0,
                  '& .MuiTypography-root': {
                    fontSize: '14px',
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
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
          // backgroundColor: '#1C1C1C',
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          display: { xs: 'none', lg: 'block' },
          // position: 'fixed',
          // height: '100vh',
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : collapsedWidth,
            transition: 'width 0.3s',
            backgroundColor: 'secondary.main',
            overflowX: 'hidden',
            color: 'text.primary',
            border: '1px solid custom.borderblack01',
          },
        }}
        open={open}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default sideBar;
