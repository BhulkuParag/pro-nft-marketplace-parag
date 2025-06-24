import { useMemo, useState } from 'react';
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
import DropDown from '../../../@ui-component/Comman/DropDown';
import DateFilter from '../../../@ui-component/Comman/DateFilter';

const TableFilterBar = () => {
  const [selectedMetric, setSelectedMetric] = useState<'Volume' | 'Sales'>(
    'Volume'
  );
  const theme = useTheme();
  const isMobileOrLaptop = useMediaQuery(theme.breakpoints.down('lg'));
  const [selectedTime, setSelectedTime] = useState('24h');
  const [anchorElFilter, setAnchorElFilter] = useState<null | HTMLElement>(
    null
  );

  const timeOptions = useMemo(() => {
    return [
      { label: '5m', value: '5m' },
      { label: '10m', value: '10m' },
      { label: '30m', value: '30m' },
      { label: '1h', value: '1h' },
      { label: '6h', value: '6h' },
      { label: '24h', value: '24h' },
      { label: '7d', value: '7d' },
      { label: '30d', value: '30d' },
    ];
  }, []);

  const vauleSales = useMemo(() => {
    return [
      { label: 'Volume', value: 'Volume' },
      { label: 'Sales', value: 'Sales' },
    ];
  }, []);

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
          backgroundColor: 'background.default',
          padding: '7px 10px',
          borderRadius: 2,
          fontFamily: 'Inter, sans-serif',
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
              fontFamily: 'Inter, sans-serif',
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
          <DropDown
            minWidth={93.84}
            options={vauleSales}
            value={selectedMetric}
            disableMenuItemTouchRipple
            disableTouchRipple
            onChange={(v) => setSelectedMetric(v as 'Volume' | 'Sales')}
          />
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
                fontFamily: 'Inter, sans-serif',
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

        {/*isMobileOrLaptop ? (
          <DropDown
            options={timeOptions}
            value={selectedTime}
            onChange={setSelectedTime}
            disableMenuItemTouchRipple
            disableTouchRipple
            minWidth={64}
            maxHeight={'30vh'}
            padding="6px 10px"
          />
        ) : (
          <Box display="flex">
            {timeOptions.map((time) => (
              <Button
                key={time.value}
                disableTouchRipple
                disableElevation
                variant={selectedTime === time.value ? 'contained' : 'text'}
                size="small"
                onClick={() => setSelectedTime(time.value)}
                sx={{
                  minWidth: '35.52px',
                  height: '36px',
                  padding: '6px 8px',
                  color:
                    selectedTime === time.value
                      ? 'text.secondary'
                      : 'custom.lightGrey',
                  textTransform: 'none',
                  fontSize: 16,
                  fontWeight: 400,
                  borderRadius: 2,
                  transition: 'none',
                  backgroundColor:
                    selectedTime === time.value
                      ? 'custom.filterBthBg'
                      : 'transparent',
                  '&:hover': {
                    backgroundColor:
                      selectedTime === time.value
                        ? 'custom.filterBthBg'
                        : 'transparent',
                    color: 'text.secondary',
                  },
                }}
              >
                {time.label}
              </Button>
            ))}
          </Box>
        )*/}
        <DateFilter
          timeOptions={timeOptions}
          selectedTime={selectedTime}
          handleChange={setSelectedTime}
        />
      </Box>
    </Box>
  );
};

export default TableFilterBar;
