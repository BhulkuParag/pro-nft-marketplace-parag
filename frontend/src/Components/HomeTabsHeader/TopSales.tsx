import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTopSalesDataRequest } from '../../features/home/homeSlice';

const TopSales = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopSalesDataRequest());
  }, []);
  
  return (
    <Typography
      variant="h4"
      fontWeight={600}
      color="custom.whiteLightO1"
      fontSize={26}
    >
      Top Sales
    </Typography>
  );
};

export default React.memo(TopSales);
