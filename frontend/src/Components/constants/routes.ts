import React, { type ComponentType } from 'react';
import CollectionOverview from '../CollectionOverview/CollectionOverview';
import CollectionMarket from '../CollectionMarket/CollectionMarket';
import Activity from '../CollectionActivity/CollectionActivity';

const Home = React.lazy(() => import('../../Page/Home'));
const Screen = React.lazy(() => import('../../Page/Screen'));
const FeateursCollection = React.lazy(
  () => import('../../Page/FeateursCollection')
);

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
    path: '/FeatureCollectonFigma',
    component: FeateursCollection,
  },

  {
    path: '/ActivityScreen',
    component: Activity,
  },
  {
    path: '/trendingCollections/item/:id',
    component: CollectionOverview,
  },
  {
    path: '/market',
    component: CollectionMarket,
  },
];
