import React, { useState } from 'react';
import {
  Box,
  Menu,
  MenuItem,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  InputBase,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BarFilterIcon from '../../Components/Icon/BarFilterIcon';

const timeOptions = ['5m', '10m', '30m', '1h', '6h', '24h', '7d', '30d'];

const TableFilterBar = () => {
  const [selectedMetric, setSelectedMetric] = useState<'Volume' | 'Sales'>(
    'Volume'
  );
  const theme = useTheme();
  const isMobileOrLaptop = useMediaQuery(theme.breakpoints.down('lg'));
  const [selectedTime, setSelectedTime] = useState('24h');
  const [anchorElMetric, setAnchorElMetric] = useState<null | HTMLElement>(
    null
  );
  const [anchorElTime, setAnchorElTime] = useState<null | HTMLElement>(null);
  const [anchorElFilter, setAnchorElFilter] = useState<null | HTMLElement>(
    null
  );

  // const handleDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElFilter(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorElFilter(null);
  // };

  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      flexWrap="wrap"
      sx={{ backgroundColor: 'background.default', marginTop: '16px' }}
    >
      <Button
        variant="outlined"
        disableTouchRipple
        disableElevation
        onClick={(e) => setAnchorElFilter(e.currentTarget)}
        startIcon={
          <BarFilterIcon
            className={`w-5 h-5 hover:text-[#A49BFF] fill-[#777E90] }`}
          />
        }
        endIcon={
          <KeyboardArrowDownIcon
            sx={{
              color: 'custom.lightGrey',
            }}
          />
        }
        sx={{
          transition: 'none',
          textTransform: 'none',
          border: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'custom.secondary',
          padding: '6px 10px',
          borderRadius: 2,
          color: 'custom.lightGrey',
        }}
      >
        Floor Price
      </Button>

      <Menu
        anchorEl={anchorElFilter}
        open={Boolean(anchorElFilter)}
        onClose={() => setAnchorElFilter(null)}
        sx={{
          zIndex: 1000,
          padding: 0,
          margin: 0,
          '& .MuiPaper-root': {
            padding: 0,
            margin: 0,
          },
          '& .MuiList-root': {
            backgroundColor: 'background.default',
            padding: 0,
            margin: 0,
          },
          '& .MuiMenuItem-root': {
            padding: 0,
            margin: 0,
            '&:hover': {
              backgroundColor: 'background.default',
            },
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: 'background.default',
              boxShadow: 'none',
              padding: 0,
              margin: 0,
            },
          },
          list: {
            sx: {
              padding: 0,
              margin: 0,
              backgroundColor: 'background.default',
            },
          },
        }}
      >
        <MenuItem
          disableTouchRipple
          disableRipple
          sx={{
            backgroundColor: 'background.default',
            padding: 0,
            margin: 0,
            '&:hover': {
              backgroundColor: 'background.default',
            },
            '&.Mui-focusVisible': {
              backgroundColor: 'background.default',
            },
          }}
        >
          <Box
            component={'form'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              backgroundColor: 'background.default',
              border: '1px solid',
              borderColor: 'divider',
              padding: '8px',
              borderRadius: '10px',
              marginTop: 0.5,
            }}
          >
            <InputBase
              placeholder="Min"
              sx={{
                backgroundColor: 'background.default',
                color: 'inherit',
                px: 2,
                py: 0.8,
                borderRadius: '8px',
                fontSize: '14px',
                border: '1px solid',
                borderColor: 'divider',
                width: '60px',
                '& input': {
                  textAlign: 'center',
                },
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
              inputProps={{ 'aria-label': 'min value' }}
            />
            <InputBase
              placeholder="Max"
              sx={{
                backgroundColor: 'background.default',
                color: 'inherit',
                px: 2,
                py: 0.8,
                borderRadius: '8px',
                fontSize: '14px',
                border: '1px solid',
                borderColor: 'divider',
                width: '63px',
                '& input': {
                  textAlign: 'center',
                },
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
              inputProps={{ 'aria-label': 'max value' }}
            />
            <Button
              variant="contained"
              disableElevation
              disableTouchRipple
              sx={{
                transition: 'none',
                backgroundColor: '#7367f0', // light purple
                color: 'white',
                textTransform: 'none',
                borderRadius: 2,
                px: 2.5,
                py: 1.1,
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#a49bff',
                  color: 'white',
                },
              }}
            >
              Apply
            </Button>
          </Box>
        </MenuItem>
      </Menu>

      <Box
        component={'div'}
        display={'flex'}
        alignItems={'center'}
        gap={isMobileOrLaptop ? '14px' : '36px'}
      >
        {isMobileOrLaptop ? (
          <>
            <Button
              onClick={(e) => setAnchorElMetric(e.currentTarget)}
              endIcon={<KeyboardArrowDownIcon />}
              disableElevation
              disableTouchRipple
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                textTransform: 'none',
                borderRadius: 2,
                padding: '6px 10px',
                color: 'custom.lightGrey',
                transition: 'none',
              }}
            >
              {selectedMetric}
            </Button>
            <Menu
              anchorEl={anchorElMetric}
              open={Boolean(anchorElMetric)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={() => setAnchorElMetric(null)}
              slotProps={{
                paper: {
                  sx: {
                    border: '1px solid',
                    borderColor: 'divider',
                    padding: 0,
                    borderRadius: 2,
                    marginTop: 0.5,
                  },
                },
                list: {
                  sx: {
                    padding: 0,
                    margin: 0,
                    backgroundColor: 'background.default',
                    color: 'custom.lightGrey',
                    '& .MuiListItem-root-selected': {
                      backgroundColor: 'custom.lightGrey',
                    },
                  },
                },
              }}
            >
              <MenuItem onClick={() => setSelectedMetric('Volume')}>
                volume
              </MenuItem>
              <MenuItem onClick={() => setSelectedMetric('Sales')}>
                Sales
              </MenuItem>
            </Menu>
          </>
        ) : (
          <ToggleButtonGroup
            value={selectedMetric}
            exclusive
            onChange={(e, value) => {
              e.preventDefault();
              if (value !== null) setSelectedMetric(value);
            }}
            size="small"
            sx={{
              borderRadius: 2,
              gap: 0.5,
              p: 0.5,
              border: '1px solid',
              borderColor: 'divider',
              '& .MuiToggleButtonGroup-grouped': {
                border: 0,
                borderRadius: 2,
                color: 'custom.lightGrey',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'text.secondary',
                },
              },
              '& .MuiToggleButton-root.Mui-selected': {
                color: 'text.secondary',
                backgroundColor: 'custom.filterBthBg',
                '&:hover': {
                  backgroundColor: 'custom.filterBthBg',
                  color: 'text.secondary',
                },
              },
            }}
          >
            <ToggleButton
              value="Volume"
              disableTouchRipple
              sx={{
                textTransform: 'none',
                fontSize: 16,
                fontWeight: '400',
                paddingBlock: '4px',
              }}
            >
              volume
            </ToggleButton>
            <ToggleButton
              value="Sales"
              disableTouchRipple
              sx={{
                textTransform: 'none',
                fontSize: 16,
                fontWeight: '400',
                paddingBlock: '4px',
              }}
            >
              sales
            </ToggleButton>
          </ToggleButtonGroup>
        )}

        <Divider
          flexItem
          orientation="vertical"
          sx={{
            height: '36px',
            mt: 1,
            mr: -1.5,
            borderColor: 'divider',
            display: isMobileOrLaptop ? 'none' : 'block',
          }}
        />

        {isMobileOrLaptop ? (
          <>
            <Button
              onClick={(e) => setAnchorElTime(e.currentTarget)}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                textTransform: 'none',
                borderRadius: 2,
                padding: '6px 10px',
                color: 'custom.lightGrey',
              }}
            >
              {selectedTime}
            </Button>
            <Menu
              anchorEl={anchorElTime}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              slotProps={{
                paper: {
                  sx: {
                    border: '1px solid',
                    borderColor: 'divider',
                    padding: 0,
                    borderRadius: 2,
                    marginTop: 0.5,
                  },
                },
                list: {
                  sx: {
                    padding: 0,
                    margin: 0,
                    backgroundColor: 'background.default',
                    color: 'custom.lightGrey',
                    '& .MuiListItem-root-selected': {
                      backgroundColor: 'custom.lightGrey',
                    },
                  },
                },
              }}
              open={Boolean(anchorElTime)}
              onClose={() => setAnchorElTime(null)}
            >
              {timeOptions.map((time) => (
                <MenuItem
                  key={time}
                  onClick={() => {
                    setSelectedTime(time);
                    setAnchorElTime(null);
                  }}
                >
                  {time}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box display="flex">
            {timeOptions.map((time) => (
              <Button
                key={time}
                disableTouchRipple
                disableElevation
                variant={selectedTime === time ? 'contained' : 'text'}
                size="small"
                onClick={() => setSelectedTime(time)}
                sx={{
                  minWidth: '35.52px',
                  height: '36px',
                  padding: '6px 8px',
                  color:
                    selectedTime === time
                      ? 'text.secondary'
                      : 'custom.lightGrey',
                  textTransform: 'none',
                  fontSize: 16,
                  fontWeight: 300,
                  borderRadius: 2,
                  transition: 'none',
                  backgroundColor:
                    selectedTime === time
                      ? 'custom.filterBthBg'
                      : 'transparent',
                }}
              >
                {time}
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TableFilterBar;
