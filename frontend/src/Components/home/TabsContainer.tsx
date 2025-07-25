import React, { lazy, Suspense, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Box } from '@mui/material';
const Trending = lazy(() => import('./../HomeTabsHeader/Trending'));
const NftSales = lazy(() => import('./../HomeTabsHeader/NftSales'));
// const TopSales = lazy(() => import('./../HomeTabsHeader/TopSales'));
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
import Collection from '../HomeTabsHeader/Collection';
type TabKey =
  | 'collection'
  | 'trending'
  | 'nft_sales'
  | 'top_mint_ranking';

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
        label: 'Top Collection',
        value: 'collection',
        content: <Collection />,
        icon: <BsCollection className="text-lg" />,
      },
      trending: {
        label: 'Top Trending',
        value: 'trending',
        content: <Trending />,
        icon: <IoIosTrendingUp className="text-[19px]" />,
      },
      nft_sales: {
        label: 'NFT Sales',
        value: 'nft_sales',
        content: <NftSales />,
        // icon: <img src={TrendingIcon} alt='trending icon' width={25} height={25} className="text-md" />,
      },
      // top_sales: {
      //   label: 'Top Sales',
      //   value: 'top_sales',
      //   content: <TopSales />,
      //   // icon: <IoMdHeartEmpty className="text-md" />,
      // },
      top_mint_ranking: {
        label: 'Top Mint Ranking',
        value: 'top_mint_ranking',
        content: <TopMInitRanking />,
        // icon: <BsCollection className="text-md" />,
      },
    };
  }, []);

  const toggleOptions = useMemo(() => {
    return [
      {
        label: '',
        value: '0',
        icon: <TfiMenuAlt className="text-md" />,
      },
      {
        label: '',
        value: '1',
        icon: <CiGrid2H className="text-md" />,
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
