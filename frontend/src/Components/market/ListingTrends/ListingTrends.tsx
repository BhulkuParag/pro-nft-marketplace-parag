import { useState } from 'react';
import { LineChart } from '@tremor/react';
import Info from '../../../Components/info/Info';
import { Box, Typography } from '@mui/material';
import DropDown from '../../../@ui-component/Comman/DropDown';

const LineChartData = [
  {
    date: '15:00',
    Listing: 250,
    'Listings at Floor(~15%)': 130,
  },
  {
    date: '15:10',
    Listing: 80,
    'Listings at Floor(~15%)': 90,
  },
  {
    date: '15:20',
    Listing: 40,
    'Listings at Floor(~15%)': 150,
  },
  {
    date: '15:30',
    Listing: 150,
    'Listings at Floor(~15%)': 200,
  },
  {
    date: '15:40',
    Listing: 180,
    'Listings at Floor(~15%)': 180,
  },
  {
    date: '15:50',
    Listing: 220,
    'Listings at Floor(~15%)': 130,
  },
  {
    date: '16:00',
    Listing: 250,
    'Listings at Floor(~15%)': 100,
  },
];

const dropdownOptions = [
  { label: '15m', value: '15m' },
  { label: '30m', value: '30m' },
  { label: '24h', value: '24h' },
  { label: '7d', value: '7d' },
  { label: '30d', value: '30d' },
  { label: '90d', value: '90d' },
  { label: 'All Time', value: 'All Time' },
];

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

const ListingTrends = () => {
  const [selectedValue, setSelectedValue] = useState<string>(
    dropdownOptions[0]?.label
  );

  const handleOnChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Box
      component={'div'}
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'secondary.main',
        padding: '20px',
      }}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Typography
            fontSize={20}
            fontWeight={500}
            sx={{
              color: 'custom.grey01',
            }}
          >
            Listing Trends
          </Typography>
          <Info
            iconType="questionMark"
            height={5}
            weight={5}
            isTooltip={true}
          />
        </div>
        <DropDown
          options={dropdownOptions}
          value={selectedValue}
          onChange={handleOnChange}
          disableMenuItemTouchRipple
          disableTouchRipple
          minWidth={64}
        />
      </div>
      <LineChart
        className="h-80 mt-5 text-gray-500"
        data={LineChartData}
        index="date"
        categories={['Listing', 'Listings at Floor(~15%)']}
        colors={['#A49BFF', '#4836FF']}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        onValueChange={(v) => console.log(v)}
      />
    </Box>
  );
};

export default ListingTrends;
