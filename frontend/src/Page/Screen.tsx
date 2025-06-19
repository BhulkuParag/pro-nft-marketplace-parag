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
  useTheme,
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
        gridTemplateColumns: {
          lg: '25% 1fr',
          md: '25% 1fr',
          sm: '1fr',
          xs: '1fr',
        },
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
              <Typography component="span">Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
              <Typography component="span">Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
              <Typography component="span">Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
            // display: 'flex',
            // flexWrap: 'wrap',
            // gap: 4,
            display: 'grid',
            gridTemplateColumns: {
              lg: 'repeat(auto-fit, minmax(150px, 1fr))',
              md: 'repeat(auto-fit, minmax(150px, 1fr))',
              sm: 'repeat(auto-fit, minmax(150px, 1fr))',
              xs: 'repeat(2,2fr) ',
            },
            gap: 2,
            color: 'text.primary',
            fontSize: 'xl',
            fontWeight: 500,
            width: { xs: '100%', lg: '100%', md: '100%' },
          }}
        >
          {infoItems.map((item) => (
            <Box key={item.label}>
              <Typography
                sx={{ color: 'custom.lightGrey', fontSize: 'fontSize.sm' }}
              >
                {item.label}
              </Typography>
              <Typography fontWeight={600}>{item.value}</Typography>
            </Box>
          ))}
        </Box>
        {/* Card with Price and Actions */}
        <Box
          sx={{
            width: '100%',
            bgcolor: 'background.default',
            boxShadow: 'none',
            borderRadius: 3,
            p: 3,
            border: '1px solid',
            borderColor: 'custom.Boarder02',
          }}
        >
          <Box
            sx={{
              color: 'text.primary',
              fontSize: 'fontSize.sm',
              pb: 2,
              display: 'flex',
              justifyContent: {
                xs: 'center',
                sm: 'center',
                md: 'start',
                lg: 'start',
              },
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 'fontSize.sm',
                color: 'text.primary',
              }}
            >
              Listed Price
            </Typography>
            <Typography
              sx={{
                component: 'span',
                color: 'text.primary',
                fontWeight: 600,
                fontSize: 'fontSize.sm',
              }}
            >
              Ξ 42.69
            </Typography>
            <Typography sx={{ component: 'span', color: 'text.primary' }}>
              $110.01k
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row' },
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
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
                  backgroundColor: 'custom.ButtonHover',
                  color: 'custom.secondaryDark',
                },

                flex: 1,
                minWidth: 300,
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
                minWidth: 300,
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
                minWidth: 300,
              }}
            >
              Add to Cart
            </Button>
          </Box>
          <Box mt={1}>
            <Typography color="text.primary" fontWeight={600} fontSize={18}>
              Current Bids
            </Typography>
          </Box>
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
                    paddingLeft: { lg: 8, md: 8, sm: 0, xs: 0 },
                    // paddingRight: 10,
                  }}
                >
                  {/* Left side: Labels */}
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
