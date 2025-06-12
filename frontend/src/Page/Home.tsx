import Header from "../Components/header/Header";
import Sidebar from "../Components/header/Sidebar";
import HeroCarousel from "../Components/SliedCard";
import ColorTabs from "../Components/ui/Tab";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <HeroCarousel />
      <ColorTabs />
    </div>
  );
};

export default Home;
