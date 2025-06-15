import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import type { JSX } from '@emotion/react/jsx-runtime';
import { MyGrid } from './Table';

export default function ColorTabs(): JSX.Element {
  const [value, setValue] = React.useState<string>('trending');

  interface TabPanelProps {
    children?: React.ReactNode;
    index: string;
    value: string;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: string
  ): void => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
      <CustomTabPanel value={value} index={'trending'}>
        <h1 style={{ padding: '5px' }}>Top Trending Collections</h1>
        <MyGrid />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'NFT sales'}>
        <h1 style={{ padding: '5px' }}>Current NFT Sales</h1>
        <MyGrid />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'Top sales'}>
        <h1 style={{ padding: '5px' }}>Top Sales</h1>
        <MyGrid />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'Top mint Ranking'}>
        <h1 style={{ padding: '5px' }}>Top Mint Ranking</h1>
        <MyGrid />
      </CustomTabPanel>
    </Box>
  );
}
