import React, { lazy, Suspense, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Box, Typography } from '@mui/material';
const Trending = lazy(() => import('./../HomeTabsHeader/Trending'));
const NftSales = lazy(() => import('./../HomeTabsHeader/NftSales'));
const TopSales = lazy(() => import('./../HomeTabsHeader/TopSales'));
const TopMInitRanking = lazy(
  () => import('./../HomeTabsHeader/TopMInitRanking')
);
import {
  setActiveTab,
  setSelectedToggleValue,
} from '../../features/home/homeSlice';
import CustomTab, { type TabItem } from '../../@ui-component/Comman/Tab';
import { CiGrid2H } from 'react-icons/ci';
import { TfiMenuAlt } from 'react-icons/tfi';
import { BsCollection } from 'react-icons/bs';
// import TrendingIcon from '../assets/icons/Trending.svg'
// import { IoMdHeartEmpty } from 'react-icons/io';
import { IoIosTrendingUp } from 'react-icons/io';
import Loading from '../../@ui-component/Comman/Loading';
type TabKey = 'trending' | 'nft_sales' | 'top_sales' | 'top_mint_ranking';

const TabContainer = () => {
  const dispatch = useDispatch();

  const activeTab = useSelector(
    (state: RootState) => state.home.activeTab
  ) as TabKey;
  const selectedToggleValue = useSelector(
    (state: RootState) => state.home.selectedToggleValue
  );

  const tabs = useMemo<Record<TabKey, TabItem>>(() => {
    return {
      collection: {
        label: 'Collection',
        value: 'collection',
        content: (
          <Box
            sx={{
              width: '100%',
              padding: { xs: '0px', xl: '20px' },
            }}
          >
            <Typography
              variant="h4"
              fontWeight={600}
              color="custom.whiteLightO1"
              fontSize={26}
            >
              Collections
            </Typography>
          </Box>
        ),
        icon: <BsCollection className="text-xl" />,
      },
      trending: {
        label: 'Trending',
        value: 'trending',
        content: <Trending />,
        icon: <IoIosTrendingUp className="text-2xl" />,
      },
      nft_sales: {
        label: 'NFT Sales',
        value: 'nft_sales',
        content: <NftSales />,
        // icon: <img src={TrendingIcon} alt='trending icon' width={25} height={25} className="text-xl" />,
      },
      top_sales: {
        label: 'Top Sales',
        value: 'top_sales',
        content: <TopSales />,
        // icon: <IoMdHeartEmpty className="text-xl" />,
      },
      top_mint_ranking: {
        label: 'Top Mint Ranking',
        value: 'top_mint_ranking',
        content: <TopMInitRanking />,
        // icon: <BsCollection className="text-xl" />,
      },
    };
  }, []);

  const toggleOptions = useMemo(() => {
    return [
      {
        label: '',
        value: '0',
        icon: <TfiMenuAlt className="text-xl" />,
      },
      {
        label: '',
        value: '1',
        icon: <CiGrid2H className="text-xl" />,
      },
    ];
  }, []);

  const handleChange = useCallback(
    (_: React.SyntheticEvent, newValue: string) => {
      dispatch(setActiveTab(newValue));
    },
    [dispatch]
  );

  const handleToggleOnChange = useCallback(
    (_: React.SyntheticEvent, newValue: string) => {
      if (!newValue) return;
      dispatch(setSelectedToggleValue(newValue));
    },
    [dispatch]
  );

  const handleToggleOnChangeForMobile = useCallback((newValue: string) => {
    if (!newValue) return;
    dispatch(setSelectedToggleValue(newValue));
  }, []);

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
        marginTop={0}
        wantToggleButton
        variant="standard"
        toggleOptions={toggleOptions}
        selectedToggleValue={selectedToggleValue}
        handleToggleOnChange={handleToggleOnChange}
        handleToggleOnChangeForMobile={handleToggleOnChangeForMobile}
      />
      <Box
        sx={{
          width: '100%',
          padding: '20px',
        }}
      >
        <Suspense fallback={<Loading />}>
          {tabs[activeTab].content ?? null}
        </Suspense>
      </Box>
    </Box>
  );
};

export default TabContainer;
