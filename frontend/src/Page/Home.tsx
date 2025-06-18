import { Box } from '@mui/material';
import Header from '../Components/header/Header';
import Sidebar from '../Components/header/Sidebar';
import SlideCard from '../Components/ui/SlideCard';
import Footer from '../Components/header/Footer';
import TabsContainer from '../Components/TabsContainer';

const Home = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: 'background.default',
        position: 'relative',
      }}
    >
      {/* Sidebar at the top, fixed */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1200,
        }}
      >
        {/* <Sidebar /> */}
      </Box>

      <Box
        sx={{
          width: '100%',
          pl: '60px'
        }}
      >
        <Header />
        <Box
          sx={{
            pl: { md: '60px', sm: 0 },
            width: '100%',
            display: 'grid',
            alignItems: 'center',
            gridtemplatecolumns: 'repeat(2, minmax(0, 1fr))',
            gap: '15px',
            paddingTop: '10px',
          }}
        >
          <Box
            sx={{
              width: '100%',
            }}
          >
            <SlideCard />
            <TabsContainer />
          </Box>
        </Box>
        {/* <Footer /> */}
      </Box>
    </Box>
  );
};

export default Home;
