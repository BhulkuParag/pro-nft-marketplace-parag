import React, { useState } from "react";
import Info from "../../../info/Info";
// import GraphFilter from "components/latest/HomeTabs/GraphFilter";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import EthIcon from "../../../../Components/Icon/crypto-icon/EthIcon";
// import Switch from "components/latest/switch/Switch";

interface DataPoint {
  x: number;
  y: number;
  z: number;
}

function generateData(length: number): DataPoint[] {
  const data: DataPoint[] = [];
  for (let i = 0; i < length; i++) {
    const point: DataPoint = {
      x: Math.floor(Math.random() * 99),
      y: Math.floor(Math.random() * 81),
      z: Math.floor(Math.random() * 81),
    };
    data.push(point);
  }
  return data;
}

const data01: DataPoint[] = generateData(12);
const data02: DataPoint[] = generateData(24);
const data03: DataPoint[] = generateData(18);

interface graphData {
  name: string;
  color: string;
  value: string;
  change: string;
}

const holderTraders: graphData[] = [
  {
    name: "Floor Price",
    color: "bg-primary-light",
    value: "45.49",
    change: "-46.15%",
  },
  {
    name: "Avg Price(All)",
    color: "bg-primary",
    value: "44.03",
    change: "-46.15%",
  },
  {
    name: "Normal Sales",
    color: "bg-transparent border border-primary-light",
    value: "352.27",
    change: "-46.15%",
  },
];

const Sales: React.FC = () => {
  const [outliers, setOutliers] = useState(false);
  const [range, setRange] = useState("24h");
  // console.log("range =",range);
  const filter = [
    { tabName: "All Time" },
    { tabName: "12mo" },
    { tabName: "3mo" },
    { tabName: "30d" },
    { tabName: "7d" },
    { tabName: "24h" },
  ];
  const customTicks = [0, 20, 40, 60, 80, 100];

  return (
    <div className="p-3">
      <span className="flex gap-3 items-center font-medium text-lg text-black dark:text-white">
        Price & Sales
        <Info iconType="questionMark" height={5} weight={5} isTooltip={true} />
        <span className="text-xs text-grey">846.844 ETH</span>
      </span>
      <div className="flex flex-col md:flex-row gap-3 justify-between mt-1">
        <div className="flex gap-4 my-3 flex-wrap">
          {holderTraders?.map((item, index) => {
            return (
              <div
                className="border-r-[1px] border-black01 pr-[12px] flex flex-col gap-[2px] last:border-none"
                key={index}
              >
                <div className="flex items-center gap-[6px]">
                  <div
                    className={
                      "h-[10px] w-[10px] rounded-full" +
                      item?.color
                    }
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
        <div className="flex gap-5 items-center">
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
        <ScatterChart
          margin={{
            top: 30,
            right: -10,
            left: -30,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="0 0"
            className="stroke-1 stroke-tremor-border dark:stroke-dark-tremor-border"
          />
          <XAxis
            type="number"
            dataKey="x"
            name="stature"
            // unit="cm"
            axisLine={false}
            tickLine={false}
            fontSize={12}
            ticks={customTicks}
            className="stroke-1 stroke-tremor-border dark:stroke-dark-tremor-border"
          />
          <YAxis
            type="number"
            dataKey="y"
            name="weight"
            // unit="kg"
            axisLine={false}
            tickLine={false}
            fontSize={12}
          />
          <Tooltip cursor={{ strokeDasharray: "3 3", stroke: "#A49BFF" }} />
          <Scatter name="A school" data={data01} fill="#4836FF" />
          <Scatter name="A school" data={data02} fill="#A49BFF" />
          <Scatter
            name="A school"
            data={data03}
            fill="transparent"
            stroke="#A49BFF"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Sales;
