import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import MuiTheme from './utils/MuiTheme';
import { routes } from './Components/constants/routes';
import Header from './Components/header/Header';
import Sidebar from './Components/header/Sidebar';

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
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            backgroundColor: 'background.default',
          }}
        >
          <MuiTheme>
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
              }}
            >
              <Header />
              <Box
                sx={{
                  // width: '100%',
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
                <Routes>
                  {routes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={<route.component />}
                    />
                  ))}
                </Routes>
              </Box>
            </Box>
          </MuiTheme>
        </Box>
      </div>
    </Box>
  );
};

export default App;
