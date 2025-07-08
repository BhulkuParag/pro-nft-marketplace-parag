import React from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SearchListCard from '../ui/SearchListCard';
import { Box, Chip, Typography } from '@mui/material';
import type { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import Loading from '../../../@ui-component/Comman/Loading';

const GlobalSearchContent = () => {
  const mockSuggestions = [
    'Axie Infinity',
    'Azuki',
    'Cool Cats',
    'CryptoPunks',
  ];

  const data = useSelector((state: RootState) => state.home.globalSearchData);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          px: 1.5,
          alignItems: 'center',
          overflowX: 'scroll',
          scrollbarWidth: 'none',
          scrollBehavior: 'smooth',
        }}
      >
        {mockSuggestions?.map((label) => (
          <Chip
            key={label}
            label={label}
            size="small"
            variant="outlined"
            sx={{
              color: 'custom.whiteLight',
              borderColor: 'divider',
              backgroundColor: 'background.default',
              fontSize: 13,
              alignItems: 'center',
              cursor: 'pointer',
              px: 0.5,
              opacity: 0.7,
              py: 2,
              borderRadius: 2,
              '& .MuiChip-label': { px: 1 },
              '&:hover': {
                opacity: 1,
              },
            }}
            icon={
              <ArrowOutwardIcon
                sx={{
                  width: '20px',
                  height: '20px',
                  color: 'custom.lightGrey',
                }}
              />
            }
          />
        ))}
      </Box>
      <Box
        component={'div'}
        sx={{
          maxHeight: '40vh',
          overflowY: 'scroll',
          scrollbarWidth: 'none',
          scrollBehavior: 'smooth',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid',
            borderColor: 'divider',
            p: 1,
            px: 1.5,
            fontSize: 13,
            color: 'custom.lightGrey',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <WhatshotIcon sx={{ fontSize: 16, color: '#FF6B00' }} />
            <Typography fontSize={13}>Trending Search</Typography>
          </Box>
          <Typography fontSize={13}>Floor</Typography>
        </Box>
        <Box
          component={'div'}
          display={'flex'}
          flexDirection={'column'}
          gap={0}
        >
          {!data  ? (
            <Loading />
          ) : (
            data?.map((item) => <SearchListCard key={item.id} data={item} />)
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(GlobalSearchContent);
