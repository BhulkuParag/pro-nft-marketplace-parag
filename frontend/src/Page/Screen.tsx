import React, { useState } from 'react';
import {
  Box,
  IconButton,
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
  Paper,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      // width="100%"
      // maxWidth="1200px"
      // display="flex"
      // flexWrap={'wrap'}
      // gap={4}
      sx={{
        display: 'grid',
        gridTemplateColumns: '25% 1fr',
        // gridTemplateRows: 'auto',
        gap: 1,
        alignItems: 'start',
        width: '100%',
        backgroundColor: 'background.default',
      }}
    >
      {/* Left Side: Image and Accordion */}

      <Box
        sx={{
          bgcolor: 'background.paper',
          // borderRadius: 4,
          p: 2,
          width: '100%',
          display: 'flex',
          gap: 2,
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
        <Box component="div">
          <Accordion
            sx={{
              borderBottom: 'none',
              // Optional: Remove the divider between accordions
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography component="span">Collection info </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr' },
                  gap: 3,
                  width: '100%',
                }}
              >
                {/* Volume */}
                <Box>
                  <Typography color="text.primary" fontWeight={500}>
                    Volume
                  </Typography>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <Box />
                    <Typography fontWeight={600} color="text.primary">
                      56.16
                    </Typography>
                  </Box>
                </Box>

                {/* Floor Price */}
                <Box>
                  <Typography color="text.primary" fontWeight={500}>
                    Floor Price
                  </Typography>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <Box />
                    <Typography fontWeight={600} color="text.primary">
                      1.82
                    </Typography>
                  </Box>
                </Box>

                {/* Rank */}
                <Box>
                  <Typography color="text.primary" fontWeight={500}>
                    Rank
                  </Typography>
                  <Typography fontWeight={600} color="text.primary">
                    5
                  </Typography>
                </Box>

                {/* Floor Sale */}
                <Box>
                  <Typography color="text.primary" fontWeight={500}>
                    Floor Sale
                  </Typography>
                  <Typography fontWeight={600} color="text.primary">
                    1.79
                  </Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              borderBottom: 'none',
              // Optional: Remove the divider between accordions
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography component="span">Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  width: {
                    lg: '66.666667%',
                    md: '66.666667%',
                    sm: '100%',
                    xs: '100%',
                  },
                  display: 'flex',
                  // flexDirection: 'column',
                  gap: 1,
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ color: 'text.primary' }}>
                  <Typography>Name</Typography>
                  <Typography>Token ID</Typography>
                  <Typography>Contract Address</Typography>
                </Box>
                {/* Right side: Values */}
                <Box sx={{ color: 'custom.lightGrey' }}>
                  <Typography fontWeight={600}>CRYPTOPUNKS</Typography>
                  <Typography fontWeight={600}>6193</Typography>
                  <Typography fontWeight={600}>0xb4...3bbb</Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              borderBottom: 'none',
              // Optional: Remove the divider between accordions
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography component="span">Traits</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 2,
                  width: '100%',
                }}
              >
                {/* Trait 1 */}
                <Box>
                  <Typography
                    color="custom.lightGrey"
                    fontWeight={500}
                    fontSize={14}
                  >
                    Trait Count
                  </Typography>
                  <Typography
                    fontWeight={700}
                    fontSize={18}
                    color="text.primary"
                  >
                    7
                  </Typography>
                  <Typography color="custom.lightGrey" fontSize={15}>
                    3783 Have this
                  </Typography>
                </Box>

                {/* Trait 2 */}
                <Box>
                  <Typography
                    color="custom.lightGrey"
                    fontWeight={500}
                    fontSize={14}
                  >
                    Serum Type
                  </Typography>
                  <Typography
                    fontWeight={700}
                    fontSize={18}
                    color="text.primary"
                  >
                    M1
                  </Typography>
                  <Typography color="custom.lightGrey" fontSize={15}>
                    14734 Have this
                  </Typography>
                </Box>

                {/* Trait 3 */}
                <Box>
                  <Typography
                    color="custom.lightGrey"
                    fontWeight={500}
                    fontSize={14}
                  >
                    Mouth
                  </Typography>
                  <Typography
                    fontWeight={700}
                    fontSize={18}
                    color="text.primary"
                  >
                    M1 Bored
                  </Typography>
                  <Typography color="custom.lightGrey" fontSize={15}>
                    3327 Have this
                  </Typography>
                </Box>

                {/* Trait 4 */}
                <Box>
                  <Typography
                    color="custom.lightGrey"
                    fontWeight={500}
                    fontSize={14}
                  >
                    Hat
                  </Typography>
                  <Typography
                    fontWeight={700}
                    fontSize={18}
                    color="text.primary"
                  >
                    M1 Army Hat
                  </Typography>
                  <Typography color="custom.lightGrey" fontSize={15}>
                    434 Have this
                  </Typography>
                </Box>

                {/* Trait 5 */}
                <Box>
                  <Typography
                    color="custom.lightGrey"
                    fontWeight={500}
                    fontSize={14}
                  >
                    Fur
                  </Typography>
                  <Typography
                    fontWeight={700}
                    fontSize={18}
                    color="text.primary"
                  >
                    M1 Black
                  </Typography>
                  <Typography color="custom.lightGrey" fontSize={15}>
                    1800 Have this
                  </Typography>
                </Box>

                {/* Trait 6 */}
                <Box>
                  <Typography
                    color="custom.lightGrey"
                    fontWeight={500}
                    fontSize={14}
                  >
                    Eyes
                  </Typography>
                  <Typography
                    fontWeight={700}
                    fontSize={18}
                    color="text.primary"
                  >
                    M1 Closed
                  </Typography>
                  <Typography color="custom.lightGrey" fontSize={15}>
                    1040 Have this
                  </Typography>
                </Box>

                {/* Trait 7 */}
                <Box>
                  <Typography
                    color="custom.lightGrey"
                    fontWeight={500}
                    fontSize={14}
                  >
                    Earring
                  </Typography>
                  <Typography
                    fontWeight={700}
                    fontSize={18}
                    color="text.primary"
                  >
                    M1 Gold Hoop
                  </Typography>
                  <Typography color="custom.lightGrey" fontSize={15}>
                    669 Have this
                  </Typography>
                </Box>
                {/* Trait 8 */}
                <Box>
                  <Typography
                    color="custom.lightGrey"
                    fontWeight={500}
                    fontSize={14}
                  >
                    Clothes
                  </Typography>
                  <Typography
                    fontWeight={700}
                    fontSize={18}
                    color="text.primary"
                  >
                    M1 Sleeveless T
                  </Typography>
                  <Typography color="custom.lightGrey" fontSize={15}>
                    384 Have this
                  </Typography>
                </Box>

                {/* Trait 9 */}
                <Box>
                  <Typography
                    color="custom.lightGrey"
                    fontWeight={500}
                    fontSize={14}
                  >
                    Background
                  </Typography>
                  <Typography
                    fontWeight={700}
                    fontSize={18}
                    color="text.primary"
                  >
                    M1 Blue
                  </Typography>
                  <Typography color="custom.lightGrey" fontSize={15}>
                    1813 Have this
                  </Typography>
                </Box>

                {/* Trait 10 */}
                <Box>
                  <Typography
                    color="custom.lightGrey"
                    fontWeight={500}
                    fontSize={14}
                  >
                    ApeCoin Staked
                  </Typography>
                  <Typography
                    fontWeight={700}
                    fontSize={18}
                    color="text.primary"
                  >
                    0 - 1 ApeCoin
                  </Typography>
                  <Typography color="custom.lightGrey" fontSize={15}>
                    13661 Have this
                  </Typography>
                </Box>

                {/* Add more traits as needed, following the same pattern */}
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>

      {/* Right Side: Main Info, Actions, and Tabs */}
      <Box
        // flex={1}
        // display="flex"
        // flexDirection="column"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 2,
          height: '100%',
          p: 2,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 2,
            }}
          >
            <Avatar
              src="https://cryptopunks.app/cryptopunks/cryptopunk7703.png"
              sx={{ borderRadius: 3, width: 80, height: 80 }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                gap: 1,
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                color="text.primary"
                noWrap
              >
                CryptoPunks
              </Typography>
              <Typography
                color="text.primary"
                fontWeight={600}
                fontSize={18}
                noWrap={true}
              >
                #7703
              </Typography>
            </Box>
          </Box>
          <Box
            // mt={2}
            sx={{
              display: 'flex',
              gap: 1,
            }}
          >
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
        {/* Info Row */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: 4,
            color: 'text.primary',
            fontSize: 'xl',
            fontWeight: 500,
            width: '100%',
          }}
        >
          {infoItems.map((item) => (
            <Box key={item.label} flex={1}>
              <Typography color="custom.lightGrey" fontSize={'sm'} mb={0.5}>
                {item.label}
              </Typography>
              <Typography fontWeight={600}>{item.value}</Typography>
            </Box>
          ))}
        </Box>
        {/* Card with Price and Actions */}
        <Box sx={{ width: '100%' }}>
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
            <Typography
              sx={{
                color: 'text.primary',
                fontSize: 'fontSize.sm',
                pb: 2,

                display: 'flex',
                gap: 2,
              }}
            >
              Listed Price{' '}
              <Box
                sx={{
                  component: 'span',
                  color: 'text.primary',
                  fontWeight: 600,
                  fontSize: 'fontSize.sm',
                }}
              >
                Ξ 42.69
              </Box>{' '}
              <Box sx={{ component: 'span', color: 'text.primary' }}>
                $110.01k
              </Box>
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontWeight: 700,

                  fontSize: 13,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'custom.Boarder02',
                  backgroundColor: 'custom.ButtonPrimary',
                  '&:hover': {
                    backgroundColor: 'custom.ButtonHover', // or color: 'primary.main'
                    color: 'custom.secondaryDark',
                  },

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
                  '&:hover': {
                    backgroundColor: 'custom.lightGrey', // or color: 'primary.main'
                  },
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
                  '&:hover': {
                    backgroundColor: 'custom.lightGrey', // or color: 'primary.main'
                  },
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
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: 1200,
          }}

          // mt={0}
        >
          {/* Current Bids section here */}

          {/* Tabs Section */}
          <Box
            sx={{
              // bgcolor: 'background.paper',
              borderRadius: 3,
              // p: 3,

              width: '100%',
              // border: '1px solid',
              // borderColor: 'divider',
              // height: '400',
            }}
          >
            <Tabs
              value={tab}
              onChange={(_, v) => setTab(v)}
              textColor="primary"
              indicatorColor="primary"
              sx={{ mb: 1 }}
            >
              <Tab label="Info" />
              <Tab label="Market" />
              <Tab label="Activity" />
            </Tabs>
            {tab === 0 && (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '2fr ',
                  gap: 2,
                  alignItems: 'center',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    src="https://cryptopunks.app/cryptopunks/cryptopunk7703.png"
                    sx={{ width: 48, height: 48 }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 'fontSize.xl',
                      color: 'text.primary',
                    }}
                  >
                    CRYPTOPUNKS
                  </Typography>
                  <Box flex={1} />
                  <IconButton>
                    {/* Twitter SVG */}
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z" />
                    </svg>
                  </IconButton>
                </Box>
                {/* Info Tab Content */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    paddingLeft: 8,
                    // paddingRight: 10,
                  }}
                >
                  {/* Left side: Labels */}
                  <Box
                    sx={{
                      width: '66.666667%',
                      display: 'flex',
                      // flexDirection: 'column',
                      gap: 1,
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box sx={{ color: 'text.primary' }}>
                      <Typography>Name</Typography>
                      <Typography>Token ID</Typography>
                      <Typography>Contract Address</Typography>
                    </Box>
                    {/* Right side: Values */}
                    <Box sx={{ color: 'custom.lightGrey' }}>
                      <Typography fontWeight={600}>CRYPTOPUNKS</Typography>
                      <Typography fontWeight={600}>6193</Typography>
                      <Typography fontWeight={600}>0xb4...3bbb</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
            {tab === 1 && (
              <Box>
                <Typography color="text.secondary">
                  Market data goes here.
                </Typography>
              </Box>
            )}
            {tab === 2 && (
              <Box>
                <Typography color="text.secondary">
                  Activity data goes here.
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Screen;
