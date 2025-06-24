import { Box, Typography } from '@mui/material';
import SlideCard from '../Components/ui/SlideCard';
import CustomTab, { type TabItem } from '../../@ui-component/Comman/Tab';
import Footer from '../Components/header/Footer';
import TableFilterBar from '../Components/ui/TableFilterBar';
import ActiveTab from '../Components/ActiveTab';
import TabsContainer from '../Components/TabsContainer';
import HomeCard from '../../@ui-component/Comman/HomeCard';

const tabs: TabItem[] = [
  {
    label: 'Trending',
    value: 'trending',
    content: (
      <>
        <Typography
          variant="h4"
          fontWeight={600}
          color="custom.whiteLightO1"
          fontSize={26}
        >
          Top Trending Collections
        </Typography>
        <TableFilterBar />
      </>
    ),
  },
  {
    label: 'NFT Sales',
    value: 'nft_sales',
    content: (
      <Typography
        variant="h4"
        fontWeight={600}
        color="custom.whiteLightO1"
        fontSize={26}
      >
        Current NFT Sales
      </Typography>
    ),
  },
  {
    label: 'Top Sales',
    value: 'top_sales',
    content: (
      <Typography
        variant="h4"
        fontWeight={600}
        color="custom.whiteLightO1"
        fontSize={26}
      >
        Top Sales
      </Typography>
    ),
  },
  {
    label: 'Mint Ranking',
    value: 'top_mint_ranking',
    content: (
      <Typography
        variant="h4"
        fontWeight={600}
        color="custom.whiteLightO1"
        fontSize={26}
      >
        Top Mint Ranking
      </Typography>
    ),
  },
];

const Home = () => {
 
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        component="div"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <SlideCard />
        <Box
          sx={{
            paddingInline: 1.5,
          }}
        >
          <HomeCard />
        </Box>
      </Box>
      <CustomTab tabs={tabs} />
      <Box
        sx={{
          width: '100%',
          padding: { xs: '20px', xl: '20px' },
        }}
      >
        <TabsContainer tabs={tabs} />
        <ActiveTab />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
