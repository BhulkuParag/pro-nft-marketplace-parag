import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { FaEthereum } from 'react-icons/fa';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box } from '@mui/material';
import Card from '../../../@ui-component/Comman/Card';

const cards = [
  {
    id: 1,
    title: 'NFT Mint',
    helpIcon: <HelpOutlineIcon />,
    coinIcon: <FaEthereum />,
    price: '$138,151,460',
    Subprice: '$138,151,460',
    PNL: '-4.16% (24h)',
    GrowthIcon: <TrendingUpIcon />,
  },

  {
    id: 2,
    title: 'NFT Voulme',
    helpIcon: <HelpOutlineIcon />,
    coinIcon: <FaEthereum />,
    price: '$252,960,998',
    Subprice: '$2,135,597.2',
    PNL: '-33.22% (24h)',
    GrowthIcon: <TrendingUpIcon />,
  },

  {
    id: 3,
    title: 'NFT Sale',
    helpIcon: <HelpOutlineIcon />,
    coinIcon: <FaEthereum />,
    price: '$4,350,950',
    Subprice: '6030',
    PNL: '23.31% (24h)',
    GrowthIcon: <TrendingUpIcon />,
  },
  {
    id: 4,
    title: 'Sale Volume',
    helpIcon: <HelpOutlineIcon />,
    coinIcon: <FaEthereum />,
    price: '$340,430,241  ',
    Subprice: '40,445',
    PNL: '126.85% (24h)',
    GrowthIcon: <TrendingUpIcon />,
  },
  {
    id: 5,
    title: 'Total Assets',
    helpIcon: <HelpOutlineIcon />,
    coinIcon: <FaEthereum />,
    price: '$128,294,750',
    Subprice: '25,013',
    PNL: '74.97% (24h)',
    GrowthIcon: <TrendingUpIcon />,
  },
  {
    id: 6,
    title: 'Total Volume',
    helpIcon: <HelpOutlineIcon />,
    coinIcon: <FaEthereum />,
    price: '$58,822,919',
    Subprice: '6587',
    PNL: '-24.16% (24h)',
    GrowthIcon: <TrendingUpIcon />,
  },
];

function HomeCard() {
  return (
    <Box component="div" sx={{ paddingInline: { xs: 2, lg: 2, xl: 3 } }}>
      <Box
        component="div"
        sx={{
          width: '100%',
          display: 'flex',
          overflowX: {
            xs: 'auto',
            sm: 'auto',
            md: 'unset',
          },
          scrollSnapType: {
            xs: 'x mandatory',
            sm: 'x mandatory',
            md: 'none',
          },
          // justifyContent: 'space-between',
          WebkitOverflowScrolling: 'touch',
          gap: '1rem',
        }}
      >
        {cards.map((card) => (
          <Box
            component="div"
            key={card.id}
            sx={{
              width: { lg: '100%', xl: '100%' },
              minWidth: { xs: 220, sm: 220 }, // <-- Wider minWidth for mobile
              // maxWidth: { xs: 260, sm: 260 },
              // flex: { xs: '0 0 auto', sm: '0 0 auto', md: '1 1 0%' },
              scrollSnapAlign: { xs: 'start', sm: 'start', md: 'none' },
              borderRadius: '0.75rem',
              backgroundColor: 'palette.secondary',
            }}
          >
            <Card
              id={card.id}
              title={card.title}
              helpIcon={card.helpIcon}
              coinIcon={card.coinIcon}
              price={card.price}
              Subprice={card.Subprice}
              PNL={card.PNL}
              GrowthIcon={card.GrowthIcon}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default HomeCard;
