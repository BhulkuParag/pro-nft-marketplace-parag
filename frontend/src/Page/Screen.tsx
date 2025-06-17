import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Tabs,
  Tab,
  Slider,
  useTheme,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import { Grid } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Screen: React.FC = () => {
  const theme = useTheme();
  const [tab, setTab] = useState(0);

  // Info items for the info row
  const infoItems = [
    { label: 'Created By', value: 'Crypt...unks' },
    { label: 'Created Date', value: '2022-09-13' },
    { label: 'Owner', value: '0xa2...7aa7' },
    { label: 'Floor Price', value: '42.69' },
    { label: 'Supply', value: '9,996' },
    { label: 'Type', value: 'cryptopunks' },
  ];

  return (
    <Box
      minHeight="100vh"
      bgcolor={theme.palette.background.default}
      display="flex"
      flexDirection="column"
      width="100%"
      p={2}
    >
      <Box width="100%" maxWidth="1200px" display="flex" gap={4}>
        {/* Left Side: Image and Accordion */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={380}
        >
          <Paper
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 4,
              p: 2,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src="https://cryptopunks.app/cryptopunks/cryptopunk7703.png"
              alt="CryptoPunk"
              sx={{
                borderRadius: 3,
                width: '100%',
                height: 350,
                objectFit: 'cover',
              }}
            />
            {/* Accordion */}
            <Box width="100%" mt={2}>
              <Accordion
                sx={{
                  mb: 1,
                  backgroundColor: 'custom.lightPurple',
                  borderRadius: 2,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />}
                >
                  <Typography fontWeight={600}>Collection Info</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    color="text.secondary"
                    fontSize={14}
                    textAlign="center"
                  >
                    Some collection info here...
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  mb: 1,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />}
                >
                  <Typography fontWeight={600}>Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    color="text.secondary"
                    fontSize={14}
                    textAlign="center"
                  >
                    Some details here...
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ bgcolor: 'background.paper', borderRadius: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />}
                >
                  <Typography fontWeight={600}>Traits</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    color="text.secondary"
                    fontSize={14}
                    textAlign="center"
                  >
                    Some traits here...
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Paper>
        </Box>
        {/* Right Side: Main Info, Actions, and Tabs */}
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          gap={4}
          sx={{ width: 'calc(100% - 380px - 32px)' }}
        >
          {/* Header */}
          <Box display="flex" alignItems="start" gap={2} mb={3}>
            <Avatar
              src="https://cryptopunks.app/cryptopunks/cryptopunk7703.png"
              sx={{ borderRadius: 3, width: 80, height: 80 }}
            />
            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color="text.primary"
                  noWrap
                >
                  CryptoPunks
                </Typography>
                <Box
                  ml={1}
                  fontSize={12}
                  color={theme.palette.primary.main}
                  lineHeight={1}
                >
                  ●
                </Box>
              </Box>
              <Typography
                color="text.primary"
                fontWeight={600}
                fontSize={18}
                noWrap
              >
                #7703
              </Typography>
              <Box display="flex" gap={1} mt={1}>
                <Box
                  bgcolor="background.paper"
                  color="text.primary"
                  borderRadius={10}
                  px={2}
                  py={0.5}
                  fontSize={12}
                  border={`1px solid ${theme.palette.divider}`}
                >
                  #86
                </Box>
                <Box
                  bgcolor="background.paper"
                  color="text.primary"
                  borderRadius={10}
                  px={2}
                  py={0.5}
                  fontSize={12}
                  border={`1px solid ${theme.palette.divider}`}
                >
                  #3238
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Info Row */}
          <Box
            display="flex"
            flexWrap="wrap"
            gap={4}
            color="text.primary"
            fontSize={16}
            fontWeight={500}
            mb={3}
          >
            {infoItems.map((item) => (
              <Box key={item.label}>
                <Typography color="custom.lightGrey" fontSize={12} mb={0.5}>
                  {item.label}
                </Typography>
                <Typography fontWeight={600}>{item.value}</Typography>
              </Box>
            ))}
          </Box>
          {/* Card with Price and Actions */}
          <Paper
            sx={{
              bgcolor: 'background.default',
              boxShadow: 'none',
              borderRadius: 3,
              p: 3,
              border: '1px solid',
              borderColor: 'custom.Boarder02',
              // mb: 3,
            }}
          >
            <Typography color="text.primary" fontSize={14} mb={1}>
              Listed Price{' '}
              <Box
                component="span"
                color="text.primary"
                fontWeight={600}
                fontSize={18}
              >
                Ξ 42.69
              </Box>{' '}
              <Box component="span" color="text.secondary">
                $110.01k
              </Box>
            </Typography>
            <Box display="flex" gap={2} mb={2}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontWeight: 700,
                  fontSize: 13,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'custom.Boarder02',
                  bgcolor: 'custom.purple01',
                  flex: 1,
                  minWidth: 200,
                }}
              >
                Buy Now
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontWeight: 700,
                  fontSize: 13,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'custom.Boarder02',
                  flex: 1,
                  minWidth: 200,
                }}
              >
                Make Offer
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontWeight: 700,
                  fontSize: 13,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'custom.Boarder02',
                  flex: 1,
                  minWidth: 200,
                }}
              >
                Add to Cart
              </Button>
            </Box>
            <Box mt={1}>
              <Typography
                color="text.primary"
                fontWeight={600}
                fontSize={18}
                mb={1}
              >
                Current Bids
              </Typography>
              {/* <Typography color="text.secondary" fontSize={14}>
                No current bids.
              </Typography> */}
            </Box>
          </Paper>
          {/* Tabs and Info Section */}
          <Paper
            sx={{ bgcolor: 'background.paper', borderRadius: 4, p: 3, mt: 2 }}
          >
            <Tabs value={tab} onChange={(_, v) => setTab(v)}>
              <Tab label="Info" />
              <Tab label="Market" />
              <Tab label="Activity" />
            </Tabs>
            {tab === 0 && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="start"
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar
                    src="https://cryptopunks.app/cryptopunks/cryptopunk7703.png"
                    sx={{ width: 48, height: 48 }}
                  />
                  <Typography
                    fontWeight={600}
                    fontSize={22}
                    color="text.primary"
                  >
                    CRYPTOPUNKS
                  </Typography>
                </Box>
                {/* <Grid container alignItems="center" justifyContent="center">
                  <Grid item xs={5}>
                    <Box display="flex" flexDirection="column" gap={1}>
                      <Typography
                        color="#8b8b99"
                        fontSize={22}
                        fontWeight={500}
                        mb={0.5}
                      >
                        Name
                      </Typography>
                      <Typography
                        color="#8b8b99"
                        fontSize={20}
                        fontWeight={500}
                        mb={0.5}
                      >
                        Token ID
                      </Typography>
                      <Typography
                        color="#8b8b99"
                        fontSize={20}
                        fontWeight={500}
                      >
                        Contract Address
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={7}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      gap={1}
                    >
                      <Typography color="#fff" fontWeight={700} fontSize={24}>
                        CRYPTOPUNKS
                      </Typography>
                      <Typography color="#fff" fontWeight={600} fontSize={22}>
                        6193
                      </Typography>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Typography
                          color="#7b8cff"
                          fontWeight={500}
                          fontSize={20}
                        >
                          0xb4...3bbb
                        </Typography>
                        <IconButton
                          size="small"
                          sx={{ color: '#7b8cff', p: 0.5 }}
                        >
                          <ContentCopyIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                  </Grid>
                </Grid> */}
                <Button
                  color="primary"
                  sx={{ fontSize: 24, minWidth: 0, p: 1 }}
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z" />
                  </svg>
                </Button>
              </Box>
            )}
            {/* Add Market and Activity tab content as needed */}
          </Paper>
        </Box>
      </Box>
      {/* Footer Bar */}
      {/* <Box
        // position="fixed"
        bottom={16}
        left={0}
        width="100%"
        display="flex"
        justifyContent="center"
        zIndex={50}
      >
        <Box
          width="100%"
          maxWidth="1400px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          bgcolor="background.paper"
          borderRadius={3}
          px={3}
          py={1.5}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                p: 1,
                minWidth: 0,
                borderRadius: 2,
                bgcolor: '#a996fa',
                '&:hover': {
                  bgcolor: '#6c5ffc',
                },
              }}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 20h9" />
                <path d="M12 4v16" />
                <path d="M4 12h16" />
              </svg>
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                p: 1,
                minWidth: 0,
                borderRadius: 2,
                borderColor: '#444',
              }}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </Button>
            <Slider
              min={1}
              max={100}
              value={30}
              sx={{
                color: theme.palette.primary.main,
                mx: 2,
                width: 120,
                '& .MuiSlider-thumb': {
                  bgcolor: 'background.paper',
                  border: `2px solid ${theme.palette.primary.main}`,
                },
              }}
            />
            <Typography color="text.primary" ml={2}>
              30{' '}
              <Box component="span" color="text.secondary">
                Items
              </Box>
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              ml={2}
              border={`1px solid ${theme.palette.divider}`}
              borderRadius={2}
              px={1}
            >
              <Button color="primary" sx={{ minWidth: 0 }}>
                &#8593;
              </Button>
              <Button color="primary" sx={{ minWidth: 0 }}>
                &#8595;
              </Button>
            </Box>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                p: 1,
                minWidth: 0,
                borderRadius: 2,
                borderColor: '#444',
                ml: 2,
              }}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </Button>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              color: theme.palette.background.paper,
              fontWeight: 700,
              px: 5,
              py: 1.5,
              borderRadius: 2,
            }}
          >
            Connect
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: 2,
            }}
          >
            Buy 5 Items 128657.07
          </Button>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Screen;
