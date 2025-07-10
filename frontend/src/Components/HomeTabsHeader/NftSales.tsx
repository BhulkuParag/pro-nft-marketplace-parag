import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { fetchNftSalesDataRequest } from '../../features/home/homeSlice';
import { useDispatch } from 'react-redux';
import ActiveTab from '../ActiveTab';

const NftSales = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNftSalesDataRequest());
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
        Current NFT Sales
      </Typography>
      <ActiveTab />
    </Box>
  );
};

export default NftSales;
