import React, { lazy, Suspense, useCallback, useMemo } from 'react';
import CustomTab from '../../@ui-component/Comman/Tab';
import { Box } from '@mui/material';
import {
  setActiveTab,
  setGrid,
} from '../../features/collection/collectionSlice';
import { BsGrid, BsGrid3X3Gap } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import Loading from '../../@ui-component/Comman/Loading';
import { TfiMenuAlt } from 'react-icons/tfi';
const CollectionOverview = lazy(
  () => import('../CollectionOverview/CollectionOverview')
);
const CollectionItems = lazy(
  () => import('../CollectionItems/CollectionItems')
);
const CollectionStandout = lazy(
  () => import('../CollectionStandout/CollectionStandout')
);
const AiValuation = lazy(() => import('../../Page/AiValuation'));
const CollectionActivity = lazy(
  () => import('../CollectionActivity/CollectionActivity')
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

const TabContainer = () => {
  const dispatch = useDispatch();
  const grid = useSelector((state: RootState) => state.collection.grid);
  const activeTab = useSelector(
    (state: RootState) => state.collection.activeTab
  ) as TabKey;

  const toggleOptions = useMemo(() => {
    return [
      { label: '', value: 'table', icon: <TfiMenuAlt className="text-md" />, },
      { label: '', value: '8', icon: <BsGrid3X3Gap className="text-md" /> },
      { label: '', value: '6', icon: <BsGrid className="text-md" /> },
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
      sx={{
        width: '100%',
      }}
    >
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

export default React.memo(TabContainer);
