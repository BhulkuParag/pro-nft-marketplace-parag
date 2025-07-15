import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { FaEthereum } from 'react-icons/fa';
//import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box } from '@mui/material';
import Card from '../../@ui-component/Comman/Card';
import { useCallback, useEffect, useMemo } from 'react';
import DateFilter from '../../@ui-component/Comman/DateFilter';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import {
  setCardTimeCompare,
  fetchHomeCardRequest,
  fetchTopSalesCardDataRequest,
} from '../../features/home/homeSlice';

function HomeCard() {
  // const [range, setRange] = useState<string>('1day');
  // const filter = [
  //   { label: '24h', value: '1day' },
  //   { label: '7d', value: '7d' },
  // ];
  const dispatch = useDispatch();
  const cardData = useSelector((state: RootState) => state.home.cardData);
  const cardTimeOptions = useSelector(
    (state: RootState) => state.home.cardTimeOptions
  );
  const cardTimeCompare: '1day' | '7day' = useSelector(
    (state: RootState) => state.home.cardTimeCompare
  );
  console.log('cardData', cardData);

  useEffect(() => {
    dispatch(fetchHomeCardRequest());
  }, [dispatch]);

  const handleDateFilterChange = useCallback(
    (value: string) => {
      console.log('value', value);
      dispatch(setCardTimeCompare(value as '1day' | '7day'));
      console.log(value);
    },
    [dispatch]
  );

  const cards = useMemo(
    () => [
      {
        id: 1,
        title: 'NFT Mint',
        helpIcon: <HelpOutlineIcon sx={{
              fontSize: 18,
            }}/>,
        coinIcon: <FaEthereum className="!text-gray-500" />,
        price: cardData[cardTimeCompare]?.mintCount,
        // Subprice: '$138,151,460',
        // PNL: '-4.16% (24h)',
        // GrowthIcon: <TrendingUpIcon />,
      },

      {
        id: 2,
        title: 'NFT Voulme',
        helpIcon: <HelpOutlineIcon sx={{
              fontSize: 18,
            }}/>,
        coinIcon: <FaEthereum className="!text-gray-500" />,
        price: cardData[cardTimeCompare]?.mintVolume,
        priceIcon: <FaEthereum className="!text-gray-500" />,
        // Subprice: '$2,135,597.2',
        // PNL: '-33.22% (24h)',
        // GrowthIcon: <TrendingUpIcon />,
      },

      {
        id: 3,
        title: 'NFT Sale',
        helpIcon: <HelpOutlineIcon sx={{
              fontSize: 18,
            }}/>,
        coinIcon: <FaEthereum className="!text-gray-500" />,
        price: cardData[cardTimeCompare]?.saleCount,
        // Subprice: '6030',
        // PNL: '23.31% (24h)',
        // GrowthIcon: <TrendingUpIcon />,
      },
      {
        id: 4,
        title: 'Sale Volume',
        helpIcon: <HelpOutlineIcon sx={{
              fontSize: 18,
            }}/>,
        coinIcon: <FaEthereum className="!text-gray-500" />,
        price: cardData[cardTimeCompare]?.saleVolume,
        priceIcon: <FaEthereum className="!text-gray-500" />,
        // Subprice: '40,445',
        // PNL: '126.85% (24h)',
        // GrowthIcon: <TrendingUpIcon />,
      },
      {
        id: 5,
        title: 'Total Assets',
        helpIcon: <HelpOutlineIcon sx={{
              fontSize: 18,
            }}/>,
        coinIcon: <FaEthereum className="!text-gray-500" />,
        price: cardData[cardTimeCompare]?.totalCount,
        // Subprice: '25,013',
        // PNL: '74.97% (24h)',
        // GrowthIcon: <TrendingUpIcon />,
      },
      {
        id: 6,
        title: 'Total Volume',
        helpIcon: (
          <HelpOutlineIcon
            sx={{
              fontSize: 18,
            }}
          />
        ),
        coinIcon: <FaEthereum className="!text-gray-500" />,
        price: cardData[cardTimeCompare]?.totalVolume,
        priceIcon: <FaEthereum className="!text-gray-500" />,
        // Subprice: '6587',
        // PNL: '-24.16% (24h)',
        // GrowthIcon: <TrendingUpIcon />,
      },
    ],
    [cardTimeCompare, dispatch, cardData]
  );

  useEffect(() => {
    dispatch(fetchTopSalesCardDataRequest());
  }, []);

  return (
    <Box component="div" sx={{ paddingInline: { xs: 2, lg: 2.5 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <DateFilter
          timeOptions={cardTimeOptions}
          handleChange={handleDateFilterChange}
          selectedTime={cardTimeCompare}
        />
      </Box>
      <Box
        component="div"
        sx={{
          width: '100%',
          display: 'flex',
          overflowX: {
            xs: 'auto',
            sm: 'auto',
            md: 'auto',
          },
          scrollSnapType: {
            xs: 'x mandatory',
            sm: 'x mandatory',
            md: 'none',
          },
          // justifyContent: 'space-between',
          WebkitOverflowScrolling: 'touch',
          gap: '1rem',
          pt: 0.5,
        }}
      >
        {cards.map((card: any) => (
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
              priceIcon={card.priceIcon}
              // Subprice={card.Subprice}
              // PNL={card.PNL}
              // GrowthIcon={card.GrowthIcon}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default HomeCard;
