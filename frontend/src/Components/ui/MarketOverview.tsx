import { useMemo, useState } from 'react';
// import { Box } from '@mui/material';
import { ProgressCircle } from '@tremor/react';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import DropDown from '../../../@ui-component/Comman/DropDown';

const ProgressBar = () => {
  const [selectedValue, setSelectedValue] = useState<'Traders' | 'WashTraders'>(
    'Traders'
  );
  const theme = useTheme();
  const ismobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [selectedTime, setSelectedTime] = useState('24h');

  const [data, setData] = useState<any>([]);

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
      color: '#A49BFF',
      currency: '',
    },
    {
      title: 'Sellers',
      value: data?.traders_sellers?.value,
      subValue: data?.traders_sellers_change?.value,
      color: '#10DAB6',
      currency: '',
    },
    {
      title: 'MarketCap',
      value: data?.marketcap?.value,
      subValue: data?.marketcap_change?.value,
      color: '#FE749B',
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
      color: '#A49BFF',
      currency: '',
    },
    {
      title: 'Washtrade Volume',
      value: data?.washtrade_volume?.value,
      subValue: data?.washtrade_volume_change?.value,
      color: '#10DAB6',
      currency: '',
    },
    {
      title: 'Washtrade Wallets',
      value: data?.washtrade_wallets?.value,
      subValue: data?.washtrade_wallets_change?.value,
      color: '#FE749B',
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
    <div className="w-full rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-8">
      {/* Map over the data and render a detail card for each item */}

      <Box sx={{}}>
        {/* dropdown */}
        <Box sx={{ width: '100%' }}>
          <DropDown
            minWidth={93.84}
            options={dropdownOptions}
            value={selectedValue}
            disableTouchRipple
            disableMenuItemTouchRipple
            onChange={(v) => setSelectedValue(v as 'Traders' | 'WashTraders')}
          />
        </Box>
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
    </div>
  );
};

export default ProgressBar;
