import React, { useState } from 'react';
import walletLight from '../../../assets/icons/walletWhite.svg';
import { BarChart } from '@tremor/react';
import Info from '../../../Components/info/Info';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { Box, Typography } from '@mui/material';
import ToggleButton from '../../../../@ui-component/Comman/ToggleButton';
import DateFilter from '../../../../@ui-component/Comman/DateFilter';
// import GraphFilter from "components/latest/HomeTabs/GraphFilter";

interface BarChartData {
  name: string;
  yData: number;
}

const barChartData: BarChartData[] = [
  {
    name: '0-0.1',
    yData: 55,
  },
  {
    name: '0.1-0.2',
    yData: 50,
  },
  {
    name: '0.2-0.3',
    yData: 30,
  },
  {
    name: '0.3-0.4',
    yData: 40,
  },
  {
    name: '0.4-0.5',
    yData: 25,
  },
  {
    name: '0.5-1',
    yData: 39,
  },
  {
    name: '1-2',
    yData: 10,
  },
  {
    name: '2-3',
    yData: 29,
  },
  {
    name: '3-4',
    yData: 32,
  },
  {
    name: '4-5',
    yData: 47,
  },
  {
    name: '5-6',
    yData: 52,
  },
  {
    name: '6+',
    yData: 37,
  },
];

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

interface DataItem {
  name: string;
  value: number;
}

const buyingData: DataItem[] = [
  { name: 'Group A', value: 200 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 500 },
];
const COLORS = ['#A49BFF33', '#A49BFF', '#4836FF'];

interface graphData {
  name: string;
  color: string;
  value: string;
}

const holderTraders: graphData[] = [
  {
    name: 'Average item Spend (ETH)',
    color: 'bg-primary-light',
    value: '0.304',
  },
  {
    name: 'Activity Score',
    color: 'bg-primary',
    value: '0%',
  },
];

