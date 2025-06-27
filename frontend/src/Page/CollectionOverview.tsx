import { Box, Typography, Card, CardContent, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CollectionHero from '../Components/CollectionHero/CollectionHero';
import MarketOverview from '../Components/CollectionOverview/MarketOverview';
import HolderHistory from '../Components/CollectionOverview/HolderHistory';

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
  const theme = useTheme();

  const stats = [
    {
      title: 'NFT Volume (24H)',
      value: '119.47',
      change: '+12.5%',
      isPositive: true,
      icon: (
        <Tooltip title="Info" arrow placement="top">
          <IconButton>
            <InfoOutlineIcon sx={{ color: '#777e90' }} />
          </IconButton>
        </Tooltip>
      ),
    },
    {
      title: 'Floor Price',
      value: '0.45',
      change: '-2.3%',
      isPositive: false,
      icon: (
        <Tooltip title="Info" arrow placement="top">
          <IconButton>
            <InfoOutlineIcon sx={{ color: '#777e90' }} />
          </IconButton>
        </Tooltip>
      ),
    },
    {
      title: 'Items Listed',
      value: '1,234',
      change: '+5.2%',
      isPositive: true,
      icon: (
        <Tooltip title="Info" arrow placement="top">
          <IconButton>
            <InfoOutlineIcon sx={{ color: '#777e90' }} />
          </IconButton>
        </Tooltip>
      ),
    },
    {
      title: 'Owners',
      value: '567',
      change: '+8.1%',
      isPositive: true,
      icon: (
        <Tooltip title="Info" arrow placement="top">
          <IconButton>
            <InfoOutlineIcon sx={{ color: '#777e90' }} />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        // minHeight: '100vh',
        backgroundColor: 'background.default',
        position: 'relative',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          //   paddingInline: '80px',
          width: '100%',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            color: theme.palette.text.primary,
          }}
        >
          Collection Overview
        </Typography>
        <CollectionHero
          image="https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAA79K674Y2b4%252F48FTC1v%252BJ4rEwpjEK3D0qjUdzqyInvnSJFH5IaIgEk7pF0NEn6WqgSgbCdGL27rkoWAYjQhV2aH%252F8nBd9uVO2ymg2znWvbXJa379tKUzlm4lW4%252BFvX3Lkybz6boYKjCsVC4GCdwAv31e%252BCSMdhCyyVeL2Un9dcLOA78C2fikkVa0IrHu8NT7ZLNEHOGf3f%252F6Glrmk5hPMQCESBDZgtca2GNwcP7lvjzDJXMS9jKgLqNBZFUSYsb2g%253D%253D%3Fwidth%3D250&w=640&q=75"
          title="Bored Ape Yacht Club"
          subtitle="BAYC"
          description="The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants acces, a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants acces."
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
