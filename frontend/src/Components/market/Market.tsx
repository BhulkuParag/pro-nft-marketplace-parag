import ChartCard from "./ChartCard/ChartCard";
import ListingTrends from "./ListingTrends/ListingTrends";
import HeadingTitle from "../../Components/HeadingTitle";
import PurchasingPower from "./PurchasingPower/PurchasingPower";
import BarChartSection from "./BarChartSection/BarChartSection";
import PurchaseIntent from "./PurchaseIntent/PurchaseIntent";
import BlueChipIndex from "./BlueChipIndex/BlueChipIndex";
import MarketCap from "./MarketCap/MarketCap";
import PriceAndSales from "./PriceAndSales/PriceAndSales";
import ChartTabSection from "./ChartTabSection/ChartTabSection";
import MarketCapAndVolumeIndex from "./MarketCapAndVolume/MarketCapAndVolume";
import CategoryMarketCapIndex from "./CategoryMarketCap/CategoryMarketCap";
import TopCollectionsIndex from "./TopCollections/TopCollections";
import ShareByChainIndex from "./ShareByChain/ShareByChain";
import HoldersAndTradersIndex from "./HoldersAndTraders/HoldersAndTraders";
import { Box } from "@mui/material";

const Market = () => {
  return (
    <Box className="p-3 sm:p-5 flex flex-col gap-5" sx={{
      backgroundColor: 'background.default'
    }}>
      <ChartCard />
      <ListingTrends />
      <ChartTabSection />
      <HeadingTitle title={"Wallet Tracker"} />
      <PurchasingPower />
      <BarChartSection />
      <PurchaseIntent />
      <PriceAndSales />
      <MarketCap />
      <BlueChipIndex />
      <MarketCapAndVolumeIndex />
      <HoldersAndTradersIndex />
      <div className="flex flex-col xl:flex-row justify-center gap-5">
        <CategoryMarketCapIndex />
        <TopCollectionsIndex />
      </div>
      <HeadingTitle title={"Share by Chain"}>
        <p className="mt-2 text-sm font-normal text-grey">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </HeadingTitle>
      <ShareByChainIndex />
    </Box>
  );
};

export default Market;
