import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { itemStyle } from './CollectionStandout';
const ethIcon = 'https://marketplace.polycruz.io/eth.svg';

interface StandoutCardProps {
  item: any;
}

const StandoutCard = ({ item }: StandoutCardProps) => {
  return (
    <Box sx={itemStyle} className="item">
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Avatar
          src={item?.fillSource?.icon}
          alt={String(item?.token?.tokenId)}
          sx={{ width: 36, height: 36, mr: 1 }}
          variant="square"
        />
        <div className="flex flex-col">
          <Typography
            variant="subtitle1"
            sx={{ color: 'text.primary', fontWeight: 500, fontSize: 16 }}
          >
            {item?.collection?.collectionName ?? ''}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: 'custom.grey01', fontWeight: 500, fontSize: 14 }}
          >
            {'#' + (item?.token?.tokenId ?? '')}
          </Typography>
        </div>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            sx={{ color: 'text.primary', fontWeight: 500, fontSize: 14 }}
          >
            {item?.price?.amount?.decimal}
          </Typography>
          <img src={ethIcon} alt="ETH" width={9} height={9} />
        </Box>
        <Typography sx={{ color: '#bfc3d0', fontSize: 12 }}>
          {item?.timestamp
            ? formatDistanceToNow(new Date(item.timestamp * 1000), {
                addSuffix: true,
              })
            : ''}
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(StandoutCard);
