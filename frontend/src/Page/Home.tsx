import { Box } from '@mui/material';
import SlideCard from '../Components/ui/SlideCard';
import TabsContainer from '../Components/TabsContainer';
import Footer from '../Components/header/Footer';

const Home = () => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <SlideCard />
      <TabsContainer />
      <Footer />
    </Box>
  );
};

export default Home;
