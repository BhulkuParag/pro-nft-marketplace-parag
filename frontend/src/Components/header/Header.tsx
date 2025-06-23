import * as React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import type { JSX } from '@emotion/react/jsx-runtime';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useThemeMode } from '../../utils/MuiTheme';
import Ethereum from '../Icon/crypto-icon/Ethereum';
import Polygon from '../Icon/crypto-icon/Polygon';
import BNBChain from '../Icon/crypto-icon/BNB_chain';
import Avalanche from '../Icon/crypto-icon/Avalanche';
import CustomDropdown from '../../../@ui-component/Comman/DropDown';
import CustomSearch from '../ui/CustomSearch';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Toolbar,
  Badge,
  AppBar,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import { menuItems } from '../constants/menuItem';

export default function Header(): JSX.Element {
  const [selected, setSelected] = React.useState('eth');
  const { mode, toggleTheme } = useThemeMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const options = [
    {
      label: 'Ethereum',
      chainId: 1,
      icon: (
        <Ethereum
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'eth',
    },
    {
      label: 'Polygon',
      chainId: 137,
      icon: (
        <Polygon
          backgroundClass="dark:bg-dark-black-light bg-light-black-light w-7 h-7"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        />
      ),
      value: 'matic',
    },
    {
      label: 'Polygon zkEVM',
      chainId: 1101,
      icon: (
        <Polygon
          backgroundClass="dark:bg-dark-black-light bg-light-black-light w-7 h-7"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        />
      ),
      value: 'zkevm',
    },
    {
      label: 'Base',
      chainId: 8453,
      icon: (
        <Ethereum
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'base',
    },
    {
      label: 'Avalanche',
      chainId: 43114,
      icon: (
        <Avalanche
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'avax',
    },
    {
      label: 'BNB Smart Chain',
      chainId: 56,
      icon: (
        <BNBChain
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'bnb',
    },
    {
      label: 'Arbitrum',
      chainId: 42161,
      icon: (
        <Ethereum
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'arb',
    },
    {
      label: 'Arbitrum Nova',
      chainId: 42170,
      icon: (
        <Ethereum
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'arbnova',
    },
    {
      label: 'Linea',
      chainId: 59144,
      icon: (
        <Ethereum
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'linea',
    },
    {
      label: 'Optimism',
      chainId: 10,
      icon: (
        <Ethereum
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'op',
    },
    {
      label: 'ApeChain',
      chainId: 16350,
      icon: (
        <Ethereum
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'ape',
    },
    {
      label: 'Astar Network',
      chainId: 592,
      icon: (
        <Ethereum
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'astar',
    },
    {
      label: 'Blast',
      chainId: 81457,
      icon: (
        <Ethereum
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'blast',
    },
    {
      label: 'Flow',
      chainId: 1,
      icon: (
        <Ethereum
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'flow',
    },
    {
      label: 'Sei Network',
      chainId: 713715,
      icon: (
        <Ethereum
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'sei',
    },
    {
      label: 'Zora Network',
      chainId: 7777777,
      icon: (
        <Ethereum
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'zora',
    },
    {
      label: 'zkSync',
      chainId: 324,
      icon: (
        <Ethereum
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'zksync',
    },
    {
      label: 'NCN Testnet',
      chainId: 303,
      icon: (
        <Ethereum
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'ncn_testnet',
    },
    {
      label: 'NCN Mainnet',
      chainId: 313,
      icon: (
        <Ethereum
          backgroundClass="dark:fill-dark-black-light fill-light-black-light"
          iconClass="fill-light-primary-light dark:fill-dark-primary-light"
          className="w-7 h-7"
        />
      ),
      value: 'ncn_mainnet',
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen: boolean = Boolean(anchorEl);
  const isMobileMenuOpen: boolean = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const drawerContent = (
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

        {menuItems.map((item) => (
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
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
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
                  // opacity: open ? 1 : 0,""
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

  const menuId = 'primary-search-account-menu';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          boxShadow:
            'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
          borderBottom: '1px solid',
          borderColor: 'divider',
          color: 'text.primary',
          paddingLeft: { md: '55px', xs: 0 },
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: { md: 1.5, xs: '5px' },
            backgroundColor: 'background.default',
          }}
        >
          {isMobile && (
            <Box
              sx={{
                display: { xs: 'flex', md: 'flex', lg: 'none' },
                alignItems: 'center',
                width: '100%',
                gap: 1,
              }}
            >
              {/* Hamburger Menu */}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: 'flex', lg: 'none' } }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  display: { xs: 'block', lg: 'none' },
                  '& .MuiDrawer-paper': {
                    width: 200,
                    backgroundColor: 'secondary.main',
                    color: 'text.primary',
                    border: '1px solid custom.borderblack01',
                  },
                }}
              >
                {drawerContent}
              </Drawer>
              {/* Logo */}
              <Box
                component="div"
                sx={{
                  width: 40,
                  minWidth: 40,
                  display: { xs: 'block', lg: 'none' },
                }}
              >
                <img
                  src="https://analytic.polycruz.io/_next/static/media/logo.32e9a1fc.svg"
                  alt=""
                  style={{ height: 32 }}
                />
              </Box>
              {/* Dropdown */}
              <Box sx={{ width: '100%' }}>
                <CustomDropdown
                  options={options}
                  value={selected}
                  onChange={setSelected}
                />
              </Box>
              {/* Search */}
              <Box
                sx={{
                  flexGrow: 1,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'Center',
                }}
              >
                <CustomSearch />
              </Box>
              {/* Icons */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  size="large"
                  aria-label="toggle theme"
                  color="inherit"
                  onClick={toggleTheme}
                  sx={{ padding: '5px' }}
                >
                  <Badge color="error">
                    {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show notifications"
                  color="inherit"
                  sx={{ padding: '5px' }}
                >
                  <Badge color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="shopping cart"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                  sx={{ padding: '5px' }}
                >
                  <LocalGroceryStoreIcon />
                </IconButton>
              </Box>
            </Box>
          )}

          {/* DESKTOP VIEW ONLY */}
          {!isMobile && (
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                width: '100%',
                gap: 2,
              }}
            >
              {/* Add your desktop header layout here */}
              {/* Example: Logo, Dropdown, Search, Icons, Connect Button */}

              <Box sx={{ width: '100%' }}>
                <CustomDropdown
                  options={options}
                  value={selected}
                  onChange={setSelected}
                />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <CustomSearch />
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <IconButton
                  size="large"
                  aria-label="toggle theme"
                  color="inherit"
                  onClick={toggleTheme}
                  sx={{ padding: '5px' }}
                >
                  <Badge color="error">
                    {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show notifications"
                  color="inherit"
                  sx={{ padding: '5px' }}
                >
                  <Badge color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: 16,
                    width: '165px',
                    backgroundColor: 'custom.whiteLightO1',
                    color: 'custom.black02',
                    borderRadius: '10px',
                  }}
                >
                  Connect
                </Button>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="shopping cart"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                  sx={{ padding: '5px' }}
                >
                  <LocalGroceryStoreIcon />
                </IconButton>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
