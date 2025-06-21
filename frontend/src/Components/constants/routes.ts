import React, { type ComponentType } from 'react';

const Home = React.lazy(() => import('../../Page/Home'));
const Screen = React.lazy(() => import('../../Page/Screen'));

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
    path: '/home',
    component: Home,
  },
  {
    path: '/TreandingCollection/Assets/Buy',
    component: Screen,
  },
  {
    path: '/trendingCollections/item/:id',
    component: Screen,
  },
];
