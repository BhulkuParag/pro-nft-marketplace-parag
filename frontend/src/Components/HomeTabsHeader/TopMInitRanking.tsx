import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchTopMintDataRequest } from '../../features/home/homeSlice';
import ActiveTab from '../ActiveTab';

const TopMInitRanking = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopMintDataRequest());
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
        Top Mint Ranking
      </Typography>
      <ActiveTab />
    </Box>
  );
};

export default React.memo(TopMInitRanking);
