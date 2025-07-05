import React from "react";
// import GraphFilter from "components/latest/HomeTabs/GraphFilter";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface TraderProps {
  chipValue?: any;
  chartData?: any;
  setRange?: any;
}

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
          backgroundColor: "black",
          color: "white",
          padding: "8px",
          borderRadius: "8px",
          fontSize: "14px",
        }}
      >
        <p>{label}</p>
        <p style={{ color: "#4836FF" }}>
          Trader: <span style={{ color: "#fff" }}>{payload[0].value}</span>
        </p>
        <p style={{ color: "#A49BFF" }}>
          Buyer: <span style={{ color: "#fff" }}>{payload[1].value}</span>
        </p>
        <p style={{ color: "#7A40EB" }}>
          Seller: <span style={{ color: "#fff" }}>{payload[2].value}</span>
        </p>
      </div>
    );
  }
};

const HoldersAndTraders = ({ chipValue, chartData, setRange }: TraderProps) => {
  const filter = [
    { tabName: "7d" },
    { tabName: "30d" },
    { tabName: "90d" },
    { tabName: "All Time" },
  ];

  return (
    <div className="p-3 md:p-6 rounded-xl border dark:border-dark-black-01 border-light-black-01 bg-white dark:bg-dark-secondary-dark">
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        <div className="flex items-center gap-2">
          <span className="font-medium text-xl text-black dark:text-white">
            Traders
          </span>
        </div>
        <div className="flex gap-5">
          <div className="flex justify-end">
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
      <div className="flex gap-4 my-3 flex-wrap">
        {chipValue?.map((item: any, index: number) => {
          return (
            <div
              className="border-r-[1px] border-black01 pr-[12px] flex flex-col gap-[2px] last:border-none"
              key={index}
            >
              <div className="flex items-center gap-[6px]">
                {/* <div
                  className={cn(
                    "h-[10px] w-[10px] rounded-full",
                    `bg-[${item.color}]`
                  )}
                ></div> */}
                <span className="text-grey text-[14px]">{item?.name}</span>
              </div>
              <div className="flex items-end gap-1">
                <div className="flex items-center gap-[6px]">
                  <span className=" text-[14px] font-medium text-light-white-light dark:text-white">
                    {Number(item.value)?.toLocaleString()}
                  </span>
                  {/* <EthIcon className="fill-grey w-3 h-3" /> */}
                </div>
                {/* <span className="text-[10px] text-light-red dark:text-dark-red">
                  {item?.change}
                </span> */}
              </div>
            </div>
          );
        })}
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
            dataKey="date"
            fontSize={12}
            className="stroke-1 stroke-tremor-border dark:stroke-dark-tremor-border"
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
            orientation="right"
            fontSize={12}
          />
          {/* <Tooltip /> */}
          <Tooltip content={<CustomTooltip />} />
          <Bar yAxisId="left" dataKey="traders" barSize={30} fill="#4836FF" />
          <Bar yAxisId="right" dataKey="buyers" barSize={30} fill="#A49BFF" />
          <Bar yAxisId="right" dataKey="sellers" barSize={30} fill="#7A40EB" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HoldersAndTraders;
