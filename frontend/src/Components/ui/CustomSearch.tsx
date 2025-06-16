import React, { useState } from 'react';
import { Box, Popper, Chip, Typography, Paper } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchBar from './SearchBar';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const mockSuggestions = ['Axie Infinity', 'Azuki', 'Cool Cats', 'CryptoPunks'];

const CustomSearch: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [search, setSearch] = useState('');

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleBlur = () => {
    setTimeout(() => setAnchorEl(null), 100); // Small delay to allow click on popper content
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ position: 'relative', width: 352 }}>
      <SearchBar
        placeholder={'Search by collection, NFT, and user'}
        hasSplash
        search={search}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
        setSearch={setSearch}
      />

      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        sx={{
          zIndex: 1000,
        }}
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [-38, 8],
            },
          },
        ]}
      >
        <Paper
          sx={{
            mt: 2,
            borderRadius: 2,
            backgroundColor: 'background.default',
            color: 'white',
            width: 400,
            height: '15vh',
            display: 'flex',
            flexDirection: 'column',
              justifyContent: 'space-between',
            px: 1,
            py: 1,
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              overflowX: 'auto',
              mb: 1,
              pt: 2,
              pl: 0.5,
              scrollbarWidth: 'none',
              scrollBehavior: 'smooth',
            }}
          >
            {mockSuggestions.map((label) => (
              <Chip
                key={label}
                label={label}
                size="small"
                variant="outlined"
                sx={{
                  color: 'custom.whiteLight',
                  borderColor: 'divider',
                  backgroundColor: 'custom.secondaryDark',
                  fontSize: 13,
                  cursor: 'pointer',
                  px: 0.5,
                  py: 2,
                  borderRadius: 2,
                  '& .MuiChip-label': { px: 1 }, 
                }}
                icon={
                  <Box
                    component="span"
                    sx={{
                      color: '#8E8E93',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <ArrowOutwardIcon
                      sx={{
                        width: '23px',
                        height: '23px',
                        color: 'custom.lightGrey',
                      }}
                    />
                  </Box>
                }
              />
            ))}
          </Box>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: '1px solid',
              borderColor: 'divider',
              pt: 1,
              mt: 1,
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
        </Paper>
      </Popper>
    </Box>
  );
};

export default CustomSearch;
