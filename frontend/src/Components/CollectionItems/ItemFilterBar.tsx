import { Box, IconButton, Typography } from '@mui/material';
import SearchContainer from './SearchContainer';
import DropDown from '../../../@ui-component/Comman/DropDown';
import BarFilterIcon from '../Icon/BarFilterIcon';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';

const ItemFilterBar = () => {
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
          gap: 1.5,
        }}
      >
        <IconButton
          sx={{
            border: `1px solid`,
            borderColor: 'divider',
            borderRadius: 2,
            color: 'text.secondary',
            mb: 0.2,
          }}
          className="group"
        >
          {/* <FilterListIcon /> */}
          <BarFilterIcon
            className={`w-5 h-5 group-hover:fill-[#A49BFF] fill-[#777E90] }`}
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
