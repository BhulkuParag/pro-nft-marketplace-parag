import React, { type ComponentType } from 'react';
// import CollectionOverview from '../CollectionOverview/CollectionOverview';
import CollectionMarket from '../CollectionMarket/CollectionMarket';

const Home = React.lazy(() => import('../../Page/Home'));
const Screen = React.lazy(() => import('../../Page/Screen'));
const CollectionOverview = React.lazy(
  () => import('../../Page/CollectionOverview')
);
const AiValuation = React.lazy(() => import('../../Page/AiValuation'));

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
    path: '/trendingCollections/assets/buy',
    component: Screen,
  },
  {
    path: '/trendingCollections/item/:id',
    component: CollectionOverview,
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
