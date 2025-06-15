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
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
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

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        disableTouchRipple
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textTransform: 'none',
          borderRadius: 2,
          px: 2,
          py: 1,
          minWidth: 180,
          color: 'white',
          fontSize: 14,
          border: '1px solid #6a7282',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: 2,
            minWidth: 200,
            maxHeight: 400,
            boxShadow: 3,
            border: '1px solid #6a7282',
            backgroundColor: '#141416',
            mt: 0.5,
            scrollbarWidth: 'none',
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {options.map((option) => (
          <MenuItem
            disableTouchRipple
            disableRipple
            disableGutters
            key={option.value}
            selected={option.value === value}
            onClick={() => handleSelect(option.value)}
            sx={{
              backgroundColor: '#141416',
              fontSize: 14,
              // '&:hover ': {
              //   backgroundColor: '#353945',
              //   borderRadius: 2
              // },
            }}
          >
            {option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CustomDropdown;