import React from 'react';
import DropDown from './DropDown';
import {
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from '@mui/material';

interface Option {
  value: string;
  label: string;
  icon?: React.ReactNode;
}
interface Props {
  options: Option[];
  selectedValue: string;
  handleOnChange: (event: React.SyntheticEvent, value: string) => void;
  handleOnChangeForMobile: (value: string) => void;
  variant?: 'standard' | 'custom';
}

const ToggleButtonCom = ({
  options,
  selectedValue,
  handleOnChange,
  handleOnChangeForMobile,
  variant = 'custom',
}: Props) => {
  const theme = useTheme();
  const isMobileOrLaptop = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <>
      {variant === 'custom' && isMobileOrLaptop ? (
        <DropDown
          minWidth={93.84}
          options={options}
          value={selectedValue}
          disableMenuItemTouchRipple
          disableTouchRipple
          onChange={handleOnChangeForMobile}
        />
      ) : (
        <ToggleButtonGroup
          value={selectedValue}
          exclusive
          defaultValue={selectedValue}
          onChange={handleOnChange}
          size="small"
          sx={{
            borderRadius: variant === 'custom' ? 2 : '5px',
            gap: 0.5,
            p: 0, // 0.5
            border: '1px solid',
            borderColor: variant === 'custom' ? 'divider' : '#A49BFF33',
            '& .MuiToggleButtonGroup-grouped': {
              border: 0,
              borderRadius: variant === 'custom' ? 2 : '',
              color: 'custom.lightGrey',
              fontFamily: 'Inter, sans-serif',
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'text.secondary',
              },
            },
            '& .MuiToggleButton-root.Mui-selected': {
              color: 'text.secondary',
              backgroundColor:
                variant === 'custom' ? 'custom.filterBthBg' : '#A49BFF33',
              '&:hover': {
                backgroundColor:
                  variant === 'custom' ? 'custom.filterBthBg' : '#A49BFF33',
                color: 'text.secondary',
              },
            },
          }}
        >
          {options.map((option) => (
            <ToggleButton
              key={option.value}
              value={option.value}
              disableTouchRipple
              sx={{
                textTransform: 'none',
                fontSize: 16,
                fontWeight: '400',
                paddingBlock: '4px',
              }}
            >
              {option.label || option.icon}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    </>
  );
};

export default ToggleButtonCom;
