import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  NftSalesT,
  RowData,
  TopSalesT,
  TopMintData,
} from '../../types/table';

import type { ChainListT, GlobalSearchT, HomeCardData } from '../../types/home';

export const formatK = (num: number): string => {
  if (num >= 1000) {
    return (num / 1000)?.toFixed(2)?.replace(/\.00$/, '') + 'k';
  }
  return num.toString();
};

interface Options {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface HomeState {
  activeTab: string;
  tabData: { [key: string]: any };
  featureCardData: any[];
  featureSalesCardData: any[];
  columnDefsMap: Record<string, any[]>;
  volume_sales: string;
  loading: boolean;
  time: string;
  chainId: string;
  cardTimeCompare: '1day' | '7day';
  cardTimeOptions: Options[];
  cardData: HomeCardData;
  timeCompare: string;
  timeOptions: Options[];
  timeOptionsCompare: Options[];
  vauleSales: Options[];
  includeTokenMetadata: boolean;
  isCardOrTable: boolean;
  selectedToggleValue: string;
  globalSearchValue: string;
  tableSearchValue: string;
  globalSearchData: GlobalSearchT[];
  tableSearchData: any[];
  compareList: any[];
  error: string | null;
}

const initialState: HomeState = {
  activeTab: 'collection',
  time: '24h',
  timeCompare: '24h',
  chainId: 'ETHEREUM', // Default to Ethereum mainnet
  globalSearchValue: '',
  tableSearchValue: '',
  globalSearchData: [],
  featureCardData: [],
  featureSalesCardData: [],
  tableSearchData: [],
  compareList: [],
  includeTokenMetadata: true,
  selectedToggleValue: '0',
  isCardOrTable: false,
  cardTimeCompare: '1day',
  cardTimeOptions: [
    { label: '24h', value: '1day' },
    { label: '7d', value: '7day' },
  ],
  cardData: {
    '1day': [],
    '7day': [],
  },
  timeOptions: [
    { label: 'All Time', value: 'all_time' },
    { label: '5m', value: '5m' },
    { label: '10m', value: '10m' },
    { label: '30m', value: '30m' },
    { label: '1h', value: '1h' },
    { label: '6h', value: '6h' },
    { label: '24h', value: '24h' },
    { label: '7d', value: '7d' },
    { label: '30d', value: '30d' },
  ],
  timeOptionsCompare: [
    { label: '24h', value: '24h' },
    { label: '30d', value: '30d' },
    { label: '90d', value: '90d' },
    { label: 'All Time', value: 'all_time' },
  ],
  vauleSales: [
    { label: 'Volume', value: 'volume' },
    { label: 'Sales', value: 'sales' },
  ],
  tabData: {
    trending: [],
  },
  columnDefsMap: {},
  volume_sales: 'volume',
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    fetchHomeCardRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchHomeCardSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      console.log(
        'fetchHomeCardSuccess:',
        action.payload,
      )
      state.cardData['1day'] = action.payload['1day'];
      state.cardData['7day'] = action.payload['7day'];
    },
    fetchHomeCardFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchTrendingDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTrendingDataSuccess: (state, action: PayloadAction<RowData[]>) => {
      state.loading = false;
      state.tabData = { ...state.tabData, [state.activeTab]: action.payload };
    },
    fetchTrendingDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchCollectionDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCollectionDataSuccess: (state, action: PayloadAction<RowData[]>) => {
      state.loading = false;
      state.tabData = { ...state.tabData, [state.activeTab]: action.payload };
      state.featureCardData = action.payload.slice(0, 5);
    },
    fetchCollectionDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchNftSalesDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchNftSalesDataSuccess: (state, action: PayloadAction<NftSalesT[]>) => {
      state.loading = false;
      state.tabData = { ...state.tabData, [state.activeTab]: action.payload };
    },
    fetchNftSalesDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchTopSalesDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTopSalesDataSuccess: (state, action: PayloadAction<TopSalesT[]>) => {
      state.loading = false;
      state.tabData = { ...state.tabData, [state.activeTab]: action.payload };
    },
    fetchTopSalesDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchTopSalesCardDataRequest: (state) => {
      state.error = null;
    },
    fetchTopSalesCardDataSuccess: (state, action: PayloadAction<TopSalesT[]>) => {
      state.featureSalesCardData = action.payload.slice(0, 5);
    },
    fetchTopSalesCardDataFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    fetchTopMintDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTopMintDataSuccess: (state, action: PayloadAction<TopMintData[]>) => {
      state.loading = false;
      state.tabData = { ...state.tabData, [state.activeTab]: action.payload };
    },
    fetchTopMintDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchGlobalSearchDataRequest: (state, action: PayloadAction<string>) => {
      state.error = null;
      state.globalSearchValue = action.payload;
    },
    fetchGlobalSearchDataSuccess: (
      state,
      action: PayloadAction<GlobalSearchT[]>
    ) => {
      state.globalSearchData = action.payload;
    },
    fetchGlobalSearchDataFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    setTabData: (
      state,
      action: PayloadAction<{
        [key: string]: RowData[];
      }>
    ) => {
      state.tabData = action.payload;
    },
    setVolume_sales: (state, action: PayloadAction<string>) => {
      state.volume_sales = action.payload;
    },
    setTime: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
    setTimeComapre: (state, action: PayloadAction<string>) => {
      state.timeCompare = action.payload;
    },
    setIsCardOrTable: (state) => {
      state.isCardOrTable = !state.isCardOrTable;
    },
    setSelectedToggleValue: (state, action: PayloadAction<string>) => {
      state.selectedToggleValue = action.payload;
    },
    setGlobalSearchValue: (state, action: PayloadAction<string>) => {
      state.globalSearchValue = action.payload;
    },
    setTableSearchValue: (state, action: PayloadAction<string>) => {
      state.tableSearchValue = action.payload;
    },
    setTableSearchData: (state, action: PayloadAction<any[]>) => {
      state.tableSearchData = action.payload;
    },
    setChainId: (state, action: PayloadAction<string>) => {
      state.chainId = action.payload;
    },
    setCompareList: (state, action: PayloadAction<any[]>) => {
      state.compareList = action.payload.slice(0, 5);
    },
    setCardTimeCompare: (state, action: PayloadAction<'1day' | '7day'>) => {
      state.cardTimeCompare = action.payload;
    },
  },
});

