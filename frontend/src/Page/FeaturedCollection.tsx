import React from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface CollectionCardProps {
  image: string;
  name: string;
  verified?: boolean;
  floorPrice: string;
  priceChange: string;
  priceChangePositive?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
  showPrev?: boolean;
  showNext?: boolean;
}

const CollectionCard: React.FC<CollectionCardProps> = React.memo(
  ({
    image,
    name,
    verified,
    floorPrice,
    priceChange,
    priceChangePositive,
    onNext,
    onPrev,
    showPrev,
    showNext,
  }) => {
    const theme = useTheme();
    return (
      <Box
        sx={{
          borderRadius: 3,
          bgcolor: 'secondary.main',
          position: 'relative',
          minHeight: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          // boxShadow: 'none',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          border: `1px solid`,
          borderColor: 'divider',
          p: 0,
        }}
      >
        {/* Carousel image */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            minHeight: 200,
            borderRadius: 3,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={image}
            alt={name}
            width={320}
            height={200}
            loading="lazy"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: 200,
              // borderRadius: 8,
            }}
          />
        </Box>
        {/* Carousel arrows */}
        {showPrev && (
          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              left: -12,
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(225,225,225,0.4)',
              backdropFilter: 'blur(4px)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(225,225,225,0.5)' },
              zIndex: 1,
            }}
            size="small"
            onClick={onPrev}
          >
            <ChevronLeftIcon />
          </IconButton>
        )}
        {showNext && (
          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              right: -12,
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(225,225,225,0.4)',
              backdropFilter: 'blur(4px)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(225,225,225,0.5)' },
              zIndex: 1,
            }}
            size="small"
            onClick={onNext}
          >
            <ChevronRightIcon />
          </IconButton>
        )}
        {/* Info */}
        <Box sx={{ p: 2, pt: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography fontWeight={600} fontSize={16} color="text.primary">
              {name}
            </Typography>
            {verified && (
              <CheckCircleIcon
                sx={{
                  color: theme.palette.custom.primaryLight,
                  fontSize: 18,
                  ml: 0.5,
                }}
              />
            )}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 0.5 }}>
            <Typography
              fontSize={14}
              sx={{ fontWeight: 500, color: 'custom.thirdText' }}
            >
              Floor Price
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={600}
              color="text.primary"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              <img
                src="https://marketplace.polycruz.io/eth.svg"
                alt="eth"
                width={14}
                height={14}
                style={{ marginRight: 2, verticalAlign: 'middle' }}
                loading="lazy"
              />
              {floorPrice}
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={600}
              sx={{
                color: priceChangePositive
                  ? theme.palette.custom.green
                  : theme.palette.custom.red,
                ml: 1,
              }}
            >
              {priceChange}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
);
CollectionCard.displayName = 'CollectionCard';

const featuredCollections = [
  {
    image:
      'https://img.freepik.com/premium-vector/digital-hand-touching-technology-polygonal-wireframe-art_201274-495.jpg?semt=ais_hybrid&w=740',
    name: 'NightGlyders',
    verified: true,
    floorPrice: '46.99',
    priceChange: '-6.16%',
    priceChangePositive: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    name: 'Crypto Owls',
    verified: true,
    floorPrice: '12.34',
    priceChange: '+2.5%',
    priceChangePositive: true,
  },
  {
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    name: 'Crypto Owls',
    verified: true,
    floorPrice: '12.34',
    priceChange: '+2.5%',
    priceChangePositive: true,
  },
  {
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    name: 'Crypto Owls',
    verified: true,
    floorPrice: '12.34',
    priceChange: '+2.5%',
    priceChangePositive: true,
  },
  {
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    name: 'Crypto Owls',
    verified: true,
    floorPrice: '12.34',
    priceChange: '+2.5%',
    priceChangePositive: true,
  },
];

const topMovers = [
  {
    image:
      'https://img.freepik.com/premium-vector/digital-hand-touching-technology-polygonal-wireframe-art_201274-495.jpg?semt=ais_hybrid&w=740',
    name: "Zinu's Zombie Mob Secret Society",
    verified: true,
    floorPrice: '$124.21',
    priceChange: '+230.2%',
    priceChangePositive: true,
  },
  {
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    name: 'Pixel Foxes',
    verified: true,
    floorPrice: '$99.99',
    priceChange: '-10.0%',
    priceChangePositive: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    name: 'Pixel Foxes',
    verified: true,
    floorPrice: '$99.99',
    priceChange: '-10.0%',
    priceChangePositive: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    name: 'Pixel Foxes',
    verified: true,
    floorPrice: '$99.99',
    priceChange: '-10.0%',
    priceChangePositive: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    name: 'Pixel Foxes',
    verified: true,
    floorPrice: '$99.99',
    priceChange: '-10.0%',
    priceChangePositive: false,
  },
];

const FeaturedCollection: React.FC = () => {
  const [featuredIdx, setFeaturedIdx] = React.useState(0);
  const [moverIdx, setMoverIdx] = React.useState(0);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        width: '100%',
        flexWrap: { xs: 'wrap', md: 'nowrap' },
        p: 2,
        pb: 1.5,
        px: { xs: 2, lg: 3 },
      }}
    >
      {/* Featured Collections */}
      <Box sx={{ flex: 1, minWidth: 320 }}>
        <Typography
          fontWeight={700}
          fontSize={24}
          color="text.primary"
          sx={{
            mb: 2,
          }}
        >
          Top Trending
        </Typography>
        {/* <Typography
          fontWeight={400}
          fontSize={15}
          mb={2}
          sx={{ color: 'custom.thirdText' }}
        >
          This week's curated collections
        </Typography> */}
        <CollectionCard
          {...featuredCollections[featuredIdx]}
          showPrev={featuredIdx > 0}
          showNext={featuredIdx < featuredCollections.length - 1}
          onPrev={() => setFeaturedIdx((i) => Math.max(i - 1, 0))}
          onNext={() =>
            setFeaturedIdx((i) =>
              Math.min(i + 1, featuredCollections.length - 1)
            )
          }
        />
      </Box>
      {/* Top Movers Today */}
      <Box sx={{ flex: 1, minWidth: 320 }}>
        <Typography
          fontWeight={700}
          fontSize={24}
          color="text.primary"
          sx={{
            mb: 2,
          }}
        >
          Top Sales
        </Typography>
        {/* <Typography
          fontWeight={400}
          fontSize={15}
          mb={2}
          sx={{ color: 'custom.thirdText' }}
        >
          Largest floor price change in the past day
        </Typography> */}
        <CollectionCard
          {...topMovers[moverIdx]}
          showPrev={moverIdx > 0}
          showNext={moverIdx < topMovers.length - 1}
          onPrev={() => setMoverIdx((i) => Math.max(i - 1, 0))}
          onNext={() =>
            setMoverIdx((i) => Math.min(i + 1, topMovers.length - 1))
          }
        />
      </Box>
    </Box>
  );
};

export default FeaturedCollection;
