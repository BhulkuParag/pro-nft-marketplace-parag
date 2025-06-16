import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import type { JSX } from '@emotion/react/jsx-runtime';
import { AGGridTable } from './AGGridTable';
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
      <Box
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          // alignItems: 'center',

          backgroundColor: 'background.default',
        }}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </Box>
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
          borderBottomColor: 'custom.borderblack01',
          borderColor: 'divider',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
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
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'space-between',
            alignItems: 'start',
            gap: 5,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: 'text.primary', fontWeight: 500 }}
          >
            Top Trending Collections
          </Typography>
          <AGGridTable />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'nft_sales'}>
        <h1>Current NFT Sales</h1>
        <AGGridTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'Top sales'}>
        <h1>Top Sales</h1>
        <AGGridTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'top_mint_ranking'}>
        <h1>Top Mint Ranking</h1>
        <AGGridTable />
      </CustomTabPanel>
    </Box>
  );
}
