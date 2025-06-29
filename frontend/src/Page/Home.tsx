import { Box } from '@mui/material';
import SlideCard from '../Components/ui/SlideCard';
import Footer from '../Components/header/Footer';
import React from 'react';
import TabsContainer from '../Components/TabsContainer';
import HomeCard from '../../@ui-component/Comman/HomeCard';

const Home = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      <SlideCard />
      <HomeCard />
      <TabsContainer />
      <Footer />
    </Box>
  );
};

export default React.memo(Home);
