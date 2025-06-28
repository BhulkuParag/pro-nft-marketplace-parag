import { useState } from 'react';
// import GraphFilter from "components/latest/HomeTabs/GraphFilter";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import EthIcon from '../../../../Components/Icon/crypto-icon/EthIcon';
// import Switch from "components/latest/switch/Switch";

interface ChartDataItem {
  name?: string;
  uv?: number;
  pv?: number;
}

const chartData: ChartDataItem[] = [
  {
    uv: 10,
    pv: 34,
  },
  {
    uv: 20,
    pv: 54,
  },
  {
    name: 'Jul 3',
    uv: 40,
    pv: 24,
  },
  {
    uv: 10,
    pv: 34,
  },
  {
    uv: 20,
    pv: 54,
  },
  {
    name: 'Jul 4',
    uv: 70,
    pv: 13,
  },
  {
    uv: 10,
    pv: 34,
  },
  {
    uv: 20,
    pv: 54,
  },
  {
    name: 'Jul 5',
    uv: 20,
    pv: 98,
  },
  {
    uv: 10,
    pv: 34,
  },
  {
    uv: 20,
    pv: 54,
  },
  {
    name: 'Jul 6',
    uv: 27,
    pv: 39,
  },
  {
    uv: 10,
    pv: 34,
  },
  {
    uv: 20,
    pv: 54,
  },
  {
    name: 'Jul 7',
    uv: 18,
    pv: 48,
  },
  {
    uv: 10,
    pv: 34,
  },
  {
    uv: 20,
    pv: 54,
  },
  {
    name: 'Jul 8',
    uv: 73,
    pv: 75,
  },
  {
    uv: 10,
    pv: 34,
  },
  {
    uv: 20,
    pv: 54,
  },
  {
    name: 'Jul 9',
    uv: 34,
    pv: 43,
  },
];

interface graphData {
  name: string;
  color: string;
  value: string;
  change: string;
}

const holderTraders: graphData[] = [
  {
    name: 'Market Cap',
    color: 'bg-primary-light',
    value: '2.67M',
    change: '-46.15%',
  },
  {
    name: 'Volume(7D)',
    color: 'bg-primary',
    value: '22.22K',
    change: '-46.15%',
  },
];

const Market = () => {
  const [outliers, setOutliers] = useState(false);
  const filter = [
    { tabName: 'All Time' },
    { tabName: '12mo' },
    { tabName: '3mo' },
    { tabName: '30d' },
    { tabName: '7d' },
    { tabName: '24h' },
  ];
  const cryptoTabsData = [{ tabName: 'ETH' }, { tabName: 'USD' }];
  const [range, setRange] = useState<string>('7d');
  const [selectedCrypto, setSelectedCrypto] = useState('eth');
  // console.log("range =",range);
  // console.log(selectedCrypto , "selectedCrypto");

  return (
    <div className="p-3">
      <span className="flex gap-3 items-center font-medium text-lg text-black dark:text-white">
        Market Cap & Volume
        <span className="text-xs text-grey">846.844 ETH</span>
      </span>
      <div className="flex flex-col md:flex-row gap-3 justify-between mt-1">
        <div className="flex gap-4 my-3">
          {holderTraders?.map((item, index) => {
            return (
              <div
                className="border-r-[1px] border-black01 pr-[12px] flex flex-col gap-[2px] last:border-none"
                key={index}
              >
                <div className="flex items-center gap-[6px]">
                  <div
                    className={'h-[10px] w-[10px] rounded-full' + item?.color}
                  ></div>
                  <span className="text-grey text-[14px]">{item?.name}</span>
                </div>
                <div className="flex items-end gap-1">
                  <div className="flex items-center gap-[6px]">
                    <span className=" text-[14px] font-medium text-light-white-light dark:text-white">
                      {item?.value}
                    </span>
                    <EthIcon className="fill-grey w-3 h-3" />
                  </div>
                  <span className="text-[10px] text-light-red dark:text-dark-red">
                    {item?.change}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-5 flex-wrap items-center">
          <div className="flex items-center gap-2">
            {/* <Switch
              enabled={outliers}
              onChange={(v: any) => setOutliers((e: any) => !e)}
              disabled={false}
              icon={""}
              large={false}
            /> */}
            <span className="text-grey text-sm">Outliers</span>
          </div>
          {/* <GraphFilter
            categories={cryptoTabsData}
            shouldApplyBorder
            selectedTabRoundedStyle={false}
            onTabChange={(option: any) => {
              setSelectedCrypto(option.tabName);
            }}
            placeholder={cryptoTabsData[0]?.tabName}
          /> */}
          <div className="flex items-center gap-3 xl:gap-5 w-full justify-end sm:w-auto">
            {/* <GraphFilter
              categories={filter}
              isLeftBorder
              selectedTabRoundedStyle={false}
              onTabChange={(option: any) => {
                setRange(
                  option?.tabName === "All Time" ? "all" : option?.tabName
                );
              }}
              placeholder={filter[0]?.tabName}
            /> */}
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={chartData}
          margin={{
            top: 30,
            right: -10,
            left: -10,
            bottom: 0,
          }}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="0 0"
            className="stroke-1 stroke-tremor-border dark:stroke-dark-tremor-border"
          />
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey="name"
            fontSize={12}
            className="stroke-1 stroke-tremor-border dark:stroke-dark-tremor-border"
          />
          <YAxis axisLine={false} tickLine={false} fontSize={12} />
          <Tooltip />
          <Bar dataKey="pv" barSize={20} fill="#4836FF" />
          <Line dataKey="uv" stroke="#A49BFF" dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Market;
