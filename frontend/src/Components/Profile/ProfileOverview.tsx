import { Box, IconButton, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import DateFilter from '../../../@ui-component/Comman/DateFilter';
import { DatePicker } from '@tremor/react';
import axios from 'axios';
import { useActiveAccount } from 'thirdweb/react';
const BITCRUNCH_API_KEY = '';

function ProfileCard() {
  const [range, setRange] = useState<string>('24h');
  const filter = [
    { label: '24h', value: '24h' },
    { label: '7d', value: '7d' },
    { label: '30d', value: '30d' },
    { label: '90d', value: '90d' },
    { label: 'All Time', value: 'All Time' },
  ];

  const Cards = useMemo(
    () => [
      {
        id: 1,
        title: 'Collection',
        subCards: [
          {
            id: 1,
            label: 'Collection Count',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
        ],
      },
      {
        id: 2,
        title: 'Portfolio',
        subCards: [
          {
            id: 1,
            label: 'Portfolio Value',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
          {
            id: 2,
            label: 'Realized Profit',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
          {
            id: 3,
            label: 'Unrealized Profit',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
          {
            id: 4,
            label: 'Estimated Portfolio Value',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
        ],
      },
      {
        id: 3,
        title: 'Volume',
        subCards: [
          {
            id: 1,
            label: 'Volume',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
          {
            id: 2,
            label: 'Sales',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
          {
            id: 3,
            label: 'Buy Volume',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
          {
            id: 4,
            label: 'Sell Volume',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
        ],
      },
      {
        id: 4,
        title: 'TradersTransactions',
        subCards: [
          {
            id: 1,
            label: 'Traders',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
          {
            id: 2,
            label: 'Traders Buyers',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
          {
            id: 3,
            label: 'Traders Sellers',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
        ],
      },
      {
        id: 5,
        title: 'TradersTransactions',
        subCards: [
          {
            id: 1,
            label: 'Transactions',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
          {
            id: 2,
            label: 'Transactions Mint',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
          {
            id: 3,
            label: 'Transactions Burn',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
          {
            id: 4,
            label: 'Transactions Transfer',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
          {
            id: 5,
            label: 'Transactions Buy',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
          {
            id: 6,
            label: 'Transactions Sell',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
          {
            id: 7,
            label: 'Transfers',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
        ],
      },
      {
        id: 6,
        title: 'WashTrades',
        subCards: [
          {
            id: 1,
            label: 'Washtrade Suspect Sales',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
          {
            id: 2,
            label: 'Washtrade Volume',
            value: 0,
            icon: (
              <InfoOutlineIcon
                sx={{
                  width: '20px',
                  height: '20px',
                }}
              />
            ),
          },
        ],
      },
    ],
    []
  );

  const handleDateFilterChange = (value: string) => {
    setRange(value);
  };
    const { address: userAddress } = useActiveAccount() || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userAddress) {
          const response = await axios.get(
            `http://localhost:8085/api/unleash/wallet/${userAddress}/metrics?blockchain=1&currency=eth&metrics=sales&metrics=traders&metrics=traders_buyers&metrics=traders_sellers&metrics=transactions&metrics=transactions_mint&metrics=transactions_burn&metrics=transactions_transfer&metrics=transactions_buy&metrics=transactions_sell&metrics=transfers&metrics=volume&metrics=washtrade_suspect_sales&metrics=washtrade_volume&metrics=buy_volume&metrics=sell_volume&metrics=portfolio_value&metrics=collection_count&metrics=realized_profit&metrics=unrealized_profit&metrics=estimated_portfolio_value&time_range=all&include_washtrade=true`,
            { headers: { 'x-api-key': BITCRUNCH_API_KEY } }
          );
          // setData(response?.data?.metric_values);
          console.log('API Response:', response?.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userAddress]);

  return (
    <Box
      component="div"
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <DateFilter
          timeOptions={filter}
          handleChange={handleDateFilterChange}
          selectedTime={range}
        />
      </Box>
      <Box
        component="div"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          paddingInline: 2,
        }}
      >
        {Cards.map((card) => (
          <Box
            key={card.id}
            sx={{
              backgroundColor: 'secondary.main',
              borderRadius: '16px',
              p: 2,
              paddingInline: 1,
              border: '1px solid ',
              borderColor: '#374151',
            }}
          >
            <Box
              sx={{
                display: 'grid',
                width: '100%',
                gridTemplateColumns: {
                  lg: 'repeat(4, minmax(0, 1fr))',
                  xs: 'repeat(2, minmax(0, 1fr))',
                },
                gap: 2,

                // bgcolor: 'red',
              }}
            >
              {card.subCards.map((subCard) => (
                <Box
                  key={subCard.id}
                  sx={{
                    width: '100%',
                    border: '1px solid #777e90',
                    borderRadius: '999px',
                    // background: 'rgba(24, 25, 28, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 2,
                    px: 3,
                    minHeight: 80,
                  }}
                >
                  <Box
                    component="div"
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#fff',
                        fontWeight: 500,
                        fontSize: '1.1rem',
                        textAlign: 'center',
                      }}
                    >
                      {subCard.label}
                    </Typography>

                    <IconButton
                      sx={{
                        color: 'custom.thirdText',
                        // fontSize: '2px',
                        padding: 1,
                      }}
                    >
                      {subCard.icon}
                    </IconButton>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '1.5rem',
                      mt: 1,
                    }}
                  >
                    {subCard.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ProfileCard;
