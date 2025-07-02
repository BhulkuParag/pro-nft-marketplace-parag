import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { routes } from './Components/constants/routes';
import Header from './Components/header/Header';
import Sidebar from './Components/header/Sidebar';
import { Suspense } from 'react';
import Loading from '../@ui-component/Comman/Loading';

const App = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'background.default',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.default',
          }}
        >
          <Sidebar />
        </Box>

        <Box
          sx={{
            backgroundColor: 'background.default',
          }}
        >
          <Header />
          <Suspense
            fallback={
              <Box
                sx={{
                  backgroundColor: 'background.default',
                  width: '100vw',
                  height: 'calc(100vh - 108px)',
                  overflowY: 'scroll',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Loading />
              </Box>
            }
          >
            <Box
              sx={{
                height: 'calc(100vh - 108px)',
                // maxHeight: 'fit-content',
                overflowY: 'scroll',
                overflowX: 'hidden',
                scrollbarWidth: 'thin',
                // paddingTop: '10px',
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
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