export const {
  fetchHomeCardRequest,
  fetchHomeCardSuccess,
  fetchHomeCardFailure,
  fetchTrendingDataRequest,
  fetchTrendingDataSuccess,
  fetchTrendingDataFailure,
  fetchCollectionDataRequest,
  fetchCollectionDataSuccess,
  fetchCollectionDataFailure,
  fetchNftSalesDataRequest,
  fetchNftSalesDataSuccess,
  fetchNftSalesDataFailure,
  fetchTopSalesDataRequest,
  fetchTopSalesDataSuccess,
  fetchTopSalesDataFailure,
  fetchTopSalesCardDataRequest,
  fetchTopSalesCardDataSuccess,
  fetchTopSalesCardDataFailure,
  fetchTopMintDataRequest,
  fetchTopMintDataSuccess,
  fetchTopMintDataFailure,
  fetchGlobalSearchDataRequest,
  fetchGlobalSearchDataSuccess,
  fetchGlobalSearchDataFailure,
  setActiveTab,
  setTabData,
  setTime,
  setVolume_sales,
  setIsCardOrTable,
  setSelectedToggleValue,
  setGlobalSearchValue,
  setChainId,
  setCompareList,
  setTimeComapre,
  setTableSearchValue,
  setTableSearchData,
  setCardTimeCompare,
} = homeSlice.actions;

export default homeSlice.reducer;
