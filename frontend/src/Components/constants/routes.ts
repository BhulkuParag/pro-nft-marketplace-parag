import React, { type ComponentType } from 'react';

const Home = React.lazy(() => import('../../Page/Home'));

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
