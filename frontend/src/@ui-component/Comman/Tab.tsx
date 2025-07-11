import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import type { JSX } from '@emotion/react/jsx-runtime';
import ToggleButtonCom from './ToggleButton';
export interface TabItem {
  label: string;
  value: string;
  content?: React.ReactNode;
  icon?: React.ReactNode;
}
export interface TabOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface CustomTabProps {
  tabs: TabItem[];
  borderBottom?: boolean;
  handleChange?: (event: React.SyntheticEvent, newValue: string) => void;
  selectedTab?: string;
  marginTop?: number | string;
  variant?: 'standard' | 'custom';
  wantToggleButton?: boolean;
  toggleOptions?: TabOption[];
  selectedToggleValue?: string;
  handleToggleOnChange?: (
    event: React.SyntheticEvent,
    newValue: string
  ) => void;
  handleToggleOnChangeForMobile?: (newValue: string) => void;
}

const CustomTab = ({
  tabs,
  handleChange,
  borderBottom = false,
  selectedTab,
  marginTop = '10px',
  wantToggleButton = false,
  toggleOptions = [],
  selectedToggleValue = '',
  variant = 'custom',
  handleToggleOnChange = () => {},
  handleToggleOnChangeForMobile = () => {},
}: CustomTabProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: '100%',
        // backgroundColor: 'background.default',
        backgroundColor: 'secondary.main',
        marginTop: marginTop,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: borderBottom ? 1 : 'none',
        borderBottomColor: 'divider',
        px: 2,
      }}
    >
      <Box
      // sx={
      //   borderBottom
      //     ? {
      //         width: '100%',
      //         borderBottom: 1,
      //         borderColor: 'divider',
      //       }
      //     : {
      //         width: '100%',
      //       }
      // }
      >
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="secondary tabs example"
          variant='scrollable'
          >
          {tabs?.map((tab) => (
            <Tab
              key={tab?.value}
              value={tab?.value}
              disableFocusRipple
              disableTouchRipple
              className="group"
              label={
                tab.icon ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {tab.icon}
                    {tab.label}
                  </Box>
                ) : (
                  tab.label
                )
              }
            />
          ))}
        </Tabs>
      </Box>
      {wantToggleButton && (
        <ToggleButtonCom
          variant={variant}
          options={toggleOptions}
          selectedValue={selectedToggleValue}
          handleOnChange={handleToggleOnChange}
          handleOnChangeForMobile={handleToggleOnChangeForMobile}
        />
      )}
    </Box>
  );
};

export default React.memo(CustomTab);
