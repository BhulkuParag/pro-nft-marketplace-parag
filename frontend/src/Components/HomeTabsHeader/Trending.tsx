import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import TableFilterBar from '../ui/TableFilterBar';
import ActiveTab from '../ActiveTab';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingDataRequest } from '../../features/home/homeSlice';
import type { RootState } from '../../app/store';

const Trending = () => {
  const dispatch = useDispatch();
  const time = useSelector(
    (state: RootState) => state.home.time
  );

  useEffect(() => {
    dispatch(fetchTrendingDataRequest());
  }, [time]);

  return (
    <Box
      sx={{
        width: '100%',
        padding: { xs: '0px', xl: '20px' },
      }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        color="custom.whiteLightO1"
        fontSize={26}
      >
        Top Trending Collections
      </Typography>
      <TableFilterBar />
      <ActiveTab />
    </Box>
  );
};

export default Trending;
