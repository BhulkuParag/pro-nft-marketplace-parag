import { Box } from '@mui/material';
import Header from '../Components/header/Header';
import Sidebar from '../Components/header/Sidebar';
import ColorTabs from '../Components/ui/Tab';
import SlideCard from '../Components/ui/SlideCard';
<<<<<<< HEAD
import Footer from '../Components/header/Footer';
=======
>>>>>>> 59f72abcc1e3bd13677b127441d869632063622a

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
        <Sidebar />
      </Box>

      <Box
        sx={{
          width: '100%',
          height: '100vh',
        }}
      >
        <Header />
        <Box
          sx={{
            pl: '60px',
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
            <ColorTabs />
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
