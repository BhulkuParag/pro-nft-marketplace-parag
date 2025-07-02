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
    <Box
      component="div"
      sx={{
        width: '100%',
        display: {
          xs: 'flex',
          sm: 'flex',
          md: 'grid',
          lg: 'grid',
        },
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
        paddingInline: 2,
        WebkitOverflowScrolling: 'touch',
        gap: { sm: 0.5, lg: 1.5 },
        gridTemplateColumns: {
          //   md: 'repeat(auto-fill, minmax(220px, 1fr))',
          lg: 'repeat(auto-fill, minmax(220px, 1fr))',
        },
      }}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          helpIcon={card.helpIcon}
          coinIcon={card.coinIcon}
          price={card.price}
          Subprice={card.Subprice}
          PNL={card.PNL}
          GrowthIcon={card.GrowthIcon}
        />
      ))}
    </Box>
  );
}

export default HomeCard;
