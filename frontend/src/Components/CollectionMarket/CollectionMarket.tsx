import ChartCard from '../../Components/market/ChartCard/ChartCard';
import ListingTrends from '../ListingTrends/ListingTrends';
import HeadingTitle from '../../Components/HeadingTitle';
import PurchasingPower from '../../Components/market/PurchasingPower/PurchasingPower';
import BarChartSection from '../../Components/market/BarChartSection/BarChartSection';
import PurchaseIntent from '../../Components/market/PurchaseIntent/PurchaseIntent';
import BlueChipIndex from '../../Components/market/BlueChipIndex/BlueChipIndex';
import MarketCap from '../../Components/market/MarketCap/MarketCap';
import PriceAndSales from '../../Components/market/PriceAndSales/PriceAndSales';
import ChartTabSection from '../../Components/market/ChartTabSection/ChartTabSection';
import MarketCapAndVolumeIndex from '../../Components/market/MarketCapAndVolume/MarketCapAndVolume';
import CategoryMarketCapIndex from '../../Components/market/CategoryMarketCap/CategoryMarketCap';
import TopCollectionsIndex from '../../Components/market/TopCollections/TopCollections';
import ShareByChainIndex from '../../Components/market/ShareByChain/ShareByChain';
import HoldersAndTradersIndex from '../../Components/market/HoldersAndTraders/HoldersAndTraders';

const Market = () => {
  return (
    <div className="p-3 sm:p-5 flex flex-col gap-5">
      <ChartCard />
      <ListingTrends />
      <ChartTabSection />
      <HeadingTitle title={'Wallet Tracker'} />
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
      <HeadingTitle title={'Share by Chain'}>
        <p className="mt-2 text-sm font-normal text-grey">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </HeadingTitle>
      <ShareByChainIndex />
    </div>
  );
};

export default Market;
