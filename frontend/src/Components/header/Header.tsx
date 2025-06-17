import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import type { JSX } from '@emotion/react/jsx-runtime';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Button from '@mui/material/Button';
// import DropDown from '../ui/DropDown';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { useThemeMode } from '../../utils/MuiTheme';
import Ethereum from '../Icon/crypto-icon/Ethereum';
import Polygon from '../Icon/crypto-icon/Polygon';
import BNBChain from '../Icon/crypto-icon/BNB_chain';
import Avalanche from '../Icon/crypto-icon/Avalanche';

import { FormControl, InputLabel } from '@mui/material';
import CustomDropdown from '../ui/DropDown';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '35ch',
    },
  },
}));

// const ShortcutKey = styled('div')(({ theme }) => ({
//   backgroundColor: alpha('#ffffff', 0.1),
//   padding: '2px 8px',
//   borderRadius: 6,
//   color: alpha('#ffffff', 0.6),
//   fontSize: '0.8rem',
//   marginLeft: theme.spacing(1),
// }));

export default function Header(): JSX.Element {
  const [selected, setSelected] = React.useState('');
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

  // const handleChange = (event:  React.ChangeEvent<HTMLSelectElement>) => {
  //   setAge(event.target.value as string);
  // };

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
          border: '1px solid custom.borderblack01 ',
          color: 'text.primary',
          paddingLeft: '55px',
          // width: `calc(100% - ${drawerWidth}px)`,
          // ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: 'background.default',
            
          }}
        >
          <Box sx={{ minWidth: 130 }}>
            <CustomDropdown
              options={options}
              value={selected}
              onChange={setSelected}
            />
            {/* <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                sx={
                  {
                    // color: '#fff',
                  }
                }
              >
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                // label="Age"
                IconComponent={() => null}
                onChange={handleChange}
                sx={{
                  color: 'text.primary',

                  border: '1px solid custom.borderblack01 ',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'custom.borderblack01',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'custom.borderblack01', // Prevent border color change on focus
                  },
                  '&.Mui-focused': {
                    backgroundColor: 'inherit', // Prevent background color change on focus
                  },
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl> */}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>

              <StyledInputBase
                placeholder="Search by collection , NFT, and User"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <IconButton
              size="large"
              aria-label="toggle theme"
              color="inherit"
              onClick={toggleTheme}
            >
              <Badge color="error">
                {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#fff',
                color: '#000',
              }}
            >
              Connect
            </Button>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <LocalGroceryStoreIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
