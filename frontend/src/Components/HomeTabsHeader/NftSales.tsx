import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { fetchNftSalesDataRequest } from '../../features/home/homeSlice';
import { useDispatch } from 'react-redux';

const NftSales = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNftSalesDataRequest());
  }, []);

  return (
    <Typography
      variant="h4"
      fontWeight={600}
      color="custom.whiteLightO1"
      fontSize={26}
    >
      Current NFT Sales
    </Typography>
  );
};

export default React.memo(NftSales);
