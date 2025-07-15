import React from 'react';
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Box,
  useTheme,
  IconButton
} from '@mui/material';
import type { ReactNode } from 'react';
// import { FaEthereum } from 'react-icons/fa';

export interface CardItem {
  id?: number;
  title?: string;
  helpIcon?: ReactNode;
  coinIcon?: ReactNode;
  price?: string | number;
  Subprice?: string;
  PNL?: string;
  GrowthIcon?: ReactNode;
  priceIcon?: ReactNode;
}

function CustomCard({
  id,
  title,
  helpIcon,
  coinIcon,
  price,
  Subprice,
  PNL,
  GrowthIcon,
  priceIcon
}: CardItem) {
  const theme = useTheme();
  return (
    <Box component="div">
      <Card
        elevation={0}
        // key={id}
        sx={{
          minWidth: { xs: 100, lg: 100 },
          border: `0.5px solid ${theme.palette.custom.borderblack01} `,
          borderRadius: '0.75rem',
          flex: { xs: '0 0 auto', sm: '0 0 auto', lg: '1 ' },
          scrollSnapAlign: { xs: 'start', sm: 'start', md: 'none' },
          backgroundColor: 'palette.secondary',
        }}
      >
        <CardActionArea
          // data-active={selectedCard === index ? '' : undefined}
          sx={{
            width: '100%',
            height: '100%',
            '&:hover': {
              // backgroundColor: 'action.selectedHover',
            },
          }}
        >
          <CardContent
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '5px',
              paddingInline: 2,
              paddingBlock: 1,
              paddingBottom: 0
              // backgroundColor: 'red',
            }}
          >
            <Box
              component="div"
              sx={{
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'space-between',
                gap: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  // 0 solid #e5e7eb
                  fontSize: 14,
                  color: 'text.CardWhite',
                  fontWeight: 600,
                }}
              >
                {title}
              </Typography>
              <IconButton
                sx={{
                  color: 'custom.thirdText',
                  // fontSize: '2px',
                  padding: 0,
                }}
              >
                {helpIcon}
              </IconButton>
              <IconButton
                sx={{
                  color: 'custom.thirdText',
                  fontSize: '15px',
                  padding: 0,
                }}
              >
                {coinIcon}
              </IconButton>
            </Box>
            <Typography
              //  color="text.primary"
              color="#10dab6"
              display={'flex'}
              gap={0.5}
              fontSize={13}
              fontWeight={500}
              alignItems={'center'}
            >
              {priceIcon} {price}
            </Typography>
            <Typography variant="body2" color="#10dab6">
              {Subprice}
            </Typography>
            <Box
              component="div"
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <Typography variant="body2" color="#10dab6">
                {PNL}
              </Typography>
              <Typography variant="body2" color="#10dab6">
                {GrowthIcon}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default React.memo(CustomCard);
