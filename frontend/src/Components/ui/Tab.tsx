import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import type { JSX } from '@emotion/react/jsx-runtime';

export default function ColorTabs(): JSX.Element {
  const [value, setValue] = React.useState<string>('trending');

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
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          fontStyle: 'initial',
          '& .MuiTabs-indicator': {
            backgroundColor: 'text.secondary',
          },
          // '& .MuiTab-root': {
          //   color: 'text.secondary',
          // },
        }}
        textColor="inherit"
        aria-label="secondary tabs example"
      >
        {tabs?.map((tab, index) => (
          <Tab
            key={index}
            disableTouchRipple
            value={tab?.value}
            label={tab?.label}
          />
        ))}
      </Tabs>
    </Box>
  );
}
