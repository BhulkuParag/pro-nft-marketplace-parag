import { lazy } from 'react';
import { Box } from '@mui/material';
import Footer from '../Components/header/Footer';
const HomeCard = lazy(()=> import('../Components/home/HomeCard'))
const SubHeader = lazy(()=> import('../Components/home/SubHeader'))
const TabsContainer = lazy(()=> import('../Components/home/TabsContainer'))
const FeaturedCollection = lazy(()=> import('./FeaturedCollection'))

const Home = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      <FeaturedCollection />
      <HomeCard />
      <SubHeader />
      <TabsContainer />
      <Footer />
    </Box>
  );
};

export default Home;
