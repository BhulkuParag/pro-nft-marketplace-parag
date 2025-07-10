import { Box, Typography } from '@mui/material';
import React from 'react';
import type { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

const SearchContent = () => {
  const itemSearchData = useSelector(
    (state: RootState) => state.collection.itemSearchData
  );

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          borderBottom: '1px solid',
          borderColor: 'divider',
          pb: 1,
          px: 1.5,
          mt: -1,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: 'custom.grey01',
          }}
        >
          Items
        </Typography>
      </Box>
      <Box
        sx={{
          mt: -1,
          width: '100%',
          maxHeight: '30vh',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          scrollBehavior: 'smooth',
        }}
      >
        {itemSearchData?.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              py: 1,
              px: 2,
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <div className="flex items-center gap-3">
              <img
                loading="lazy"
                src={item?.token?.image}
                alt={item?.token?.name}
                width={30}
                height={30}
              />
              <Typography
                variant="subtitle2"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'custom.grey01',
                }}
              >
                {item?.token?.name}
                <span>#{item?.token?.tokenId}</span>
              </Typography>
            </div>
            <Typography
              variant="subtitle2"
              fontWeight={300}
              display={'flex'}
              alignItems={'center'}
              gap={1}
            >
              {item?.token?.collection?.floorAskPrice?.amount?.decimal?.toFixed(
                2
              ) ?? '0.00'}
              <img
                src="https://marketplace.polycruz.io/eth.svg"
                alt="ETH"
                width={9}
                height={9}
              />
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default React.memo(SearchContent);
