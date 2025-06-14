import './App.css';
// import PrimarySearchAppBar from "./Components/ui/Searchbar";
// import ResponsiveDrawer from "./Components/ui/Sidebar";
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import { Box } from '@mui/material';
import MuiTheme from './utils/MuiTheme';

const routes = [{ path: '/', component: <Home /> }];

const App = () => {
  return (
    <>
      {/* <ResponsiveDrawer />
      <PrimarySearchAppBar /> */}
      <Box sx={{ backgroundColor: 'background.default' }}>
        <div className="w-screen h-screen max-h-screen">
          <MuiTheme>
            <Routes>
              {routes.map((route, i) => (
                <Route key={i} path={route.path} element={route.component} />
              ))}
            </Routes>
          </MuiTheme>
        </div>
      </Box>
    </>
  );
};

export default App;
