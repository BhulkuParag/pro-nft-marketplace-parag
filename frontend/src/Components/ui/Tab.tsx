import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import type { JSX } from '@emotion/react/jsx-runtime';

export default function ColorTabs(): JSX.Element {
  const [value, setValue] = React.useState<string>('one');

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: string
  ): void => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginLeft: '75px' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="trending" label="Trending" />
        <Tab value="NFT sales" label="NFT Sales" />
        <Tab value="Top sales" label="Top Sales" />
        <Tab value="Top mint Ranking" label="Top Mint Ranking" />
      </Tabs>
    </Box>
  );
}
