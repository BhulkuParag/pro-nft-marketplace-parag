import { useState } from "react";
import { AreaChart } from "@tremor/react";
import Info from "../../../Components/info/Info";
// import GraphFilter from "components/latest/HomeTabs/GraphFilter";

const chartData = [
  {
    date: "Oct 03",
    Running: 4.5,
  },
  {
    date: "Oct 04",
    Running: 4.9,
  },
  {
    date: "Oct 05",
    Running: 5,
  },
  {
    date: "Oct 06",
    Running: 4.6,
  },
  {
    date: "Oct 07",
    Running: 5.1,
  },
  {
    date: "Oct 08",
    Running: 4.7,
  },
  {
    date: "Oct 09",
    Running: 5,
  },
];

const BlueChip = () => {
  const [range, setRange] = useState<string>("7d");
  const [selectedCrypto, setSelectedCrypto] = useState("usd");
  // console.log("range =",range);
  // console.log(selectedCrypto , "selectedCrypto");
  const cryptoTabsData = [{ tabName: "usd" }, { tabName: "eth" }];
  const filter = [
    { tabName: "15m" },
    { tabName: "30m" },
    { tabName: "24h" },
    { tabName: "7d" },
    { tabName: "30d" },
    { tabName: "90d" },
    { tabName: "All Time" }
  ];

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
      <AreaChart
        className="mt-5 h-60"
        data={chartData}
        index="date"
        categories={["Running"]}
        colors={["#A49BFF"]}
        yAxisWidth={30}
        minValue={4.5}
        maxValue={5.2}
        showLegend={false}
      />
    </div>
  );
};

export default BlueChip;
