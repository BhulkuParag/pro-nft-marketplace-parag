import { Box } from '@mui/material';
import Footer from '../Components/header/Footer';
import React from 'react';
import TabsContainer from '../Components/TabsContainer';
import HomeCard from '../../@ui-component/Comman/HomeCard';
import FeateursCollection from './FeateursCollection';
import SubHeader from '../Components/home/SubHeader';

const Home = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      <FeateursCollection />
      <HomeCard />
      <SubHeader />
      <HomeCard />
      <TabsContainer />
      <Footer />
    </Box>
  );
};

export default React.memo(Home);
