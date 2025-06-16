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
          color: 'inherit',
          fontSize: 14,
          border: '1px solid',
          borderColor: 'divider',
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
        slotProps={{
          paper: {
            sx: {
              borderRadius: 2,
              minWidth: 200,
              maxHeight: 400,
              boxShadow: 3,
              border: '1px solid',
              borderColor: 'divider',
              mt: 0.5,
              scrollbarWidth: 'none',
              '& .MuiList-root': {
                backgroundColor: 'background.default',
              },
              '& .Mui-selected': {
                backgroundColor: '#75757527',
                color: 'inherit',
                borderRadius: 2,
                '&: hover': {
                  backgroundColor: '#75757527',
                  color: 'inherit',
                  borderRadius: 2,
                },
              },
            },
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
              backgroundColor: 'background.default',
              fontSize: 14,
              mx: 1,
              pl: 1,
              '&:hover ': {
                backgroundColor: '#75757527',
                borderRadius: 2,
                color: 'inherit',
              },
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
