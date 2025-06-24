import { useState } from 'react';
import walletLight from '../../../assets/icons/walletWhite.svg';
import { BarChart } from '@tremor/react';
import Info from '../../../Components/info/Info';
import { PieChart, Pie, Sector, Cell } from 'recharts';
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
  // const [range, setRange] = useState<string>('7d');
  // const [selectedCrypto, setSelectedCrypto] = useState('eth');
  // console.log("range =",range);
  // console.log(selectedCrypto , "selectedCrypto");

  const filter = [
    { tabName: 'All Time' },
    { tabName: '30d' },
    { tabName: '7d' },
    { tabName: '24h' },
    { tabName: '6h' },
    { tabName: '1h' },
    { tabName: '30m' },
    { tabName: '5m' },
    { tabName: '1m' },
  ];
  // const cryptoTabsData = [{ tabName: 'ETH' }, { tabName: 'USD' }];

  const onPieEnter = (_: any, index: number) => {
    setActivePieIndex(index);
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
    <div className="bg-white dark:bg-dark-secondary-dark rounded-xl w-full flex flex-col gap-5 p-3 md:p-6">
      {/* Heading section */}
      <div className="flex flex-col lg:flex-row w-full relative gap-[10px] items-start justify-between">
        <div className="flex flex-col">
          <div className="flex gap-1 items-center">
            <span className="font-medium text-xl text-black dark:text-white">
              Purchasing power
            </span>
            <Info height={5} weight={5} isTooltip={true} />
          </div>
          <span className="mt-2 w-auto md:w-max text-sm text-grey font-medium">
            adidas Originals: Into the Metaverse (Phase 1) holders have this
            wallet balance & distribution
          </span>
        </div>

        <div className="flex w-full justify-end">
          <div className="rounded-full w-[200px] bg-primary-light bg-opacity-20 flex items-center gap-4 p-1 px-1">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary">
              <img src={walletLight} height={24} width={24} alt="Wallet Icon" />
            </div>
            <span className="text-primary-light text-base whitespace-nowrap font-medium">
              Wallet Tracker
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        {/* Pie Chart section */}
        <div className="flex flex-col p-5 rounded-xl bg-primary-light bg-opacity-20">
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-1 items-center">
              <span className="text-[18px] font-semibold text-black dark:text-white justify-between">
                Total buying power
              </span>
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
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    stroke="transparent"
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>

        {/* Bar Chart section */}
        <div className="flex w-full">
          <div className="p-5 rounded-xl w-full dark:bg-dark-black-light bg-white-light">
            <div className="flex flex-col xl:flex-row flex-wrap gap-5 justify-between">
              <div className="flex flex-col md:flex-row gap-4">
                {holderTraders?.map((item, i) => (
                  <div
                    key={i}
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
                        option?.tabName === 'All Time' ? 'all' : option?.tabName
                      );
                    }}
                    placeholder={filter[0]?.tabName}
                  /> */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasingPower;
