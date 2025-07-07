import { useState } from 'react';
import { AreaChart } from '@tremor/react';
import Info from '../../../Components/info/Info';
import DateFilter from '../../../../@ui-component/Comman/DateFilter';
// import GraphFilter from "components/latest/HomeTabs/GraphFilter";

const chartData = [
  {
    date: 'Oct 03',
    Running: 4.5,
  },
  {
    date: 'Oct 04',
    Running: 4.9,
  },
  {
    date: 'Oct 05',
    Running: 5,
  },
  {
    date: 'Oct 06',
    Running: 4.6,
  },
  {
    date: 'Oct 07',
    Running: 5.1,
  },
  {
    date: 'Oct 08',
    Running: 4.7,
  },
  {
    date: 'Oct 09',
    Running: 5,
  },
];

const BlueChip = () => {
  const [range, setRange] = useState<string>('7d');
  const [selectedCrypto, setSelectedCrypto] = useState('usd');
  // console.log("range =",range);
  // console.log(selectedCrypto , "selectedCrypto");
  const cryptoTabsData = [{ tabName: 'usd' }, { tabName: 'eth' }];
  const filter = [
    { label: '15m', value: '15m' },
    { label: '30m', value: '30m' },
    { label: '24h', value: '24h' },
    { label: '7d', value: '7d' },
    { label: '30d', value: '30d' },
    { label: '90d', value: '90d' },
    { label: 'All Time', value: 'All Time' },
  ];

  const handleDateFilterChange = (value: string) => {
    setRange(value);
  };

  return (
    <div className="p-3 md:p-6 rounded-xl border dark:border-dark-black-01 border-light-black-01 bg-white dark:bg-dark-secondary-dark">
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        <div className="flex items-center gap-2">
          <span className="font-medium text-xl text-black dark:text-white">
            Blue Chip Index
          </span>
          <Info height={5} weight={5} isTooltip={true} />
        </div>
        <div className="flex gap-5">
          {/* <GraphFilter
            categories={cryptoTabsData}
            shouldApplyBorder
            selectedTabRoundedStyle={false}
            onTabChange={(option: any) => {
              setSelectedCrypto(option.tabName);
            }}
            placeholder={cryptoTabsData[0]?.tabName}
          /> */}

          <div className="flex justify-end">
            <DateFilter
              timeOptions={filter}
              selectedTime={range}
              handleChange={handleDateFilterChange}
            />
          </div>
        </div>
      </div>
      <AreaChart
        className="mt-5 h-60"
        data={chartData}
        index="date"
        categories={['Running']}
        colors={['#A49BFF']}
        yAxisWidth={30}
        minValue={4.5}
        maxValue={5.2}
        showLegend={false}
      />
    </div>
  );
};

export default BlueChip;
