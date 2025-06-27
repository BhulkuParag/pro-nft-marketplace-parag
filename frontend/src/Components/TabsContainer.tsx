import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { Box } from '@mui/material';
import Trending from './HomeTabsHeader/Trending';
import NftSales from './HomeTabsHeader/NftSales';
import TopSales from './HomeTabsHeader/TopSales';
import TopMInitRanking from './HomeTabsHeader/TopMInitRanking';
import { setActiveTab } from '../features/home/homeSlice';
import CustomTab from '../../@ui-component/Comman/Tab';

type TabKey = 'trending' | 'nft_sales' | 'top_sales' | 'top_mint_ranking';

interface TabContent {
  label: string;
  value: TabKey;
  content?: React.ReactNode;
}

const TabContainer = () => {
  const tabs = useMemo<Record<TabKey, TabContent>>(() => {
    return {
      trending: {
        label: 'Trending',
        value: 'trending',
        content: <Trending />,
      },
      nft_sales: {
        label: 'NFT Sales',
        value: 'nft_sales',
        content: <NftSales />,
      },
      top_sales: {
        label: 'Top Sales',
        value: 'top_sales',
        content: <TopSales />,
      },
      top_mint_ranking: {
        label: 'Mint Ranking',
        value: 'top_mint_ranking',
        content: <TopMInitRanking />,
      },
    };
  }, []);

  const dispatch = useDispatch();

  const activeTab = useSelector(
    (state: RootState) => state.home.activeTab
  ) as TabKey;

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
      }}
    >
      <CustomTab
        tabs={Object.values(tabs)}
        handleChange={handleChange}
        borderBottom
        selectedTab={activeTab}
      />
      <Box
        sx={{
          width: '100%',
          padding: '20px',
        }}
      >
        {tabs[activeTab].content}
      </Box>
    </Box>
  );
};

export default React.memo(TabContainer);
