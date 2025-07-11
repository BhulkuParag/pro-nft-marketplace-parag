import { useState } from 'react';
import Info from '../../../Components/info/Info';
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { BarChart } from '@tremor/react';
import { Box, Typography } from '@mui/material';
import DropDown from '../../../@ui-component/Comman/DropDown';

interface DropdownOption {
  label: string;
}

const dropdownOptions = [
  { label: '5m', value: '5m' },
  { label: '30m', value: '30m' },
  { label: '1hr', value: '1hr' },
  { label: '6hr', value: '6hr' },
  { label: '24hr', value: '24hr' },
  { label: '7d', value: '7d' },
  { label: '30d', value: '30d' },
];

interface BarData {
  name: string;
  yData: number;
}

interface BarDataItem {
  title: string;
  barData: BarData[];
}

const DataArr: BarDataItem[] = [
  {
    title: 'Number of web3 products owned',
    barData: [
      {
        name: '1',
        yData: 10,
      },
      {
        name: '2-5',
        yData: 15,
      },
      {
        name: '5-10',
        yData: 5,
      },
      {
        name: '10-20',
        yData: 20,
      },
      {
        name: '20+',
        yData: 85,
      },
    ],
  },
  {
    title: 'Wallet Age',
    barData: [
      {
        name: '1',
        yData: 10,
      },
      {
        name: '2-5',
        yData: 15,
      },
      {
        name: '5-10',
        yData: 5,
      },
      {
        name: '10-20',
        yData: 20,
      },
      {
        name: '20+',
        yData: 85,
      },
    ],
  },
  {
    title: 'Time since last purchase',
    barData: [
      {
        name: '1',
        yData: 10,
      },
      {
        name: '2-5',
        yData: 30,
      },
      {
        name: '5-10',
        yData: 50,
      },
      {
        name: '10-20',
        yData: 25,
      },
      {
        name: '20+',
        yData: 15,
      },
    ],
  },
];

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

const BarChartSection = () => {
  const [selectedValue, setSelectedValue] = useState(dropdownOptions[0]?.label);

  const handleOnChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {DataArr?.map((item) => (
        <Box
          component={'div'}
          key={item.title}
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: { xs: '12px', sm: '24px' },
            borderRadius: 3,
            flexGrow: 1,
            gap: '20px',
            backgroundColor: 'secondary.main',
          }}
        >
          <div className="flex justify-between w-full gap-5">
            <div className="flex items-center gap-2">
              <Typography
                fontWeight={600}
                sx={{
                  color: 'text.primary',
                }}
              >
                {item?.title}
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
            />
          </div>
          <BarChart
            data={item?.barData}
            index="name"
            categories={['yData']}
            colors={['#4836FF']}
            valueFormatter={dataFormatter}
            yAxisWidth={30}
            onValueChange={(v) => console.log(v)}
            showAnimation={true}
            showLegend={false}
            showTooltip
            style={{
              width: '100%',
              height: '200px',
              margin: '0 auto',
            }}
          />
        </Box>
      ))}
    </div>
  );
};

export default BarChartSection;
