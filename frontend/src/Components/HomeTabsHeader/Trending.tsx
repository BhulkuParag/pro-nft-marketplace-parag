import React from 'react';
import { Box, Typography } from '@mui/material';
import TableFilterBar from '../ui/TableFilterBar';
import ActiveTab from '../ActiveTab';

const Trending = () => {
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

export default React.memo(Trending);
