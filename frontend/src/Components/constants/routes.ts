import React, { type ComponentType } from 'react';
import CollectionMarket from '../CollectionMarket/CollectionMarket';
import Activity from '../CollectionActivity/CollectionActivity';

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
    path: '/ActivityScreen',
    component: Activity,
  },
  {
    path: '/trendingCollections/item/:id',
    component: Collection,
  },
  {
    path: '/market',
    component: CollectionMarket,
  },
  {
    path: '/aivaluation',
    component: AiValuation,
  },
];
