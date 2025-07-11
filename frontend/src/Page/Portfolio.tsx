import React from 'react';
import ProfileHeader from '../Components/Profile/ProfileHeader';
import ProfileOverview from '../Components/Profile/ProfileOverview';
import { Box } from '@mui/material';

export type TabKey = 'overview' | 'items' | 'Listing' | 'activity';

interface TabContent {
  label: string;
  value: TabKey;
  content?: React.ReactNode;
}

const Portfolio = () => {
  return (
    <Box component="div">
      <ProfileHeader />
      <ProfileOverview />
    </Box>
  );
};

export default Portfolio;
