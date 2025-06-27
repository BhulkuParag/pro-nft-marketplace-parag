import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTopSalesDataRequest } from '../../features/home/homeSlice';
import ActiveTab from '../ActiveTab';

const TopSales = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopSalesDataRequest());
  }, []);

  return (
    <Box
      sx={{
        padding: { xs: '0px', xl: '10px 0px 0px 10px' },
      }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        color="custom.whiteLightO1"
        fontSize={26}
      >
        Top Sales
      </Typography>
      <ActiveTab />
    </Box>
  );
};

export default React.memo(TopSales);
