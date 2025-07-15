import React, { useMemo } from 'react';
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
import { menuItems, type MenuItemsConfig } from '../constants/menuItem';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useActiveWalletConnectionStatus } from 'thirdweb/react';

const drawerWidth = 200;
// const collapsedWidth = '3.5rem';
const collapsedWidth = '4.6rem';

const Sidebar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  let menuList: MenuItemsConfig[] = [...menuItems];
  const connectionStatus = useActiveWalletConnectionStatus();
  const isWalletConnected = connectionStatus === 'connected';
  const newItem = {
    lable: 'Profile',
    icon: AccountBoxIcon,
    path: '/Portfolio',
  };
  const finalMenuItems = useMemo<MenuItemsConfig[]>(() => {
    if (isWalletConnected) menuList.push(newItem);
    return menuList;
  }, [isWalletConnected]);

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const DrawerConainer = () => {
    return (
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
            to="/Home"
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
              // color={isActive('/home') ? 'text.primary' : 'transparent'}
              sx={{ transition: 'color 0.2s', color: 'text.primary' }}
            >
              Polycruz
            </Typography>
          </Link>

          {finalMenuItems.map((item) => {
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
                    bgcolor: active ? 'custom.borderblack01' : 'transparent', //
                    color: active ? '#fff' : 'text.primary',
                    '&:hover': {
                      bgcolor: 'primary.light',
                      color: '#fff',
                    },
                    // borderRadius: 2,
                    borderRight: '2px solid',
                    borderColor: active ? 'custom.SideBar' : 'transparent',
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
                      color: active ? '#A49BFF' : '',
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
                        color: active ? 'text.primary' : '',
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
  };

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
        {<DrawerConainer />}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
