import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import Header from '../Components/header/Header';
import Sidebar from '../Components/header/Sidebar';
import SlideCard from '../Components/ui/SlideCard';
import Footer from '../Components/header/Footer';
import TabsContainer from '../Components/TabsContainer';
import HomeCard from '../../@ui-component/Comman/HomeCard';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'background.default',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1200,
        }}
      >
        <Sidebar />
      </Box>

      <Box
        sx={{
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Header />
        </Box>
        <Box
          sx={{
            width: '100%',
            // width: 'calc(100% - 60px)',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '15px',
            paddingTop: '10px',
            paddingLeft: { xs: '0px', lg: '70px' },
          }}
        >
          <Box
            sx={{
              width: '100%',
            }}
          >
            <Box
              component="div"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <SlideCard />

              <Box
                sx={{
                  paddingInline: 1.5,
                }}
              >
                <HomeCard />
              </Box>
            </Box>
            <TabsContainer />
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
