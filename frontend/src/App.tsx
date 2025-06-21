import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import MuiTheme from './utils/MuiTheme';
import { routes } from './Components/constants/routes';
import Header from './Components/header/Header';
import Sidebar from './Components/ui/SlideCard';

const App = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <div className="w-screen h-screen max-h-screen">
        <MuiTheme>
          <Box
            sx={{
              width: '100%',
              height: '100vh',
              backgroundColor: 'background.default',
            }}
          >
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Sidebar />
            </Box>
            <Box
              sx={{
                width: '100%',
                paddingLeft: { md: '70px', xs: 0 },
              }}
            >
              <Header />
              <Routes>
                {routes?.map((route) => (
                  <Route
                    key={route?.path}
                    path={route?.path}
                    element={<route.component />}
                  />
                ))}
              </Routes>
            </Box>
          </Box>
        </MuiTheme>
      </div>
    </Box>
  );
};

export default App;
