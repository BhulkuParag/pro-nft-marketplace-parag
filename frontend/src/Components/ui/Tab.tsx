import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import type { JSX } from '@emotion/react/jsx-runtime';
import { MyGrid } from './Table';
import { Typography } from '@mui/material';

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
    <Box sx={{ width: '100%', backgroundColor: 'background.default', mt: 2 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          backgroundColor: '#1C1C1C',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            fontStyle: 'initial',
            paddingInline: 2,
            '& .MuiTabs-indicator': {
              backgroundColor: 'text.primary',
            },
            // '& .MuiTab-root': {
            //   color: 'text.secondary',
            // },
          }}
          textColor="secondary"
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
        <Typography fontSize={26}>Top Trending Collections</Typography>
        <MyGrid />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'nft_sales'}>
        <Typography fontSize={26}>Current NFT Sales</Typography>
        <MyGrid />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'top_sales'}>
        <Typography fontSize={26}>Top Sales</Typography>
        <MyGrid />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'top_mint_ranking'}>
        <Typography fontSize={26}>Top Mint Ranking</Typography>
        <MyGrid />
      </CustomTabPanel>
    </Box>
  );
}
