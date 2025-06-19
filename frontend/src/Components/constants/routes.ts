import { type ComponentType } from 'react';
import Home from '../../Page/Home';
import Screen from '../../Page/Screen';

interface RouteConfig {
  path: string;
  component: ComponentType;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/TreandingCollection/Assets/Buy',
    component: Screen,
  },
];
