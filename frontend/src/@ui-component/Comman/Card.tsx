import React from 'react';
import { IconButton } from '@mui/material';
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import type { ReactNode } from 'react';

export interface CardItem {
  id?: number;
  title?: string;
  helpIcon?: ReactNode;
  coinIcon?: ReactNode;
  price?: string | number;
  Subprice?: string;
  PNL?: string;
  GrowthIcon?: ReactNode;
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
}: CardItem) {
  const theme = useTheme();
  return (
    <Box component="div" >
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
              gap: '5px',
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
                  fontSize: { xs: 16, md: 15 },
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
                  fontSize: '18px',
                  padding: 0,
                }}
              >
                {coinIcon}
              </IconButton>
            </Box>
            <Typography variant="body2" color="text.primary">
              {price}
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
