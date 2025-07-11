import { Box } from '@mui/material';
import Footer from '../Components/header/Footer';
import TabsContainer from '../Components/home/TabsContainer';
import HomeCard from '../Components/home/HomeCard';
import SubHeader from '../Components/home/SubHeader';
import FeaturedCollection from './FeaturedCollection';

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
