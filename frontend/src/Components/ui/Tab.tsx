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

  const tabs = React.useMemo(() => {
    return [
      { label: 'Trending', value: 'trending' },
      { label: 'NFT Sales', value: 'nft_sales' },
      { label: 'Top Sales', value: 'top_sales' },
      { label: 'Top Mint Ranking', value: 'top_mint_ranking' },
    ];
  }, []);

  return (
    <Box sx={{ width: '100%', backgroundColor: '#1C1C1C', mt: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            fontStyle: 'unset',
            paddingInline: 2,
            '& .MuiTabs-indicator': {
              backgroundColor: 'text.secondary',
            },
            // '& .MuiTab-root': {
            //   color: 'text.secondary',
            // },
          }}
          textColor="inherit"
          // textColor="secondary"
          // indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          {tabs?.map((tab) => (
            <Tab
              key={tab?.value}
              disableTouchRipple
              value={tab?.value}
              label={tab?.label}
            />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={'trending'}>
        <h1>Top Trending Collections</h1>
        <MyGrid />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'nft_sales'}>
        <h1>Current NFT Sales</h1>
        <MyGrid />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'Top sales'}>
        <h1>Top Sales</h1>
        <MyGrid />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'top_mint_ranking'}>
        <h1>Top Mint Ranking</h1>
        <MyGrid />
      </CustomTabPanel>
    </Box>
  );
}
