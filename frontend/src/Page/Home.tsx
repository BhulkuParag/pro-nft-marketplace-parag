import { Box } from '@mui/material';
import SlideCard from '../Components/ui/SlideCard';
import Footer from '../Components/header/Footer';
import React from 'react';
import TabsContainer from '../Components/TabsContainer';

const Home = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      <SlideCard />
      <TabsContainer />
      <Footer />
    </Box>
  );
};

export default React.memo(Home);
