import { type ComponentType } from 'react';
import Home from '../../Page/Home';

interface RouteConfig {
  path: string;
  component: ComponentType;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
  },
];