const PurchasingPower = () => {
  const [activePieIndex, setActivePieIndex] = useState<number>(0);
  const [range, setRange] = useState<string>('7d');
  const [selectedCrypto, setSelectedCrypto] = useState('ETH');
  // console.log("range =",range);
  // console.log(selectedCrypto , "selectedCrypto");

  const filter = [
    { label: 'All Time', value: 'All Time' },
    { label: '30d', value: '30d' },
    { label: '7d', value: '7d' },
    { label: '24h', value: '24h' },
    { label: '6h', value: '6h' },
    { label: '1h', value: '1h' },
    { label: '30m', value: '30m' },
    { label: '5m', value: '5m' },
    { label: '1m', value: '1m' },
  ];
  const cryptoTabsData = [
    { label: 'ETH', value: 'ETH' },
    { label: 'USD', value: 'USD' },
  ];

  const handleOnChange = (_: React.SyntheticEvent, value: string) => {
    setSelectedCrypto(value);
  };
  const handleOnChangeForMobile = (value: string) => {
    setSelectedCrypto(value);
  };
  const onPieEnter = (_: any, index: number) => {
    setActivePieIndex(index);
  };

  const handleDateFilterOnChange = (value: string) => {
    setRange(value);
  };

  const renderActivePieShape = (props: any) => {
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          fill="white"
          className="text-xl font-semibold"
        >
          {/* {payload?.value} */}
          <tspan
            x={cx}
            textAnchor="middle"
            className="text-xl font-semibold fill-black dark:fill-white"
          >
            {payload?.value}
          </tspan>
          <tspan x={cx} dy={25} className="fill-grey text-sm">
            ETH
          </tspan>
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          // innerRadius={outerRadius + 6}
          // outerRadius={outerRadius + 10}
          fill={fill}
        />
        {/* <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`(Rate ${(percent * 100).toFixed(2)}%)`}
                </text> */}
      </g>
    );
  };

  return (
    <Box
      component={'div'}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        gap: '20px',
        backgroundColor: 'secondary.main',
        padding: {
          xs: '12px',
          md: '24px',
        },
      }}
    >
      {/* Heading section */}
      <div className="flex flex-col lg:flex-row w-full relative gap-[10px] items-start justify-between">
        <div className="w-full flex flex-col">
          <div className="w-full flex gap-1 items-center">
            <Typography fontWeight={500} fontSize={20} color="text.primary">
              Purchasing power
            </Typography>
            <Info height={5} weight={5} isTooltip={true} />
          </div>
          <Typography
            fontSize={14}
            fontWeight={500}
            sx={{
              width: 'fit-content',
              marginTop: '8px',
              color: 'gray',
            }}
            // className="mt-2 w-auto md:w-max text-sm text-grey font-medium"
          >
            adidas Originals: Into the Metaverse (Phase 1) holders have this
            wallet balance & distribution
          </Typography>
        </div>

        <div className="flex w-full justify-end">
          <Box
            component={'div'}
            sx={{
              width: '200px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '4px',
              borderRadius: 10,
              backgroundColor: 'custom.wallet',
            }}
          >
            <Box
              component={'div'}
              sx={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'custom.ButtonPrimary',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={walletLight} height={24} width={24} alt="Wallet Icon" />
            </Box>
            <Typography
              fontWeight={500}
              fontSize={16}
              whiteSpace={'nowrap'}
              sx={{
                color: '#7367f0',
              }}
            >
              Wallet Tracker
            </Typography>
          </Box>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        {/* Pie Chart section */}
        <Box
          component={'div'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 3,
            padding: '20px',
            backgroundColor: 'custom.wallet',
          }}
        >
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-1 items-center">
              <Typography
                fontWeight={600}
                fontSize={18}
                justifyContent={'space-between'}
                sx={{
                  color: 'text.primary',
                }}
              >
                Total buying power
              </Typography>
              <Info height={5} weight={5} isTooltip={true} />
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <PieChart width={200} height={200}>
              <Pie
                // activeIndex={activePieIndex}
                activeShape={renderActivePieShape}
                data={buyingData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={15}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPieEnter}
              >
                {buyingData?.map((entry, index) => (
                  <Cell
                    key={entry.value}
                    fill={COLORS[index % COLORS.length]}
                    stroke="transparent"
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </Box>

        {/* Bar Chart section */}
        <div className="flex w-full">
          <Box
            component={'div'}
            sx={{
              padding: '20px',
              backgroundColor: 'background.default',
              borderRadius: 3,
              width: '100%',
            }}
            //  className="p-5 rounded-xl w-full dark:bg-dark-black-light bg-white-light"
          >
            <div className="flex flex-col xl:flex-row flex-wrap gap-5 justify-between">
              <div className="flex flex-col md:flex-row gap-4">
                {holderTraders?.map((item, i) => (
                  <div
                    key={item.value}
                    className={`pr-[12px] flex flex-col gap-[2px] ${
                      i + 1 != holderTraders?.length
                        ? `md:border-r-[1px] md:border-black01`
                        : ``
                    }`}
                  >
                    <div className="flex items-center gap-[6px]">
                      <div
                        className={
                          'h-[10px] w-[10px] rounded-full' + item.color
                        }
                      ></div>
                      <span className="text-grey text-[14px]">{item.name}</span>
                    </div>
                    <div className="flex items-end gap-1">
                      <div className="flex items-center gap-[6px]">
                        <span className=" text-[14px] font-medium text-light-white-light dark:text-white">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-5 items-center justify-end">
                <ToggleButton
                  options={cryptoTabsData}
                  selectedValue={selectedCrypto}
                  handleOnChange={handleOnChange}
                  handleOnChangeForMobile={handleOnChangeForMobile}
                />
                <div className="flex items-center gap-3 xl:gap-5 w-full justify-end sm:w-auto">
                  <DateFilter
                    timeOptions={filter}
                    selectedTime={range}
                    handleChange={handleDateFilterOnChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-10">
              <BarChart
                data={barChartData}
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
            </div>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default PurchasingPower;
