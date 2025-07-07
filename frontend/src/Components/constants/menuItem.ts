import { type ComponentType } from 'react';
import Home from '@mui/icons-material/Home';
import Star from '@mui/icons-material/Star';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
interface MenuItemsConfig {
  lable: string;
  icon: ComponentType;
  path: string;
}

export const menuItems: MenuItemsConfig[] = [
  {
    lable: 'Home',
    icon: Home,
    path: '/',
  },
  {
    lable: 'Compare',
    icon: Star,
    path: '/compare',
  },
  {
    lable: 'Profile',
    icon: AccountBoxIcon,
    path: '/Portfolio',
  },
];
