import React from 'react';
import { Typography } from '@mui/material';
import TableFilterBar from '../ui/TableFilterBar';

const Trending = () => {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={600}
        color="custom.whiteLightO1"
        fontSize={26}
      >
        Top Trending Collections
      </Typography>
      <TableFilterBar />
    </>
  );
};

export default React.memo(Trending);
