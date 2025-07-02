import React, { lazy, useCallback, useMemo, useState } from 'react';
import CustomTab from '../../@ui-component/Comman/Tab';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab, setGrid } from '../features/collection/collectionSlice';
import type { RootState } from '../app/store';
import { Box } from '@mui/material';
import BannerSection from '../Components/CollectionOverview/BannerSection';
import { BsGrid } from 'react-icons/bs';
import { BsGrid3X3Gap } from 'react-icons/bs';
const CollectionOverview = lazy(
  () => import('../Components/CollectionOverview/CollectionOverview')
);
const CollectionItems = lazy(
  () => import('../Components/CollectionItems/CollectionItems')
);
const CollectionStandout = lazy(
  () => import('../Components/CollectionStandout/CollectionStandout')
);
const AiValuation = lazy(() => import('./AiValuation'));
const CollectionActivity = lazy(
  () => import('../Components/CollectionActivity/CollectionActivity')
);
const CollectionFooter = lazy(
  () => import('../Components/CollectionFooter/CollectionFooter')
);

export type TabKey =
  | 'overview'
  | 'items'
  | 'ai_valuation'
  | 'standout'
  | 'activity';

interface TabContent {
  label: string;
  value: TabKey;
  content?: React.ReactNode;
}

const Collection = () => {
  const dispatch = useDispatch();
  const { grid } = useSelector((state: RootState) => state.collection);
  const activeTab = useSelector(
    (state: RootState) => state.collection.activeTab
  ) as TabKey;

  const toggleOptions = useMemo(() => {
    return [
      { label: '', value: '8', icon: <BsGrid3X3Gap className="text-lg" /> },
      { label: '', value: '6', icon: <BsGrid className="text-lg" /> },
    ];
  }, []);

  const tabs = useMemo<Record<TabKey, TabContent>>(() => {
    return {
      overview: {
        label: 'Overview',
        value: 'overview',
        content: <CollectionOverview />,
      },
      items: {
        label: 'Items',
        value: 'items',
        content: <CollectionItems />,
      },
      ai_valuation: {
        label: 'AI Valuation',
        value: 'ai_valuation',
        content: <AiValuation />,
      },
      standout: {
        label: 'Standout',
        value: 'standout',
        content: <CollectionStandout />,
      },
      activity: {
        label: 'Activity',
        value: 'activity',
        content: <CollectionActivity />,
      },
    };
  }, []);

  const handleChange = useCallback(
    (_: React.SyntheticEvent, newValue: string) => {
      dispatch(setActiveTab(newValue));
    },
    []
  );

  const handleToggleOnChange = useCallback(
    (_: React.SyntheticEvent, newValue: string) => {
      if (!newValue) return;
      dispatch(setGrid(newValue));
    },
    []
  );

  const handleToggleOnChangeForMobile = useCallback((newValue: string) => {
    if (!newValue) return;
    dispatch(setGrid(newValue));
  }, []);

  return (
    <Box
      component={'div'}
      sx={{
        width: '100%',
      }}
    >
      <BannerSection />
      <CustomTab
        tabs={Object.values(tabs)}
        handleChange={handleChange}
        selectedTab={activeTab}
        marginTop={0}
        wantToggleButton={activeTab === 'items'}
        variant="standard"
        toggleOptions={toggleOptions}
        selectedToggleValue={grid}
        handleToggleOnChange={handleToggleOnChange}
        handleToggleOnChangeForMobile={handleToggleOnChangeForMobile}
      />
      <Box
        sx={{
          width: '100%',
          padding: '32px 20px',
        }}
      >
        {tabs[activeTab].content}
      </Box>
      <CollectionFooter />
    </Box>
  );
};

export default Collection;
