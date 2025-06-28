import React, { useCallback, useMemo } from 'react';
import CustomTab from '../../@ui-component/Comman/Tab';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../features/collection/collectionSlice';
import type { RootState } from '../app/store';
import CollectionOverview from '../Components/CollectionOverview/CollectionOverview';
import CollectionItems from '../Components/CollectionItems/CollectionItems';
import CollectionFooter from '../Components/CollectionFooter/CollectionFooter';
import CollectionStandout from '../Components/CollectionStandout/CollectionStandout';
import { Box } from '@mui/material';
import AiValuation from './AiValuation';
import CollectionActivity from '../Components/CollectionActivity/CollectionActivity';

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

  const dispatch = useDispatch();
  const activeTab = useSelector(
    (state: RootState) => state.collection.activeTab
  ) as TabKey;

  const handleChange = useCallback(
    (_: React.SyntheticEvent, newValue: string) => {
      dispatch(setActiveTab(newValue));
    },
    [dispatch]
  );

  return (
    <Box
      component={'div'}
      sx={{
        width: '100%',
      }}
    >
      <CustomTab
        tabs={Object.values(tabs)}
        handleChange={handleChange}
        selectedTab={activeTab}
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
