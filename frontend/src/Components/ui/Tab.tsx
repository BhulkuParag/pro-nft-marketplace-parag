import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import type { JSX } from '@emotion/react/jsx-runtime';
export interface TabItem {
  label: string;
  value: string;
  content: React.ReactNode;
}

interface CustomTabProps {
  tabs: TabItem[];
}

const CustomTab = ({ tabs }: CustomTabProps): JSX.Element => {
  const [value, setValue] = React.useState(tabs[0].value);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
          sx={{
            pl: 1.2,
          }}
        >
          {tabs?.map((tab) => (
            <Tab
              key={tab?.value}
              disableTouchRipple
              value={tab?.value}
              label={tab?.label}
              sx={{
                textTransform: 'initial',
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Box
        sx={{
          padding: '20px',
        }}
      >
        {tabs?.map((tab) =>
          tab.value === value ? (
            <Box
              key={tab.value}
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                padding: '20px 20px 0px 20px',
              }}
            >
              {tab.content}
            </Box>
          ) : null
        )}
      </Box>
    </Box>
  );
};

export default CustomTab;
