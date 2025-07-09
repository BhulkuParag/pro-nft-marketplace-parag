import { Box } from '@mui/material';
import { lazy } from 'react';

const TabContainer = lazy(
  () => import('../Components/collection/TabContainer')
);
const BannerSection = lazy(
  () => import('../Components/CollectionOverview/BannerSection')
);
const CollectionFooter = lazy(
  () => import('../Components/CollectionFooter/CollectionFooter')
);

const Collection = () => {
  return (
    <Box
      component={'div'}
      sx={{
        width: '100%',
      }}
    >
      <BannerSection />
      <TabContainer />
      <CollectionFooter />
    </Box>
  );
};

export default Collection;
