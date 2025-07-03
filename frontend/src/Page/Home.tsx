import { Box } from '@mui/material';
import Footer from '../Components/header/Footer';
import TabsContainer from '../Components/home/TabsContainer';
import HomeCard from '../Components/home/HomeCard';
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
      <TabsContainer />
      <Footer />
    </Box>
  );
};

export default Home;
