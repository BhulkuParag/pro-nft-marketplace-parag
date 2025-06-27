import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { Box, Typography } from '@mui/material';
import Trending from './HomeTabsHeader/Trending';
import NftSales from './HomeTabsHeader/NftSales';
import TopMInitRanking from './HomeTabsHeader/TopMInitRanking';

type TabKey = 'trending' | 'nft_sales' | 'top_sales' | 'top_mint_ranking';

interface TabContent {
  label: string;
  value: TabKey;
  content?: React.ReactNode;
}

const TabHeader = () => {
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
      top_mint_ranking: {
        label: 'Mint Ranking',
        value: 'top_mint_ranking',
        content: <TopMInitRanking />,
      },
    };
  }, []);

  const activeTab = useSelector(
    (state: RootState) => state.home.activeTab
  ) as TabKey;

  return (
    <Box
      sx={{
        width: '100%',
        padding: { xs: '0px', xl: '20px 20px 0px 20px' },
      }}
    >
      {tabs[activeTab].content}
    </Box>
  );
};

export default React.memo(TabHeader);
