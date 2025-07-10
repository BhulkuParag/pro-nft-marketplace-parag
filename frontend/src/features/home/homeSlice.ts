import {
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type {
  NftSalesT,
  RowData,
  TopSalesT,
  TopMintData,
} from '../../types/table';

import {
  CollectionRenderer,
  NormalRenderer,
  PriceRenderer,
  StarRenderer,
  SupplyRenderer,
  VolumeRenderer,
  HoverRenderer,
  ChipRenderer,
} from '../../utils/Table/cellRenderer';
import {
  AddCollectionSortIcon,
  AddSortIcon,
  InfoIconSortIcon,
  NormalEndHeaderRenderer,
  NormalHeaderRenderer,
} from '../../utils/Table/headerRenderer';
import type { ICellRendererParams } from 'ag-grid-community';
import type { GlobalSearchT } from '../../types/home';
import { formatDistanceToNow } from 'date-fns';

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
  columnDefsMap: Record<string, any[]>;
  volume_sales: string;
  loading: boolean;
  time: string;
  chainId: string;
  timeCompare: string;
  timeOptions: Options[];
  timeOptionsCompare: Options[];
  vauleSales: Options[];
  includeTokenMetadata: boolean;
  isCardOrTable: boolean;
  selectedToggleValue: string;
  globalSearchValue: string;
  globalSearchData: GlobalSearchT[];
  compareList: any[];
  error: string | null;
}

