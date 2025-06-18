import React, { useState } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  Chip,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CloseIcon from '@mui/icons-material/Close';
import SearchBar from './SearchBar';
import Search from '../../assets/icons/search.svg';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const mockSuggestions = ['Axie Infinity', 'Azuki', 'Cool Cats', 'CryptoPunks'];

const CustomSearch: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [search, setSearch] = useState('');

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const SearchContent = () => (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          alignItems: 'center',
          overflowX: 'auto',
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
    </Box>
  );

  return (
    <Box
      sx={{
        position: 'relative',
        width: {
          xs: 'auto',
          sm: 352,
        },
      }}
    >
      {isMobile ? (
        <>
          <IconButton
            onClick={handleOpenDialog}
            sx={{
              color: 'custom.whiteLight',
              // padding: { xs: 0, sm: 1 },
            }}
          >
            <img alt="search" width="24" height="24" src={Search} />
          </IconButton>

          <Dialog
            fullScreen
            open={isDialogOpen}
            onClose={handleCloseDialog}
            PaperProps={{
              sx: {
                backgroundColor: 'background.default',
                backgroundImage: 'none',
              },
            }}
          >
            <Box sx={{ p: 2, position: 'relative' }}>
              <IconButton
                onClick={handleCloseDialog}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'custom.whiteLight',
                }}
              >
                <CloseIcon />
              </IconButton>
              <SearchBar
                placeholder="Search by collection, NFT, and user"
                search={search}
                setSearch={setSearch}
                handleFocus={() => {}}
                handleBlur={() => {}}
              />
            </Box>
            <DialogContent sx={{ pt: 2 }}>
              <SearchContent />
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <Box sx={{ position: 'relative' }}>
          <SearchBar
            placeholder="Search by collection, NFT, and user"
            hasSplash
            search={search}
            setSearch={setSearch}
            handleFocus={() => {}}
            handleBlur={() => {}}
          />
          {search && (
            <Paper
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                mt: 1,
                borderRadius: 2,
                backgroundColor: 'background.default',
                color: 'white',
                minHeight: '15vh',
                p: 2,
                border: '1px solid',
                borderColor: 'divider',
                zIndex: 1000,
              }}
            >
              <SearchContent />
            </Paper>
          )}
        </Box>
      )}
    </Box>
  );
};

export default CustomSearch;
