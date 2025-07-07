import React, { useEffect, useMemo } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchItemsDataRequest,
  setLimit,
} from '../../features/collection/collectionSlice';
import type { RootState } from '../../app/store';
import Loading from '../../../@ui-component/Comman/Loading';
import { useInView } from 'react-intersection-observer';
import DropDown from '../../../@ui-component/Comman/DropDown';
import BarFilterIcon from '../Icon/BarFilterIcon';
import SearchContainer from './SearchContainer';
import ItemCard from './ItemCard';

const CollectionItems = () => {
  const param = useParams();
  const { loading, tabData, limit, grid, itemSearchValue, itemSearchData } =
    useSelector((state: RootState) => state.collection);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const itemsToShow =
    itemSearchValue && itemSearchData.length > 0
      ? itemSearchData
      : tabData['items'] ?? [];

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

  useEffect(() => {
    if (param.id)
      dispatch(fetchItemsDataRequest({ contract: param.id, limit }));
  }, [param, limit]);

  useEffect(() => {
    if (inView && !loading && tabData['items']?.length === limit) {
      dispatch(setLimit(limit + 50));
      console.log(`Fetching more items, current limit: ${limit}`);
    }
  }, [inView, loading, limit, dispatch]);

  return (
    <Box sx={{ background: 'background.default', minHeight: '100vh' }}>
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
      {loading && <Loading />}
      <Box
        sx={{
          display: 'grid',
          //justifyContent: 'space-between',
          gridTemplateColumns: {
            xs: 'repeat(2, minmax(0, 1fr))',
            sm: 'repeat(4, minmax(0, 1fr))',
            md: 'repeat(6, minmax(0, 1fr))',
            lg: `repeat(${grid}, minmax(0, 1fr))`,
          },
          gap: 1.5,
        }}
      >
        {itemsToShow?.map((item: any) => (
          <ItemCard item={item} key={item?.token?.id} />
        ))}
      </Box>
      <Box ref={ref} sx={{ height: 1 }}></Box>
    </Box>
  );
};

export default CollectionItems;