import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchTopMintDataRequest } from '../../features/home/homeSlice';

const TopMInitRanking = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopMintDataRequest());
  }, []);
  return (
    <Typography
      variant="h4"
      fontWeight={600}
      color="custom.whiteLightO1"
      fontSize={26}
    >
      Top Trending Collections
    </Typography>
  );
};

export default React.memo(TopMInitRanking);
