import { Margin, Padding } from '@mui/icons-material';
import Header from '../Components/header/Header';
import Sidebar from '../Components/header/Sidebar';
import SliedCard from '../Components/SliedCard';
import Tab from '../Components/ui/Tab';
import Box from '@mui/material/Box';
import { MyGrid } from '../Components/ui/Table';

type Props = {};

const Home = (props: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'absolute', width: '100%', zIndex: 1200 }}>
        <Sidebar />
      </Box>
      <Box>
        <Header />
        <Box sx={{ paddingLeft: '70px', paddingTop: '10px' }}>
          <SliedCard />
        </Box>
        <Box style={{ paddingleft: '50px' }}>
          <h1>AG Grid Demo</h1>
          <MyGrid />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
