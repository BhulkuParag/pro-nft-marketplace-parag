import { Box, IconButton, Typography } from '@mui/material';
import SearchContainer from './SearchContainer';
import DropDown from '../../@ui-component/Comman/DropDown';
import BarFilterIcon from '../Icon/BarFilterIcon';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { setItemFilterOpen } from '../../features/collection/collectionSlice';

const ItemFilterBar = () => {
  const dispatch = useDispatch();
  const tabData = useSelector((state: RootState) => state.collection.tabData);
  const itemsFilter = useMemo(() => {
    return [
      {
        label: 'Price: Low to High',
        // value: '&sortDirection=asc&includeLastSale=true',
        value: 'Price: Low to High',
      },
      {
        label: 'Price: High to Low',
        // value: '&sortDirection=desc&includeLastSale=true',
        value: 'Price: High to Low',
      },
      {
        label: 'Rear to Common',
        // value: '&sortDirection=asc&includeLastSale=true', // sortBy=rarity
        value: 'Rear to Common', // sortBy=rarity
      },
      {
        label: 'Common to Rear',
        // value: '&sortDirection=desc&includeLastSale=true', // sortBy=rarity
        value: 'Common to Rear', // sortBy=rarity
      },
    ];
  }, []);

  const handleonChange = (newValue: string) => {
    console.log(newValue);
  };

  const handleOnClick = () => {
    dispatch(setItemFilterOpen());
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        mb: 3,
        bgcolor: 'background.default',
        flexWrap: 'wrap',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <IconButton
          sx={{
            border: `1px solid`,
            borderColor: 'divider',
            borderRadius: 2,
            color: 'text.secondary',
            mb: 0.1,
          }}
          disableTouchRipple
          disableRipple
          className="group"
          onClick={handleOnClick}
        >
          {/* <FilterListIcon /> */}
          <BarFilterIcon
            className={`w-4 h-4 group-hover:fill-[#A49BFF] fill-[#777E90] }`}
          />
        </IconButton>

        <Box
          sx={{
            // display: 'flex',
            // alignItems: 'center',
            // border: `1px solid ${theme.palette.divider}`,
            // borderRadius: 2,
            // px: 1.5,
            // py: 0.5,
            minWidth: 'fit-content',
            // bgcolor: 'background.default',
            // flex: 1,
            maxWidth: 400,
          }}
        >
          <SearchContainer />
        </Box>
        <Typography className="text-white">
          {tabData?.overview?.onSaleCount} listed
        </Typography>
      </Box>
      <DropDown
        options={itemsFilter}
        value="Price: Low to High"
        disableMenuItemTouchRipple
        disableTouchRipple
        onChange={handleonChange}
      />
    </Box>
  );
};

export default ItemFilterBar;
