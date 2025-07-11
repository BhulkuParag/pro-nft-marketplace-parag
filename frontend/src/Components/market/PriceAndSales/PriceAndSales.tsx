import { useState } from 'react';
// import GraphFilter from "components/latest/HomeTabs/GraphFilter";
// import Switch from "components/latest/switch/Switch";
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import EthIcon from '../../../Components/Icon/crypto-icon/EthIcon';
import Info from '../../../Components/info/Info';
import { Box, Typography } from '@mui/material';
import DateFilter from '../../../@ui-component/Comman/DateFilter';
import OnOffSwitch from '../../../@ui-component/Comman/Switch';

interface ChartData {
  name: string;
  LowPrice: number;
  HighPrice: number;
  AvgPrice: number;
}

const chartData: ChartData[] = [
  {
    name: 'Sept 24',
    LowPrice: 0,
    HighPrice: -20,
    AvgPrice: 60,
  },
  {
    name: 'Sept 25',
    LowPrice: -20,
    HighPrice: 20,
    AvgPrice: 20,
  },
  {
    name: 'Sept 26',
    LowPrice: 0,
    HighPrice: -20,
    AvgPrice: 60,
  },
  {
    name: 'Sept 27',
    LowPrice: 20,
    HighPrice: -60,
    AvgPrice: 100,
  },
  {
    name: 'Sept 28',
    LowPrice: 60,
    HighPrice: 20,
    AvgPrice: 0,
  },
  {
    name: 'Sept 29',
    LowPrice: 20,
    HighPrice: 60,
    AvgPrice: -20,
  },
  {
    name: 'Sept 30',
    LowPrice: 0,
    HighPrice: 20,
    AvgPrice: -100,
  },
];

interface GraphData {
  name: string;
  color: string;
  value: string;
  change: string;
}

const holderTraders: GraphData[] = [
  {
    name: 'High Price',
    color: 'bg-[#6B5FE8]',
    value: '45.49',
    change: '-46.15%',
  },
  {
    name: 'Avg Price(All)',
    color: 'bg-[#4130EA]',
    value: '44.03',
    change: '-46.15%',
  },
  {
    name: 'Low Price',
    color: 'bg-[#D2CDFF]',
    value: '352.27',
    change: '-46.15%',
  },
];

const PriceAndSales = () => {
  const [outliers, setOutliers] = useState(false);
  const filter = [
    { label: 'All Time', value: 'All Time' },
    { label: '12mo', value: '12mo' },
    { label: '3mo', value: '3mo' },
    { label: '30d', value: '30d' },
    { label: '7d', value: '7d' },
    { label: '24h', value: '24h' },
  ];
  const [range, setRange] = useState<string>('7d');

  const handleChangeSwitch = () => {
    setOutliers(!outliers);
  };

  return (
    <Box
      sx={{
        padding: { xs: '12px', md: '24px' },
        borderRadius: 3,
        backgroundColor: 'secondary.main',
      }}
    >
      <div className="flex items-center gap-2">
        <Typography
          fontWeight={500}
          fontSize={20}
          sx={{
            color: 'text.primary',
          }}
        >
          Price & Sales
        </Typography>
        <Info iconType="questionMark" height={5} weight={5} isTooltip={true} />
      </div>
      <Typography
        fontSize={12}
        sx={{
          color: 'custom.grey01',
        }}
      >
        846.844 ETH
      </Typography>
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        <div className="flex gap-4 my-3 flex-wrap">
          {holderTraders?.map((item) => {
            return (
              <div
                key={item.value}
                className="border-r-[1px] border-black01 pr-[12px] flex flex-col gap-[2px] last:border-none"
              >
                <div className="flex items-center gap-[6px]">
                  <div
                    className={`h-[10px] w-[10px] rounded-full ${item?.color}`}
                  ></div>
                  <span className="text-gray-500 text-[14px]">{item?.name}</span>
                </div>
                <div className="flex items-end gap-1">
                  <div className="flex items-center gap-[6px]">
                    <Typography
                      fontWeight={500}
                      fontSize={14}
                      sx={{
                        color: 'text.primary',
                      }}
                    >
                      {item?.value}
                    </Typography>
                    <EthIcon className="fill-[#777E90] w-3 h-3" />
                  </div>
                  <span className="text-[10px] text-red-400">
                    {item?.change}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-2">
            <OnOffSwitch
              checked={outliers}
              handleOnChange={handleChangeSwitch}
            />
            <Typography
              fontSize={14}
              sx={{
                color: 'custom.grey01',
              }}
            >
              Outliers
            </Typography>
          </div>
          <div className="flex items-center gap-3 xl:gap-5 w-full justify-end sm:w-auto">
            <DateFilter
              timeOptions={filter}
              selectedTime={range}
              handleChange={setRange}
            />
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={chartData}
          margin={{
            top: 30,
            right: 10,
            left: -30,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="0 0"
            className="stroke-1 stroke-tremor-border dark:stroke-dark-tremor-border"
          />
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey="name"
            fontSize={12}
            className="stroke-1 stroke-tremor-border dark:stroke-dark-tremor-border"
            // scale="band"
            // dx={100}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            fontSize={12}
            //   ticks={customTicks}
          />
          <Tooltip />
          <Area
            dataKey="AvgPrice"
            fill="#4836FF"
            fillOpacity={1}
            stroke="#4836FF"
          />
          <Line
            dataKey="HighPrice"
            fill="#A49BFF"
            stroke="#A49BFF"
            strokeWidth={1.5}
          />
          <Line
            dataKey="LowPrice"
            fill="#D2CDFF"
            stroke="#D2CDFF"
            strokeDasharray="5 5"
            strokeWidth={1.5}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PriceAndSales;
