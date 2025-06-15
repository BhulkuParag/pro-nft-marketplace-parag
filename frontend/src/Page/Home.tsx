import { Box } from '@mui/material';
import Header from '../Components/header/Header';
import Sidebar from '../Components/header/Sidebar';
import ColorTabs from '../Components/ui/Tab';
import { MyGrid } from '../Components/ui/Table';
import SlideCard from '../Components/ui/SlideCard';

// type Props = {};
// const sidebarWidth = 240;
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
          <Box>
            <SlideCard />
            <ColorTabs />
          </Box>
          <MyGrid />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
