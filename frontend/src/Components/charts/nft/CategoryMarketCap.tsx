import React from 'react';
// import GraphFilter from "components/latest/HomeTabs/GraphFilter";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
// import { negativeViewNumber } from "lib/numbers";

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '8px',
          borderRadius: '8px',
          fontSize: '14px',
        }}
      >
        <p>{label}</p>

        <p style={{ color: '#FFC155' }}>
          Volume:{' '}
          <span style={{ color: '#fff' }}>
            {/*negativeViewNumber(payload[0].value, true)*/}
            {dataFormatter(payload[0].value)}
          </span>
        </p>
        <p style={{ color: '#A49BFF' }}>
          Sales:{' '}
          <span style={{ color: '#fff' }}>
            {/*negativeViewNumber(payload[1].value, false)*/}
            {dataFormatter(payload[1].value)}
          </span>
        </p>
      </div>
    );
  }

  return null;
};

interface Props {
  chipValue?: any[];
  chartData?: any[];
  setRange?: (range: string) => void;
}
const CategoryMarketCap: React.FC<Props> = ({
  chipValue = [],
  chartData = [],
  setRange,
}) => {
  const filterOptions = [{ tabName: 'Volume' }, { tabName: 'Sales' }];

  const handleTabChange = (option: { tabName: string }) => {
    const selectedRange = option?.tabName === 'Volume' ? 'volume' : 'sales';
    if (setRange) setRange(selectedRange);
  };

  return (
    <div className="p-3 md:p-6 flex flex-col rounded-xl bg-white dark:bg-dark-secondary-dark w-full">
      <span className="font-medium text-xl text-black dark:text-white">
        Category Volume & Sales
      </span>
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        <div className="flex gap-4 my-3">
          {chipValue.map((item, index) => (
            <div
              className="border-r-[1px] border-black01 pr-[12px] flex flex-col gap-[2px] last:border-none"
              key={index}
            >
              <div className="flex items-center gap-[6px]">
                <div
                  className={`h-[10px] w-[10px] rounded-full 
                    bg-[${item.color}]`}
                ></div>
                <span className="text-grey text-[14px]">{item.name}</span>
              </div>
              <div className="flex items-end gap-1">
                <div className="flex items-center gap-[6px]">
                  <span className=" text-[14px] font-medium text-light-white-light dark:text-white">
                    {item.name == 'Volume'
                      ? `$${Number(item.value)?.toLocaleString()}`
                      : Number(item.value)?.toLocaleString()}
                  </span>
                  {/* <EthIcon className="fill-grey w-3 h-3" /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-3 xl:gap-5 w-full justify-end sm:w-auto">
            {/* <GraphFilter
              categories={filterOptions}
              isLeftBorder={false}
              shouldApplyBorder={true}
              selectedTabRoundedStyle={false}
              onTabChange={handleTabChange}
              placeholder={filterOptions[0].tabName}
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
            angle={-20}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            yAxisId="left"
            fontSize={12}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            yAxisId="right"
            fontSize={12}
            orientation="right"
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar yAxisId="left" dataKey="volume" barSize={30} fill="#4836FF" />
          <Bar yAxisId="right" dataKey="sales" barSize={30} fill="#A49BFF" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryMarketCap;
