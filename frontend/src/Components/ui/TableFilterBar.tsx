import { useCallback, useState } from 'react';
import {
  Box,
  Menu,
  MenuItem,
  Button,
  InputBase,
  useMediaQuery,
  useTheme,
  Typography,
} from '@mui/material';
import BarFilterIcon from '../../Components/Icon/BarFilterIcon';
import DateFilter from '../../@ui-component/Comman/DateFilter';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import liveData from '../../assets/images/gif/live.gif';
import { setTime } from '../../features/home/homeSlice';
import TableSearch from '../home/TableSearch';

const TableFilterBar = () => {
  const dispatch = useDispatch();
  const time = useSelector(
    (state: RootState) => state.home.time
  );
  const timeOptions = useSelector(
    (state: RootState) => state.home.timeOptions
  );
  const theme = useTheme();
  const isMobileOrLaptop = useMediaQuery(theme.breakpoints.down('lg'));
  const [anchorElFilter, setAnchorElFilter] = useState<null | HTMLElement>(
    null
  );

  const handleDateFilterChange = useCallback(
    (date: string) => {
      if (time !== date) dispatch(setTime(date));
    },
    [dispatch, time]
  );

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
      <Box display="flex" alignItems="center" gap={1.5}>
        <Button
          className="group"
          variant="outlined"
          disableTouchRipple
          disableElevation
          onClick={(e) => setAnchorElFilter(e.currentTarget)}
          startIcon={
            <BarFilterIcon
              className={`w-4 h-4 group-hover:fill-[#A49BFF] fill-[#777E90] }`}
            />
          }
          // endIcon={
          //   <KeyboardArrowDownIcon
          //     sx={{
          //       color: 'custom.lightGrey',
          //     }}
          //   />
          // }
          sx={{
            transition: 'none',
            textTransform: 'none',
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'background.default',
            padding: '6px 10px',
            borderRadius: 2,
            fontSize: 13,
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
                borderRadius: 2,
                marginTop: 0.5,
              }}
            >
              <InputBase
                placeholder="Min"
                sx={{
                  backgroundColor: 'background.default',
                  color: 'inherit',
                  px: 2,
                  py: 0.5,
                  borderRadius: 2,
                  fontSize: '12px',
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
                  py: 0.5,
                  borderRadius: 2,
                  fontSize: '12px',
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
                  py: 0.6,
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
          sx={{
            minWidth: 320,
            maxWidth: 400,
            display: { xs: 'none', lg: 'block' },
          }}
        >
          <TableSearch />
        </Box>

        <div className="justify-center items-center gap-1 inline-flex">
          <img className="w-5 h-5" alt="Live-data" src={liveData} />
          <div className="flex-col shrink-0 justify-center items-start inline-flex">
            <Typography
              sx={{
                fontSize: 12,
                color: 'custom.lightGrey',
              }}
            >
              LIVE DATA
            </Typography>
          </div>
        </div>
      </Box>

      <Box
        component={'div'}
        display={'flex'}
        alignItems={'center'}
        gap={isMobileOrLaptop ? '14px' : '26px'}
      >
        <DateFilter
          timeOptions={timeOptions}
          selectedTime={time}
          handleChange={handleDateFilterChange}
          wantBorder
        />
      </Box>
    </Box>
  );
};

export default TableFilterBar;
