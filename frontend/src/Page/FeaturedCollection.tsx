import React, { useMemo } from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';

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
          // minHeight: 200,
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
            // minHeight: 180,
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
            loading="lazy"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: 180,
              minHeight: 180,
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
              width: 26,
              height: 26,
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
              width: 26,
              height: 26,
            }}
            size="small"
            onClick={onNext}
          >
            <ChevronRightIcon />
          </IconButton>
        )}
        {/* Info */}
        <Box sx={{ p: 2, pt: 1, pb: 1, height: 62 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography fontWeight={500} fontSize={14} color="text.primary">
              {name}
            </Typography>
            {verified && (
              <svg
                className="max-w-3.5 max-h-3.5 shrink-0 text-[#A49BFF]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
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
              fontSize={12}
              color="text.primary"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              <img
                src="https://marketplace.polycruz.io/eth.svg"
                alt="eth"
                width={8}
                height={8}
                style={{ marginRight: 2, verticalAlign: 'middle' }}
                loading="lazy"
              />
              {floorPrice}
            </Typography>
            <Typography
              fontSize={12}
              // fontWeight={600}
              sx={{
                color: !priceChangePositive
                  ? theme.palette.custom.green
                  : theme.palette.custom.red,
                ml: 0.5,
              }}
            >
              {priceChange}%
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
);
CollectionCard.displayName = 'CollectionCard';

const FeaturedCollection: React.FC = () => {
  const [featuredIdx, setFeaturedIdx] = React.useState(0);
  const [moverIdx, setMoverIdx] = React.useState(0);
  const featureCardData = useSelector(
    (state: RootState) => state.home.featureCardData
  );
  const featureSalesCardData = useSelector(
    (state: RootState) => state.home.featureSalesCardData
  );

  const topMovers = useMemo(() => {
    return [
      {
        image:
          featureSalesCardData[0]?.banner ||
          featureSalesCardData[0]?.token?.image,
        name: featureSalesCardData[0]?.token?.name,
        verified:
          featureSalesCardData[0]?.openseaVerificationStatus === 'verified',
        floorPrice: featureSalesCardData[0]?.price?.amount?.decimal?.toFixed(2),
        priceChange:
          featureSalesCardData[0]?.token?.collection?.floorAskPercentChange?.toFixed(
            2
          ),
        priceChangePositive:
          featureSalesCardData[0]?.token?.collection?.floorAskPercentChange
            ?.toString()
            ?.includes('-'),
      },
      {
        image:
          featureSalesCardData[1]?.banner ||
          featureSalesCardData[1]?.token?.image,
        name: featureSalesCardData[1]?.token?.name,
        verified:
          featureSalesCardData[1]?.openseaVerificationStatus === 'verified',
        floorPrice: featureSalesCardData[1]?.price?.amount?.decimal?.toFixed(2),
        priceChange:
          featureSalesCardData[1]?.token?.collection?.floorAskPercentChange?.toFixed(
            2
          ),
        priceChangePositive:
          featureSalesCardData[1]?.token?.collection?.floorAskPercentChange
            ?.toString()
            ?.includes('-'),
      },
      {
        image:
          featureSalesCardData[2]?.banner ||
          featureSalesCardData[2]?.token?.image,
        name: featureSalesCardData[2]?.token?.name,
        verified:
          featureSalesCardData[2]?.openseaVerificationStatus === 'verified',
        floorPrice: featureSalesCardData[2]?.price?.amount?.decimal?.toFixed(2),
        priceChange:
          featureSalesCardData[2]?.token?.collection?.floorAskPercentChange?.toFixed(
            2
          ),
        priceChangePositive:
          featureSalesCardData[2]?.token?.collection?.floorAskPercentChange
            ?.toString()
            ?.includes('-'),
      },
      {
        image:
          featureSalesCardData[3]?.banner ||
          featureSalesCardData[3]?.token?.image,
        name: featureSalesCardData[3]?.token?.name,
        verified:
          featureSalesCardData[3]?.openseaVerificationStatus === 'verified',
        floorPrice: featureSalesCardData[3]?.price?.amount?.decimal?.toFixed(2),
        priceChange:
          featureSalesCardData[3]?.token?.collection?.floorAskPercentChange?.toFixed(
            2
          ),
        priceChangePositive:
          featureSalesCardData[3]?.token?.collection?.floorAskPercentChange
            ?.toString()
            ?.includes('-'),
      },
      {
        image:
          featureSalesCardData[4]?.banner ||
          featureSalesCardData[4]?.token?.image,
        name: featureSalesCardData[4]?.token?.name,
        verified:
          featureSalesCardData[4]?.openseaVerificationStatus === 'verified',
        floorPrice: featureSalesCardData[4]?.price?.amount?.decimal?.toFixed(2),
        priceChange:
          featureSalesCardData[4]?.token?.collection?.floorAskPercentChange?.toFixed(
            2
          ),
        priceChangePositive:
          featureSalesCardData[4]?.token?.collection?.floorAskPercentChange
            ?.toString()
            ?.includes('-'),
      },
    ];
  }, [featureSalesCardData]);

  const featuredCollections = useMemo(() => {
    return [
      {
        image: featureCardData[0]?.banner || featureCardData[0]?.image,
        name: featureCardData[0]?.name,
        verified: featureCardData[0]?.openseaVerificationStatus === 'verified',
        floorPrice:
          featureCardData[0]?.floorAsk?.price?.amount?.decimal?.toFixed(2),
        priceChange: featureCardData[0]?.floorAskPercentChange?.toFixed(2),
        priceChangePositive: featureCardData[0]?.floorAskPercentChange
          ?.toString()
          ?.includes('-'),
      },
      {
        image: featureCardData[1]?.banner || featureCardData[1]?.image,
        name: featureCardData[1]?.name,
        verified: featureCardData[1]?.openseaVerificationStatus === 'verified',
        floorPrice:
          featureCardData[1]?.floorAsk?.price?.amount?.decimal?.toFixed(2),
        priceChange: featureCardData[1]?.floorAskPercentChange?.toFixed(2),
        priceChangePositive: featureCardData[1]?.floorAskPercentChange
          ?.toString()
          ?.includes('-'),
      },
      {
        image: featureCardData[2]?.banner || featureCardData[2]?.image,
        name: featureCardData[2]?.name,
        verified: featureCardData[2]?.openseaVerificationStatus === 'verified',
        floorPrice:
          featureCardData[2]?.floorAsk?.price?.amount?.decimal?.toFixed(2),
        priceChange: featureCardData[2]?.floorAskPercentChange?.toFixed(2),
        priceChangePositive: featureCardData[2]?.floorAskPercentChange
          ?.toString()
          ?.includes('-'),
      },
      {
        image: featureCardData[3]?.banner || featureCardData[3]?.image,
        name: featureCardData[3]?.name,
        verified: featureCardData[3]?.openseaVerificationStatus === 'verified',
        floorPrice:
          featureCardData[3]?.floorAsk?.price?.amount?.decimal?.toFixed(2),
        priceChange: featureCardData[3]?.floorAskPercentChange?.toFixed(2),
        priceChangePositive: featureCardData[3]?.floorAskPercentChange
          ?.toString()
          ?.includes('-'),
      },
      {
        image: featureCardData[4]?.banner || featureCardData[4]?.image,
        name: featureCardData[4]?.name,
        verified: featureCardData[4]?.openseaVerificationStatus === 'verified',
        floorPrice:
          featureCardData[4]?.floorAsk?.price?.amount?.decimal?.toFixed(2),
        priceChange: featureCardData[4]?.floorAskPercentChange?.toFixed(2),
        priceChangePositive: featureCardData[4]?.floorAskPercentChange
          ?.toString()
          ?.includes('-'),
      },
    ];
  }, [featureCardData]);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        width: '100%',
        flexWrap: { xs: 'wrap', md: 'nowrap' },
        p: 2,
        pb: 1,
        pt: 0.9,
        px: { xs: 2, lg: 2.5 },
      }}
    >
      {/* Featured Collections */}
      <Box sx={{ flex: 1, minWidth: 320 }}>
        <Typography
          fontWeight={600}
          fontSize={18}
          color="text.primary"
          sx={{
            mb: 1,
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
          fontWeight={600}
          fontSize={18}
          color="text.primary"
          sx={{
            mb: 1,
          }}
        >
          NFT Sales
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
