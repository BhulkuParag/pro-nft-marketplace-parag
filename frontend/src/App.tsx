import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import MuiTheme from './utils/MuiTheme';
import { routes } from './Components/constants/routes';

const App = () => {
  return (
      <Box sx={{width: '100%', height: '100vh', backgroundColor: 'background.default' }}>
        <div className="w-screen h-screen max-h-screen">
          <MuiTheme>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </MuiTheme>
        </div>
      </Box>
  );
};

export default App;
