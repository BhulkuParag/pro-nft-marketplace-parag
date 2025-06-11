import "./App.css";
import PrimarySearchAppBar from "./Components/ui/Searchbar";
import ResponsiveDrawer from "./Components/ui/Sidebar";

function App() {
  return (
    <>
      <ResponsiveDrawer />
      <PrimarySearchAppBar />
    </>
  );
}

export default App;
