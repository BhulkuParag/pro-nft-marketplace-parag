import { Box, Typography } from '@mui/material';
import SlideCard from '../Components/ui/SlideCard';
import CustomTab, { type TabItem } from '../../@ui-component/Comman/Tab';
import Footer from '../Components/header/Footer';
import TableFilterBar from '../Components/ui/TableFilterBar';
import ActiveTab from '../Components/ActiveTab';
import TabHeader from '../Components/TabsContainer';
import { setActiveTab } from '../features/home/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import HomeCard from '../../@ui-component/Comman/HomeCard';
import type { RootState } from '../app/store';
import React, { useCallback, useMemo } from 'react';

const Home = () => {
  const tabs = useMemo<TabItem[]>(() => {
    return [
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
  }, []);

  const dispatch = useDispatch();
  const { activeTab } = useSelector((state: RootState) => state.home);

  const handleChange = useCallback(
    (_: React.SyntheticEvent, newValue: string) => {
      dispatch(setActiveTab(newValue));
    },
    [dispatch]
  );

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      <SlideCard />
      <CustomTab tabs={tabs} handleChange={handleChange} borderBottom   selectedTab={activeTab}/>
      <Box
        sx={{
          width: '100%',
          padding: '20px',
        }}
      >
        <TabHeader />
        <ActiveTab />
      </Box>
      <Footer />
    </Box>
  );
};

export default React.memo(Home);
