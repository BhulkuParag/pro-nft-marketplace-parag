import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import type { JSX } from '@emotion/react/jsx-runtime';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Button from '@mui/material/Button';
import { useThemeMode } from '../../utils/MuiTheme';
import Ethereum from '../Icon/crypto-icon/Ethereum';
import Polygon from '../Icon/crypto-icon/Polygon';
import BNBChain from '../Icon/crypto-icon/BNB_chain';
import Avalanche from '../Icon/crypto-icon/Avalanche';
import CustomDropdown from '../../../@ui-component/Common/DropDown';
import CustomSearch from '../ui/CustomSearch';

export default function Header(): JSX.Element {
  const [selected, setSelected] = React.useState('eth');
  const { mode, toggleTheme } = useThemeMode();

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

  const menuId = 'primary-search-account-menu';
  const renderMenu: JSX.Element = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu: JSX.Element = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

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
          // paddingLeft: { md: '55px', xs: 0 },
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
          <Box
            component="div"
            sx={{
              width: '50%',
              // height: '100px',
              mr: 1,
              display: { xs: 'block', lg: 'none' },
            }}
          >
            <img
              src="https://analytic.polycruz.io/_next/static/media/logo.32e9a1fc.svg"
              alt=""
            />
          </Box>
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
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <CustomSearch />
          </Box>
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
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
            </Box>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
