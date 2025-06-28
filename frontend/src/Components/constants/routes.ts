import React, { type ComponentType } from 'react';
import CollectionMarket from '../CollectionMarket/CollectionMarket';
import Activity from '../CollectionActivity/CollectionActivity';

const Home = React.lazy(() => import('../../Page/Home'));
const Screen = React.lazy(() => import('../../Page/Screen'));
const FeateursCollection = React.lazy(
  () => import('../../Page/FeateursCollection')
);
const Collection = React.lazy(() => import('../../Page/Collection'));
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
    path: '/trendingCollections/assets/:id',
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
