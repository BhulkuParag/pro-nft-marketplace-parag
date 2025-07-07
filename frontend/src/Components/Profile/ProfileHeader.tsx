import React, { useEffect, useMemo, useState } from 'react';
import SailingIcon from '@mui/icons-material/Sailing';
import BarChartIcon from '@mui/icons-material/BarChart';
import LanguageIcon from '@mui/icons-material/Language';
import ShareIcon from '@mui/icons-material/Share';
import { FaDiscord } from 'react-icons/fa';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import VerifiedIcon from '@mui/icons-material/Verified';

import {
  Box,
  Chip,
  Divider,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';

const ProfileHeader = () => {
  const theme = useTheme();
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [refreshed, setRefreshed] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  useEffect(() => {
    if (refreshed) {
      const timer = setTimeout(() => setRefreshed(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [refreshed]);

  const UserDeatil = useMemo(() => {
    return [
      {
        title: 'user',
        likes: '467',
        icon: (
          <VerifiedIcon
            sx={{
              color: '#7367f0',
              width: '20px',
              height: '20px',
            }}
          />
        ),
      },
    ];
  }, []);

  const socicalMediaLinks = useMemo(() => {
    return [
      {
        id: 1,
        icon: <SailingIcon sx={{ color: `${theme.palette.text.primary}` }} />,
      },
      {
        id: 2,
        icon: <BarChartIcon sx={{ color: `${theme.palette.text.primary}` }} />,
      },
      {
        id: 3,
        icon: <LanguageIcon sx={{ color: `${theme.palette.text.primary}` }} />,
      },
      {
        id: 4,
        icon: <ShareIcon sx={{ color: `${theme.palette.text.primary}` }} />,
      },
      {
        id: 5,
        icon: <FaDiscord style={{ color: `${theme.palette.text.primary}` }} />,
      },
      {
        id: 6,
        icon: <TwitterIcon sx={{ color: `${theme.palette.text.primary}` }} />,
      },
      {
        id: 7,
        icon: <InstagramIcon sx={{ color: `${theme.palette.text.primary}` }} />,
      },
    ];
  }, []);

  const chip = useMemo(() => {
    return [{ lable: 'Rank', value: '#cnsdn' }];
  }, []);

  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        // gap: '0.75rem',
        justifyContent: 'space-between',
        backgroundColor: 'secondary.main',
        padding: '1rem',
      }}
    >
      <Box
        component="div"
        sx={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
      >
        <Box
          component="img"
          // component="img"
          // sx={{
          //   width: '96px',
          //   height: '96px',
          //   borderRadius: '50%',
          //   position: 'absolute',
          //   // top: '-48px',
          //   left: '2px',
          // }}
          sx={{
            width: { xs: '4rem', md: '4.5', lg: '4.5rem', xl: '5rem' },
            height: { xs: '4rem', md: '4.5', lg: '4.5rem', xl: '5rem' },
            borderRadius: '50%',
          }}
          src="https://i.ibb.co/4d1f3xH/Rectangle-1.png"
        />
        {UserDeatil.map((user, index) => {
          return (
            <Box component="div" key={index}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  width: 'max-content',
                  // paddingRight: '15px',
                }}
              >
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                    fontWeight: 600,
                  }}
                >
                  akshay
                </Typography>
                {user.icon}
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{
                    height: '36px',
                    // mt: 1,
                    borderColor: 'divider',
                  }}
                />
                <Box component="div">
                  {chip.map((item, index) => (
                    <Chip
                      key={index}
                      label={
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',

                            // backgroundColor: theme.palette.custom.borderblack01,
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            color="custom.thirdText"
                            sx={{ fontSize: '12px' }}
                          >
                            {item.lable}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            color="text.primary"
                            sx={{ fontSize: '12px' }}
                          >
                            {item.value}
                          </Typography>
                        </Box>
                      }
                      slotProps={{
                        root: {
                          sx: {
                            height: '26px',
                            paddingBlock: 0.8,
                            backgroundColor: theme.palette.custom.borderblack01,
                            ':hover': {
                              backgroundColor: theme.palette.custom.greyDark,
                            },
                          },
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <Tooltip title="Add to Favourite" arrow placement="top">
                    <IconButton
                      onClick={() => setLiked((liked) => !liked)}
                      size="small"
                      style={{ padding: 0 }}
                    >
                      {liked ? (
                        <FavoriteIcon
                          sx={{
                            color: '#fe749b',
                            width: '1rem',
                            height: '1rem',
                          }}
                        />
                      ) : (
                        <FavoriteBorderIcon
                          sx={{
                            color: theme.palette.custom.thirdText,
                            width: '1rem',
                            height: '1rem',
                          }}
                        />
                      )}
                    </IconButton>
                  </Tooltip>
                  <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{ fontSize: '0.75rem', lineHeight: '1rem' }}
                  >
                    {user.likes}
                  </Typography>
                </Box>

                <Tooltip title="Click to Copy Address" arrow placement="top">
                  <IconButton
                    onClick={() => setCopied(true)}
                    size="small"
                    style={{ padding: 0 }}
                  >
                    {copied ? (
                      <CheckIcon
                        sx={{
                          color: theme.palette.custom.thirdText,
                          width: '1rem',
                          height: '1rem',
                        }}
                      />
                    ) : (
                      <ContentCopyIcon
                        sx={{
                          color: theme.palette.custom.thirdText,
                          width: '1rem',
                          height: '1rem',
                        }}
                      />
                    )}
                  </IconButton>
                </Tooltip>
                <Tooltip title="Refresh Metadata" arrow placement="top">
                  <IconButton onClick={() => setRefreshed(true)} size="small">
                    {refreshed ? (
                      <CheckIcon
                        sx={{
                          color: theme.palette.custom.thirdText,
                          width: '1rem',
                          height: '1rem',
                        }}
                      />
                    ) : (
                      <RotateLeftIcon
                        sx={{
                          color: theme.palette.custom.thirdText,
                          width: '1rem',
                          height: '1rem',
                        }}
                      />
                    )}
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box
        component="div"
        sx={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
      >
        {socicalMediaLinks.map((link) => (
          <IconButton
            key={link.id}
            size="small"
            sx={{
              color: theme.palette.text.primary,
              '&:hover': {
                color: theme.palette.custom.thirdText,
              },
            }}
          >
            {link.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default ProfileHeader;
