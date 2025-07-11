import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  Button,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import type { ReactNode } from 'react';

export interface DropdownOption {
  label: string;
  value: string;
  icon?: ReactNode;
}

export interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  startIcon?: ReactNode;
  transformOrigin?: {
    vertical: 'top' | 'center' | 'bottom' | number;
    horizontal: 'left' | 'center' | 'right' | number;
  };
  onChange: (value: string) => void;
  disableTouchRipple?: boolean;
  anchorOrigin?: {
    vertical: 'top' | 'center' | 'bottom' | number;
    horizontal: 'left' | 'center' | 'right' | number;
  };
  disableMenuItemTouchRipple?: boolean;
  minWidth?: string | number;
  maxHeight?: string | number;
  mt?: string | number;
  padding?: string | number;
  gapBetweenMenuItem?: string | number;
  fontSize?: string | number;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  startIcon,
  transformOrigin = {
    vertical: 'top',
    horizontal: 'left',
  },
  disableTouchRipple = false,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left',
  },
  disableMenuItemTouchRipple = false,
  minWidth = 200,
  maxHeight = 400,
  padding = '6px 10px',
  gapBetweenMenuItem = 0.5,
  mt = 0.5,
  fontSize = 14,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleSelect = (val: string) => {
    onChange(val);
    handleClose();
  };

  const selectedOption = options.find((opt) => opt?.value === value);

  return (
    <div className="w-auto">
      <Button
        variant="outlined"
        onClick={handleOpen}
        disableTouchRipple={disableTouchRipple}
        startIcon={startIcon}
        endIcon={
          <KeyboardArrowDownIcon
            sx={{
              ml: -1.2,
              color: 'custom.grey01',
            }}
          />
        }
        sx={{
          textTransform: 'none',
          transition: 'none',
          borderRadius: 2,
          padding: padding,
          height: '40px',
          width: 'fit-contant',
          color: 'custom.grey01',
          fontSize: '14px',
          fontWeight: 400,
          border: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'background.default',
          gap: 1,
        }}
      >
        {selectedOption ? selectedOption?.icon : ''}
        {selectedOption ? selectedOption?.label : ''}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              borderRadius: 2,
              minWidth: minWidth,
              maxHeight: maxHeight,
              boxShadow: 'none',
              fontWeight: 300,
              border: '1px solid',
              borderColor: 'divider',
              mt: mt,
              scrollbarWidth: 'none',
              '& .MuiList-root': {
                backgroundColor: 'background.default',
                gap: gapBetweenMenuItem,
                display: 'flex',
                flexDirection: 'column',
              },
              '& .Mui-selected': {
                backgroundColor: '#75757527',
                color: 'inherit',
                borderRadius: 2,
              },
              '&: .Mui-selected :hover': {
                backgroundColor: '#75757527',
                color: 'inherit',
                borderRadius: 2,
              },
            },
          },
        }}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        {options?.map((option) => (
          <MenuItem
            disableTouchRipple={disableMenuItemTouchRipple}
            disableRipple
            disableGutters
            key={option?.value}
            selected={option?.value === value}
            onClick={() => handleSelect(option?.value)}
            sx={{
              backgroundColor: 'background.default',
              fontSize: fontSize,
              fontWeight: 300,
              mx: 1,
              pl: 1,
              '&:hover ': {
                backgroundColor: '#75757527',
                borderRadius: 2,
                color: 'inherit',
              },
            }}
          >
            {option?.icon && <ListItemIcon>{option?.icon}</ListItemIcon>}
            <ListItemText primary={option?.label} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default React.memo(CustomDropdown);
