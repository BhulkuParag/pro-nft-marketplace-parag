import React, { useEffect, useState } from "react";
import { LineChart } from "@tremor/react";
import Info from "components/latest/info/Info";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { BITCRUNCH_API_KEY, NFT_GO_API_KEY } from "hooks/constants";
import { getApiUrl } from "lib/date";

interface DropdownOption {
  label: string;
}

const dropdownOptions: DropdownOption[] = [
  { label: "24h" },
  { label: "7d" },
  { label: "30d" },
  { label: "3M" },
  { label: "1y" },
];

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

const VolumeAndSales = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("ETH");
  const [range, setRange] = useState("24h");
  const [marketData, setMarketData] = useState<any>([]);
  const [volumeData, setVolumeData] = useState<any>([]);

  useEffect(() => {
    axios
      .get(
        `https://data-api.nftgo.io/eth/v1/market/chart/volume?${getApiUrl(
          range
        )}&unit=ETH`,
        { headers: { "x-api-key": NFT_GO_API_KEY } }
      )
      .then((res) => setMarketData(res?.data));
    axios
      .get(
        `https://data-api.nftgo.io/eth/v1/market/chart/marketcap?${getApiUrl(
          range
        )}&unit=USD`,
        { headers: { "x-api-key": NFT_GO_API_KEY } }
      )
      .then((res) => setVolumeData(res?.data));
  }, [range, selectedCrypto]);



  return (
    <div className="p-5 rounded-md border dark:border-dark-black-01 border-light-black-01">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <span className="font-medium text-xl text-black dark:text-white">
            Listing Trends
          </span>
          <Info
            iconType="questionMark"
            height={5}
            weight={5}
            isTooltip={true}
          />
        </div>
      </div>
      <LineChart
        className="h-80 mt-5"
        data={marketData}
        index="date"
        categories={["Sales", "Volume"]}
        colors={["#A49BFF", "#4836FF"]}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        onValueChange={(v) => console.log(v)}
      />
    </div>
  );
};

export default VolumeAndSales;
