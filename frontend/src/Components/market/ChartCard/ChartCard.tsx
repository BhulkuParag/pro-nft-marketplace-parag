import React from 'react';
import { AreaChart, BarChart } from '@tremor/react';
import EthIcon from '../../../assets/icons/others/EthIcon';
import { Card } from '@mui/material';

interface ChartData {
  date: string;
  Running: number;
}

const AreaChartData: ChartData[] = [
  {
    date: 'Jan 23',
    Running: 10,
  },
  {
    date: 'Feb 23',
    Running: 125,
  },
  {
    date: 'Mar 23',
    Running: 80,
  },
  {
    date: 'Apr 23',
    Running: 240,
  },
  {
    date: 'May 23',
    Running: 123,
  },
  {
    date: 'Jun 23',
    Running: 50,
  },
  {
    date: 'Jul 23',
    Running: 200,
  },
  {
    date: 'Aug 23',
    Running: 102,
  },
  {
    date: 'Sept 23',
    Running: 124,
  },
  {
    date: 'Oct 23',
    Running: 224,
  },
  {
    date: 'Nov 23',
    Running: 174,
  },
  {
    date: 'Dec 23',
    Running: 90,
  },
];

interface Category {
  color: string;
  dataKey: string;
  value: number;
}

interface customTooltipCompProps {
  payload?: Category[];
  active?: boolean;
}

const customTooltipComp: React.FC<customTooltipCompProps> = (props) => {
  const { payload, active } = props;
  if (!active || !payload) return null;
  return (
    <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div
            className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
          />
          <div className="space-y-1">
            <p className="text-tremor-content">{category.dataKey}</p>
            <p className="font-medium text-tremor-content-emphasis">
              {category.value} bpm
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const BarChartData = [
  {
    date: 'Jan 23',
    'Distance Running': 167,
    'Road Cycling': 145,
    'Open Water Swimming': 135,
    'Hatha Yoga': 115,
    'Street Basketball': 150,
  },
  {
    date: 'Feb 23',
    'Distance Running': 125,
    'Road Cycling': 110,
    'Open Water Swimming': 155,
    'Hatha Yoga': 85,
    'Street Basketball': 180,
  },
  {
    date: 'Mar 23',
    'Distance Running': 156,
    'Road Cycling': 149,
    'Open Water Swimming': 145,
    'Hatha Yoga': 90,
    'Street Basketball': 130,
  },
  {
    date: 'Apr 23',
    'Distance Running': 165,
    'Road Cycling': 112,
    'Open Water Swimming': 125,
    'Hatha Yoga': 105,
    'Street Basketball': 170,
  },
  {
    date: 'May 23',
    'Distance Running': 153,
    'Road Cycling': 138,
    'Open Water Swimming': 165,
    'Hatha Yoga': 100,
    'Street Basketball': 110,
  },
  {
    date: 'Jun 23',
    'Distance Running': 124,
    'Road Cycling': 145,
    'Open Water Swimming': 175,
    'Hatha Yoga': 75,
    'Street Basketball': 140,
  },
];

const chartCardData = [
  {
    title: '24h Avg Price',
    value: 0.918,
    ethIcon: true,
    chart: (
      <BarChart
        className="h-28"
        data={BarChartData}
        index="date"
        categories={['Distance Running', 'Road Cycling']}
        colors={['#4836FF', '#A49BFF']}
        yAxisWidth={30}
        showXAxis={false}
        showYAxis={false}
        showGridLines={false}
        showLegend={false}
        showAnimation
      />
    ),
  },
  {
    title: '24h Sales',
    value: 5,
    change: '-37.5%',
    color: 'text-[#E30051] dark:text-[#E30051]',
    chart: (
      <AreaChart
        className="mt-4 h-28 stroke-[#4836FF]"
        data={AreaChartData}
        index="date"
        categories={['Running']}
        colors={['#4836FF']}
        yAxisWidth={30}
        showXAxis={false}
        showYAxis={false}
        showGridLines={false}
        showLegend={false}
        showAnimation
        // showTooltip={false}
        // customTooltip={customTooltipComp}
      />
    ),
  },
  {
    title: '24h Volume',
    value: 4.59,
    ethIcon: true,
    change: '-31.66%',
    color: 'text-[#E30051] dark:text-[#E30051]',
    chart: (
      <AreaChart
        className="mt-4 h-28 stroke-[#4836FF]"
        data={AreaChartData}
        index="date"
        categories={['Running']}
        colors={['#4836FF']}
        yAxisWidth={30}
        showXAxis={false}
        showYAxis={false}
        showGridLines={false}
        showLegend={false}
        showAnimation
        // showTooltip={false}
        // customTooltip={customTooltipComp}
      />
    ),
  },
  {
    title: 'Items Listed',
    value: 212,
    change: '2.39%',
    color: 'text-[#12CAB6]',
    chart: (
      <AreaChart
        className="mt-4 h-28 stroke-[#4836FF]"
        data={AreaChartData}
        index="date"
        categories={['Running']}
        colors={['#4836FF']}
        yAxisWidth={30}
        showXAxis={false}
        showYAxis={false}
        showGridLines={false}
        showLegend={false}
        showAnimation
        // showTooltip={false}
        // customTooltip={customTooltipComp}
      />
    ),
  },
];

const ChartCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {chartCardData?.map((data) => {
        return (
          <Card
            elevation={0}
            sx={{
              backgroundColor: 'secondary.main',
              border: '1px solid',
              borderColor: 'divider',
              padding: '8px',
              borderRadius: 2,
            }}
            key={data.value}
          >
            <span className="text-grey text-sm">{data?.title}</span>
            <div className="flex mt-2 justify-between items-center">
              <span className="flex gap-1 items-center">
                {data?.value}
                {data?.ethIcon && (
                  <EthIcon className="fill-[#777E90] w-4 h-4" />
                )}
              </span>
              <span className={`flex text-sm ${data?.color}`}>
                {data?.change}
              </span>
            </div>
            {data?.chart}
          </Card>
        );
      })}
    </div>
  );
};

export default ChartCard;
