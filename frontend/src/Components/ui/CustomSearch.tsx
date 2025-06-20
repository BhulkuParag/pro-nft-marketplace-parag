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
  Fade,
} from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
// import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchBar from './SearchBar';
import Search from '../../assets/icons/search.svg';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SearchListCard from './SearchListCard';
const mockSuggestions = ['Axie Infinity', 'Azuki', 'Cool Cats', 'CryptoPunks'];

const SearchContent = () => (
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
            backgroundColor: 'background.default',
            fontSize: 13,
            alignItems: 'center',
            cursor: 'pointer',
            px: 0.5,
            py: 2,
            borderRadius: 2,
            '& .MuiChip-label': { px: 1 },
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
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '1px solid',
        borderColor: 'divider',
        p: 1,
        px: 1.5,
        pb: 0,
        fontSize: 13,
        color: 'custom.lightGrey',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <WhatshotIcon sx={{ fontSize: 16, color: '#FF6B00' }} />
        <Typography fontSize={13}>Trending Search</Typography>
      </Box>
      <Typography fontSize={13}>Floor</Typography>
    </Box>
    <Box component={'div'} display={'flex'} flexDirection={'column'} gap={0}>
      <SearchListCard />
      <SearchListCard />
      <SearchListCard />
      <SearchListCard />
    </Box>
  </Box>
);

const CustomSearch: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

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
            slotProps={{
              paper: {
                sx: {
                  backgroundColor: 'background.default',
                  backgroundImage: 'none',
                },
              },
            }}
          >
            <Box
              sx={{
                p: 2,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <IconButton
                onClick={handleCloseDialog}
                sx={{
                  color: 'custom.whiteLight',
                  mr: 1,
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <Box sx={{ flex: 1 }}>
                <SearchBar
                  placeholder="Search by collection, NFT, and user"
                  search={search}
                  setSearch={setSearch}
                  handleFocus={() => {}}
                  handleBlur={() => {}}
                />
              </Box>
            </Box>
            <DialogContent sx={{ pt: 2, pl: 2 }}>
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
            // handleOnClick={handleOpenDialog}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
          />
          {/* <Dialog
            open={isDialogOpen}
            onClose={handleCloseDialog}
            slotProps={{
              paper: {
                sx: {
                  width: '100%',
                  borderRadius: 2,
                  backgroundColor: 'background.default',
                  backgroundImage: 'none',
                },
              },
            }}
          >
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <SearchBar
                placeholder="Search by collection, NFT, and user"
                search={search}
                setSearch={setSearch}
                handleFocus={() => {}}
                handleBlur={() => {}}
              />
              <IconButton
                onClick={handleCloseDialog}
                sx={{
                  mr: -1,
                  color: 'custom.whiteLight',
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <DialogContent sx={{ pt: 2, pl: 2 }}>
              <SearchContent />
            </DialogContent>
          </Dialog> */}
          <Fade in={isFocused} timeout={300}>
            <Paper
              sx={{
                width: 400,
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                mt: 0.5,
                borderRadius: 2,
                backgroundColor: 'background.secondaryDark',
                color: 'white',
                height: 'auto',
                py: 2,
                border: '1px solid',
                borderColor: 'divider',
                zIndex: 1000,
              }}
            >
              <SearchContent />
            </Paper>
          </Fade>
        </Box>
      )}
    </Box>
  );
};

export default CustomSearch;
