import { Box, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CollectionHero from '../CollectionHero/CollectionHero';
import MarketOverview from './MarketOverview';
import HolderHistory from './HolderHistory';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOverviewDetailDataRequest } from '../../features/collection/collectionSlice';
import type { RootState } from '../../app/store';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
}));

const StatValue = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const CollectionOverview = () => {
  const dispatch = useDispatch();
  const { tabData } = useSelector((state: RootState) => state.collection);

  useEffect(() => {
    dispatch(fetchOverviewDetailDataRequest());
  }, []);

  const stats = useMemo(() => {
    return [
      {
        title: 'NFT Volume (24H)',
        value: tabData?.overview?.volume['_1day'],
        change: '+12.5%',
        isPositive: true,
        icon: (
          <Tooltip title="Info" arrow placement="top">
            <IconButton
              sx={{
                '& :hover': {
                  color: 'custom.primaryLight',
                },
              }}
            >
              <InfoOutlineIcon sx={{ color: '#777e90' }} />
            </IconButton>
          </Tooltip>
        ),
      },
      {
        title: 'NFT Floor Price',
        value: '0.45',
        change: '-2.3%',
        isPositive: false,
        icon: (
          <Tooltip title="Info" arrow placement="top">
            <IconButton
              sx={{
                '& :hover': {
                  color: 'custom.primaryLight',
                },
              }}
            >
              <InfoOutlineIcon sx={{ color: '#777e90' }} />
            </IconButton>
          </Tooltip>
        ),
      },
      {
        title: 'NFT Floor Sale (24H)',
        value: tabData?.overview?.floorSale['_1day'],
        change: '-2.3%',
        isPositive: false,
        icon: (
          <Tooltip title="Info" arrow placement="top">
            <IconButton
              sx={{
                '& :hover': {
                  color: 'custom.primaryLight',
                },
              }}
            >
              <InfoOutlineIcon sx={{ color: '#777e90' }} />
            </IconButton>
          </Tooltip>
        ),
      },
      {
        title: 'NFT Supply (24H)',
        value: tabData?.overview?.remainingSupply,
        change: '-2.3%',
        isPositive: false,
        icon: (
          <Tooltip title="Info" arrow placement="top">
            <IconButton
              sx={{
                '& :hover': {
                  color: 'custom.primaryLight',
                },
              }}
            >
              <InfoOutlineIcon sx={{ color: '#777e90' }} />
            </IconButton>
          </Tooltip>
        ),
      },
      {
        title: 'NFT OnSale (24H)',
        value: tabData?.overview?.onSaleCount,
        change: '+5.2%',
        isPositive: true,
        icon: (
          <Tooltip title="Info" arrow placement="top">
            <IconButton
              sx={{
                '& :hover': {
                  color: 'custom.primaryLight',
                },
              }}
            >
              <InfoOutlineIcon sx={{ color: '#777e90' }} />
            </IconButton>
          </Tooltip>
        ),
      },
      {
        title: 'NFT Owner (24H)',
        value: tabData?.overview?.ownerCount,
        change: '+8.1%',
        isPositive: true,
        icon: (
          <Tooltip title="Info" arrow placement="top">
            <IconButton
              sx={{
                '& :hover': {
                  color: 'custom.primaryLight',
                },
              }}
            >
              <InfoOutlineIcon sx={{ color: '#777e90' }} />
            </IconButton>
          </Tooltip>
        ),
      },
    ];
  }, [tabData]);

  return (
    <Box
      sx={{
        width: '100%',
        // minHeight: '100vh',
        backgroundColor: 'background.default',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          //   paddingInline: '80px',
          width: '100%',
        }}
      >
        <CollectionHero
          image={tabData?.overview?.image}
          title={tabData?.overview?.name}
          subtitle={tabData?.overview?.symbol}
          description={tabData?.overview?.description}
          onReadMore={() =>
            window.open('https://boredapeyachtclub.com/', '_blank')
          }
          onViewAll={() => alert('View All Collections clicked!')}
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {stats.map((stat, index) => (
            <StyledCard key={index} sx={{ width: '100%', height: '100%' }}>
              <CardContent>
                <TitleContainer>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontSize: '18px' }}
                  >
                    {stat.title}
                  </Typography>
                  {stat.icon}
                </TitleContainer>

                <StatValue>
                  <img
                    src="https://marketplace.polycruz.io/eth.svg"
                    alt="ETH"
                    style={{ width: '16px', height: '16px' }}
                  />
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {stat.value}
                  </Typography>
                </StatValue>
              </CardContent>
            </StyledCard>
          ))}
        </Box>
      </Box>
      <Box component="div" sx={{ p: '0.5rem' }}>
        <HolderHistory />
        <MarketOverview />
      </Box>
    </Box>
  );
};

export default CollectionOverview;
