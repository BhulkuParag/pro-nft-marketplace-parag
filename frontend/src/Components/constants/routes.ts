import React, { type ComponentType } from 'react';

const Home = React.lazy(() => import('../../Page/Home'));
const Screen = React.lazy(() => import('../../Page/Screen'));
const Collection = React.lazy(() => import('../../Page/Collection'));

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
    path: '/Home',
    component: Home,
  },
  {
    path: '/trendingCollections/assets/:id',
    component: Screen,
  },
  {
    path: '/trendingCollections/item/:id',
    component: Collection,
  },
];
