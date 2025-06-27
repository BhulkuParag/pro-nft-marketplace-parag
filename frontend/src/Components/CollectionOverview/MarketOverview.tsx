import { useMemo, useState } from 'react';
// import { Box } from '@mui/material';
import { ProgressCircle } from '@tremor/react';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import DropDown from '../../../@ui-component/Comman/DropDown';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';



const ProgressBar = () => {
  const [selectedValue, setSelectedValue] = useState<'Traders' | 'WashTraders'>(
    'Traders'
  );
  const theme = useTheme();
  const ismobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [selectedTime, setSelectedTime] = useState('24h');

  const [data, setData] = useState<any>({
    traders: { value: 10 },
    traders_change: { value: 0.429 },
    traders_buyers: { value: 5 },
    traders_buyers_change: { value: 0.123 },
    traders_sellers: { value: 5 },
    traders_sellers_change: { value: 0.321 },
    marketcap: { value: 1000 },
    marketcap_change: { value: 1.234 },
    washtrade_assets: { value: 2 },
    washtrade_assets_change: { value: 0.111 },
    washtrade_suspect_sales: { value: 3 },
    washtrade_suspect_sales_change: { value: 0.222 },
    washtrade_volume: { value: 4 },
    washtrade_volume_change: { value: 0.333 },
    washtrade_wallets: { value: 5 },
    washtrade_wallets_change: { value: 0.444 },
  });

  const TradersCardsData = [
    {
      title: 'Traders',
      value: data?.traders?.value,
      subValue: data?.traders_change?.value,
      color: '#4836FF',
      currency: '',
    },
    {
      title: 'Buyers',
      value: data?.traders_buyers?.value,
      subValue: data?.traders_buyers_change?.value,
      //    color: '#A49BFF',
      color: '#4836FF',
      currency: '',
    },
    {
      title: 'Sellers',
      value: data?.traders_sellers?.value,
      subValue: data?.traders_sellers_change?.value,
      //      color: '#10DAB6',
      color: '#4836FF',

      currency: '',
    },
    {
      title: 'MarketCap',
      value: data?.marketcap?.value,
      subValue: data?.marketcap_change?.value,
      // color: '#FE749B',
      color: '#4836FF',

      currency: 'USD',
    },
  ];
  const WashtradeCardsData = [
    {
      title: 'Washtrade Assets',
      value: data?.washtrade_assets?.value,
      subValue: data?.washtrade_assets_change?.value,
      color: '#4836FF',
      currency: '',
    },
    {
      title: 'Washtrade Suspect Sales',
      value: data?.washtrade_suspect_sales?.value,
      subValue: data?.washtrade_suspect_sales_change?.value,
      // color: '#A49BFF',
      color: '#4836FF',

      currency: '',
    },
    {
      title: 'Washtrade Volume',
      value: data?.washtrade_volume?.value,
      subValue: data?.washtrade_volume_change?.value,
      // color: '#10DAB6',
      color: '#4836FF',
      currency: '',
    },
    {
      title: 'Washtrade Wallets',
      value: data?.washtrade_wallets?.value,
      subValue: data?.washtrade_wallets_change?.value,
      // color: '#FE749B',
      color: '#4836FF',

      currency: '',
    },
  ];

  const dropdownOptions = useMemo(() => {
    return [
      { label: 'Traders', value: 'Traders' },
      { label: 'WashTraders', value: 'WashTraders ' },
    ];
  }, []);

  const timeOptions = useMemo(() => {
    return [
      { label: '24h', value: '24h' },
      { label: '7d', value: '7d' },
      { label: '30d', value: '30d' },
      { label: '90d', value: '90d' },
    ];
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: 5,
        backgroundColor: 'secondary.main',
        padding: '24px',
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {/* Map over the data and render a detail card for each item */}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: 'text.primary',
            }}
          >
            {selectedValue}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 3 }}>
          {/* dropdown */}
          <Box sx={{}}>
            <DropDown
              minWidth={93.84}
              options={dropdownOptions}
              value={selectedValue}
              disableTouchRipple
              disableMenuItemTouchRipple
              onChange={(v) => setSelectedValue(v as 'Traders' | 'WashTraders')}
            />
          </Box>
          <Divider
            flexItem
            orientation="vertical"
            sx={{
              height: '36px',
              // mt: 1,
              mr: -1.5,
              borderColor: 'divider',
              display: ismobile ? 'none' : 'block',
            }}
          />
          {/* days */}
          {ismobile ? (
            <DropDown
              options={timeOptions}
              value={selectedTime}
              onChange={setSelectedTime}
              disableMenuItemTouchRipple
              disableTouchRipple
              minWidth={64}
              maxHeight={'30vh'}
              padding="6px 10px"
            />
          ) : (
            <Box display="flex">
              {timeOptions.map((time) => (
                <Button
                  key={time.value}
                  disableTouchRipple
                  disableElevation
                  variant={selectedTime === time.value ? 'contained' : 'text'}
                  size="small"
                  onClick={() => setSelectedTime(time.value)}
                  sx={{
                    minWidth: '35.52px',
                    height: '36px',
                    padding: '6px 8px',
                    color:
                      selectedTime === time.value
                        ? 'text.secondary'
                        : 'custom.lightGrey',
                    textTransform: 'none',
                    fontSize: 16,
                    fontWeight: 400,
                    borderRadius: 2,
                    transition: 'none',
                    backgroundColor:
                      selectedTime === time.value
                        ? 'custom.filterBthBg'
                        : 'transparent',
                    '&:hover': {
                      backgroundColor:
                        selectedTime === time.value
                          ? 'custom.filterBthBg'
                          : 'transparent',
                      color: 'text.secondary',
                    },
                  }}
                >
                  {time.label}
                </Button>
              ))}
            </Box>
          )}
        </Box>
      </Box>
      <div className="w-full rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-8">
        {(selectedValue === 'Traders'
          ? TradersCardsData
          : WashtradeCardsData
        ).map((item, index) => (
          <Box
            key={index}
            // className="flex flex-col bg-[#18181B] rounded-2xl p-6 min-h-[265px] shadow-md relative"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '1rem',
              gap: 2,
              p: 4,
              minHeight: '265px',
              position: 'relative',
              backgroundColor: 'background.default',
            }}
          >
            <div>
              <div className="flex items-center justify-between ">
                <span className="text-white text-lg font-medium">
                  {item.title}
                </span>
                <span className="cursor-pointer">
                  <IconButton>
                    <InfoOutlineIcon />
                  </IconButton>
                </span>
              </div>

              <div className="text-white text-2xl font-bold ">
                {item.value ?? '$'}
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <ProgressCircle
                value={item.subValue ?? 0}
                color={item?.color}
                size="xl"
                strokeWidth={17}
                className="circleChart"
              >
                <div className="flex flex-col justify-center items-center">
                  <span className="text-[22px] font-semibold text-white">
                    {item.subValue !== undefined && item.subValue !== null
                      ? `${Number(item.subValue).toFixed(3)}%`
                      : '-'}
                  </span>
                </div>
              </ProgressCircle>

            </div>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default ProgressBar;
