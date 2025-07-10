import React, { useState } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  Paper,
  useTheme,
  useMediaQuery,
  IconButton,
  Fade,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchBar from './SearchBar';
import Search from '../../assets/icons/search.svg';

interface SearchContentProps {
  search: string;
  handleSearchOnChange: (value: string) => void;
  children?: React.ReactNode;
  placeholder?: string;
  backgroundColor?: string;
  dropDownBgColor?: string;
  hasSplash?: boolean;
  boxShadow?: boolean;
}

const CustomSearch: React.FC<SearchContentProps> = ({
  search = '',
  handleSearchOnChange,
  children,
  placeholder = 'Search by collection, NFT, and user',
  hasSplash = false,
  boxShadow = false,
  backgroundColor = 'custom.secondaryDark',
  dropDownBgColor = 'custom.secondaryDark',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
            disableRipple
            sx={{
              color: 'custom.whiteLight',
              padding: { xs: '6px', sm: 1 },
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
                  // mr: 1,
                  ml: -1,
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <Box sx={{ flex: 1 }}>
                <SearchBar
                  placeholder={placeholder}
                  search={search}
                  setSearch={handleSearchOnChange}
                  backgroundColor={backgroundColor}
                  handleFocus={() => {}}
                  handleBlur={() => {}}
                />
              </Box>
            </Box>
            <DialogContent sx={{ pt: 2, pl: 2 }}>{children}</DialogContent>
          </Dialog>
        </>
      ) : (
        <Box sx={{ position: 'relative' }}>
          <SearchBar
            placeholder={placeholder}
            hasSplash={hasSplash}
            search={search}
            setSearch={handleSearchOnChange}
            backgroundColor={backgroundColor}
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
            <Box
              sx={{
                // width: 400,
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                mt: 0.5,
                borderRadius: 2,
                backgroundColor: dropDownBgColor,
                color: 'white',
                height: 'auto',
                pt: 2,
                border: '1px solid',
                borderColor: 'divider',
                zIndex: 1000,
                boxShadow: boxShadow
                  ? // ? 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'
                    'rgba(17, 17, 26, 0.1) 0px 0px 16px'
                  : '',
              }}
            >
              {children}
            </Box>
          </Fade>
        </Box>
      )}
    </Box>
  );
};

export default React.memo(CustomSearch);