const initialState: HomeState = {
  activeTab: 'trending',
  time: '24h',
  timeCompare: '24h',
  chainId: 'ETHEREUM', // Default to Ethereum mainnet
  globalSearchValue: '',
  globalSearchData: [],
  compareList: [],
  includeTokenMetadata: true,
  selectedToggleValue: '0',
  isCardOrTable: false,
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
  columnDefsMap: {
    // trending: [
    //   {
    //     field: 'id',
    //     headerName: '',
    //     minWidth: 70,
    //     maxWidth: 70,
    //     cellRenderer: StarRenderer,
    //     valueGetter: (params: ICellRendererParams<RowData>) =>
    //       params.node?.rowIndex != null ? params.node.rowIndex + 1 : '',
    //   },
    //   {
    //     field: 'name',
    //     headerName: 'Collection Name',
    //     cellRenderer: CollectionRenderer,
    //     flex: 1,
    //     minWidth: 300,
    //   },
    //   {
    //     field: 'floorAsk',
    //     headerName: 'Floor Price (24H)',
    //     cellRenderer: ChipRenderer,
    //     headerComponent: InfoIconSortIcon,
    //     minWidth: 190,
    //     valueGetter: (params: ICellRendererParams<RowData>) =>
    //       params.data?.floorAsk?.price?.amount?.decimal.toFixed(2) ?? '',
    //   },
    //   {
    //     field: 'topBid',
    //     headerName: `Top Bid (24H)`,
    //     cellRenderer: ChipRenderer,
    //     headerComponent: InfoIconSortIcon,
    //     // cellRenderer: PriceRenderer,
    //     // minWidth: 110,
    //     valueGetter: (params: ICellRendererParams<RowData>) =>
    //       params.data?.topBid?.price?.amount?.decimal.toFixed(2) ?? '-',
    //   },
    //   {
    //     field: 'volume',
    //     headerName: 'Volume (24H)',
    //     cellRenderer: NormalRenderer,
    //     // minWidth: 110,
    //     valueGetter: (params: ICellRendererParams<RowData>) =>
    //       params.data?.volume?.toFixed(2) ?? '',
    //   },
    //   {
    //     field: 'volumeChange',
    //     headerName: 'Volume (1 Day)',
    //     cellRenderer: VolumeRenderer,
    //     // minWidth: 110,
    //     valueGetter: (params: ICellRendererParams<RowData>) =>
    //       params.data?.volumeChange['1day']?.toFixed(2) ?? '',
    //   },
    //   {
    //     field: 'volumeChange',
    //     headerName: 'Volume (7 Day)',
    //     cellRenderer: VolumeRenderer,
    //     // minWidth: 110,
    //     valueGetter: (params: ICellRendererParams<RowData>) =>
    //       params.data?.volumeChange['7day']?.toFixed(2) ?? '',
    //   },
    //   {
    //     field: 'collectionVolume',
    //     headerName: 'Collection Volume (1 day)',
    //     cellRenderer: NormalRenderer,
    //     minWidth: 200,
    //     valueGetter: (params: ICellRendererParams<RowData>) =>
    //       params.data?.collectionVolume['1day']?.toFixed(2) ?? '',
    //   },
    //   {
    //     field: 'collectionVolume',
    //     headerName: 'Collection Volume (7 day)',
    //     cellRenderer: NormalRenderer,
    //     minWidth: 200,
    //     valueGetter: (params: ICellRendererParams<RowData>) =>
    //       params.data?.collectionVolume['7day']?.toFixed(2) ?? '',
    //   },
    //   {
    //     field: 'ownerCount',
    //     headerName: 'Owners',
    //     cellRenderer: NormalRenderer,
    //     headerComponent: AddSortIcon,
    //     // minWidth: 110,
    //     valueGetter: (params: ICellRendererParams<RowData>) =>
    //       params.data?.ownerCount?.toFixed(0) ?? '',
    //   },
    //   {
    //     field: 'Supply',
    //     headerName: 'Supply',
    //     cellRenderer: SupplyRenderer,
    //     headerComponent: AddSortIcon,
    //     // minWidth: 120,
    //     valueGetter: (params: ICellRendererParams<RowData>) =>
    //       params.data?.tokenCount ? formatK(params.data?.tokenCount) : '',
    //   },
    // ],
    // nft_sales: [
    //   {
    //     field: 'id',
    //     headerName: '',
    //     minWidth: 70,
    //     maxWidth: 70,
    //     cellRenderer: StarRenderer,
    //     valueGetter: (params: ICellRendererParams<NftSalesT>) =>
    //       params.node?.rowIndex != null ? params.node.rowIndex + 1 : '',
    //   },
    //   {
    //     field: 'nft_name',
    //     headerName: 'Collection Name',
    //     cellRenderer: CollectionRenderer,
    //     headerComponent: AddCollectionSortIcon,
    //     flex: 1,
    //     minWidth: 300,
    //     valueGetter: (params: ICellRendererParams<NftSalesT>) =>
    //       params.data?.token?.name ?? '',
    //   },
    //   {
    //     field: 'contract',
    //     headerName: 'Contract',
    //     headerComponent: AddSortIcon,
    //     cellRenderer: NormalRenderer,
    //     // minWidth: 110,
    //     valueGetter: (params: ICellRendererParams<NftSalesT>) =>
    //       params.data?.token.contract
    //         ? params.data?.token.contract.slice(0, 4) +
    //           '...' +
    //           params.data?.token.contract.slice(-4)
    //         : '',
    //   },
    //   {
    //     field: 'tokenId',
    //     headerName: 'Token ID',
    //     headerComponent: AddSortIcon,
    //     cellRenderer: NormalRenderer,
    //     // minWidth: 110,
    //     valueGetter: (params: ICellRendererParams<NftSalesT>) =>
    //       params.data?.token.tokenId ?? '',
    //   },
    //   {
    //     field: 'Floor Price',
    //     headerName: 'Floor Price',
    //     headerComponent: AddSortIcon,
    //     cellRenderer: PriceRenderer,
    //     // minWidth: 110,
    //   },
    //   {
    //     field: 'usd',
    //     headerName: 'Amount',
    //     headerComponent: AddSortIcon,
    //     cellRenderer: NormalRenderer,
    //     // minWidth: 110,
    //     valueGetter: (params: ICellRendererParams<NftSalesT>) =>
    //       params.data?.price?.amount?.usd?.toFixed(2)
    //         ? '$' + params.data?.price?.amount?.usd?.toFixed(2)
    //         : '',
    //   },
    //   {
    //     field: 'washTradingScore',
    //     headerName: 'Wash Trading Score',
    //     headerComponent: AddSortIcon,
    //     cellRenderer: NormalRenderer,
    //     // minWidth: 110,
    //     valueGetter: (params: ICellRendererParams<NftSalesT>) =>
    //       params.data?.washTradingScore.toFixed(0) ?? '',
    //   },
    //   {
    //     field: 'Latest Deal',
    //     headerName: 'Latest Deal',
    //     headerComponent: AddSortIcon,
    //     cellRenderer: NormalRenderer,
    //     // minWidth: 110,
    //   },
    // ],
    // top_sales: [
    //   {
    //     field: 'id',
    //     headerName: '',
    //     minWidth: 70,
    //     maxWidth: 70,
    //     cellRenderer: StarRenderer,
    //     valueGetter: (params: ICellRendererParams<TopSalesT>) =>
    //       params.node?.rowIndex != null ? params.node.rowIndex + 1 : '',
    //   },
    //   {
    //     field: 'name',
    //     headerName: 'Collection Name',
    //     cellRenderer: CollectionRenderer,
    //     flex: 1,
    //     minWidth: 300,
    //     valueGetter: (params: ICellRendererParams<TopSalesT>) =>
    //       params.data?.token?.name ?? '',
    //   },
    //   {
    //     field: 'token',
    //     headerName: 'Token',
    //     cellRenderer: NormalRenderer,
    //     headerComponent: NormalHeaderRenderer,
    //     valueGetter: (params: ICellRendererParams<TopSalesT>) =>
    //       params.data?.token?.name ?? '',
    //     // minWidth: 110,
    //   },
    //   {
    //     field: 'contract',
    //     headerName: 'Contract',
    //     cellRenderer: NormalRenderer,
    //     headerComponent: NormalEndHeaderRenderer,
    //     // minWidth: 110,
    //     valueGetter: (params: ICellRendererParams<TopSalesT>) =>
    //       params.data?.token?.contract
    //         ? params.data?.token.contract.slice(0, 4) +
    //           '...' +
    //           params.data?.token.contract.slice(-4)
    //         : '-',
    //   },
    //   {
    //     field: 'tokenId',
    //     headerName: 'Token ID',
    //     cellRenderer: NormalRenderer,
    //     headerComponent: NormalEndHeaderRenderer,
    //     // minWidth: 110,
    //     valueGetter: (params: ICellRendererParams<TopSalesT>) =>
    //       params.data?.token?.tokenId ?? '',
    //   },
    //   {
    //     field: 'price',
    //     headerName: 'Price (ETH)',
    //     cellRenderer: PriceRenderer,
    //     headerComponent: NormalEndHeaderRenderer,
    //     // minWidth: 110,
    //     valueGetter: (params: ICellRendererParams<TopSalesT>) =>
    //       params.data?.price.amount.row ?? '',
    //   },
    //   {
    //     field: 'price',
    //     headerName: 'Price (USD)',
    //     cellRenderer: PriceRenderer,
    //     headerComponent: NormalEndHeaderRenderer,
    //     // minWidth: 110,
    //     valueGetter: (params: ICellRendererParams<TopSalesT>) =>
    //       params.data?.price.amount.usd ?? '',
    //   },
    //   {
    //     field: 'time',
    //     headerName: 'Time',
    //     cellRenderer: NormalRenderer,
    //     headerComponent: NormalEndHeaderRenderer,
    //     // minWidth: 120,
    //     valueGetter: (params: ICellRendererParams<TopSalesT>) =>
    //       params.data?.timestamp
    //         ? formatDistanceToNow(
    //             new Date(Number(params.data?.timestamp) * 1000),
    //             {
    //               addSuffix: true,
    //             }
    //           )
    //         : '-',
    //   },
    // ],
    // top_mint_ranking: [
    //   {
    //     field: 'id',
    //     headerName: '',
    //     minWidth: 70,
    //     maxWidth: 70,
    //     cellRenderer: StarRenderer,
    //     valueGetter: (params: ICellRendererParams<TopMintData>) =>
    //       params.node?.rowIndex != null ? params.node.rowIndex + 1 : '',
    //   },
    //   {
    //     field: 'name',
    //     headerName: 'Collection Name',
    //     cellRenderer: CollectionRenderer,
    //     flex: 2,
    //     minWidth: 300,
    //     valueGetter: (params: ICellRendererParams<TopMintData>) =>
    //       params.data?.name?.toString(),
    //   },
    //   {
    //     field: 'id',
    //     headerName: 'Contract',
    //     headerComponent: NormalHeaderRenderer,
    //     cellRenderer: HoverRenderer,
    //     // minWidth: 160,
    //     valueGetter: (params: ICellRendererParams<TopMintData>) =>
    //       params.data?.id?.slice(0, 6) + '...' + params.data?.id?.slice(-4),
    //   },
    //   {
    //     field: 'mintCount',
    //     headerName: 'Mints',
    //     headerComponent: AddSortIcon,
    //     cellRenderer: PriceRenderer,
    //     // minWidth: 110,
    //     valueGetter: (params: ICellRendererParams<TopMintData>) =>
    //       params.data?.mintCount?.toFixed(0) ?? '',
    //   },
    //   {
    //     field: 'ownerCount',
    //     headerName: 'Notable Minters',
    //     headerComponent: AddSortIcon,
    //     cellRenderer: NormalRenderer,
    //     valueGetter: (params: ICellRendererParams<TopMintData>) =>
    //       params.data?.ownerCount?.toFixed(0) ?? '',
    //   },
    //   {
    //     field: 'mintPrice',
    //     headerName: 'Mint Price',
    //     headerComponent: AddSortIcon,
    //     cellRenderer: PriceRenderer,
    //     valueGetter: (params: ICellRendererParams<TopMintData>) =>
    //       params.data?.mintPrice?.amount?.decimal?.toFixed(2) ?? '',
    //   },
    //   {
    //     field: 'tokenCount',
    //     headerName: 'Total Supply',
    //     headerComponent: AddSortIcon,
    //     cellRenderer: NormalRenderer,
    //     valueGetter: (params: ICellRendererParams<TopMintData>) =>
    //       params.data?.tokenCount?.toString() ?? '',
    //   },
    //   {
    //     field: 'mintVolume',
    //     headerName: 'Mint Volume',
    //     headerComponent: AddSortIcon,
    //     cellRenderer: PriceRenderer,
    //     valueGetter: (params: ICellRendererParams<TopMintData>) =>
    //       params.data?.mintVolume?.toFixed(2) ?? '',
    //   },
    // ],
  },
  volume_sales: 'volume',
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
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
      state.loading = true;
      state.error = null;
      state.globalSearchValue = action.payload;
    },
    fetchGlobalSearchDataSuccess: (
      state,
      action: PayloadAction<GlobalSearchT[]>
    ) => {
      state.loading = false;
      state.globalSearchData = action.payload;
    },
    fetchGlobalSearchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
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
    setChainId: (state, action: PayloadAction<string>) => {
      state.chainId = action.payload;
    },
    setCompareList: (state, action: PayloadAction<any[]>) => {
      state.compareList = action.payload.slice(0, 5);
    },
  },
});

export const {
  fetchTrendingDataRequest,
  fetchTrendingDataSuccess,
  fetchTrendingDataFailure,
  fetchNftSalesDataRequest,
  fetchNftSalesDataSuccess,
  fetchNftSalesDataFailure,
  fetchTopSalesDataRequest,
  fetchTopSalesDataSuccess,
  fetchTopSalesDataFailure,
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
} = homeSlice.actions;

export default homeSlice.reducer;
