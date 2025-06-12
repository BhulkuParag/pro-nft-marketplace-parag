import './App.css';
// import PrimarySearchAppBar from "./Components/ui/Searchbar";
// import ResponsiveDrawer from "./Components/ui/Sidebar";
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';

const routes = [{ path: '/', component: <Home /> }];

const App = () => {
  return (
    <>
      {/* <ResponsiveDrawer />
      <PrimarySearchAppBar /> */}
      <div className="w-screen h-screen max-h-screen">
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </>
  );
};

export default App;
