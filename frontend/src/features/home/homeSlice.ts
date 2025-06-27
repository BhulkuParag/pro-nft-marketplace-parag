import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Nft_sales, RowData, TopMintData } from '../../types/table';
import {
  CollectionRenderer,
  NormalRenderer,
  PriceRenderer,
  StarRenderer,
  SupplyRenderer,
  VolumeRenderer,
  HoverRenderer,
} from '../../utils/Table/cellRenderer';
import { AddSortIcon, InfoIcon } from '../../utils/Table/headerRenderer';
import type { ICellRendererParams } from 'ag-grid-community';

interface Options {
  label: string;
  value: string;
}

interface HomeState {
  activeTab: string;
  tabData: { [key: string]: any };
  columnDefsMap: Record<string, any[]>;
  volume_sales: string;
  trending_loading: boolean;
  NftSales_loading: boolean;
  topMint_loading: boolean;
  time: string;
  timeOptions: Options[];
  vauleSales: Options[];
  includeTokenMetadata: boolean;
  error: string | null;
}

const initialState: HomeState = {
  activeTab: 'trending',
  time: '24h',
  includeTokenMetadata: true,
  timeOptions: [
    { label: '5m', value: '5m' },
    { label: '10m', value: '10m' },
    { label: '30m', value: '30m' },
    { label: '1h', value: '1h' },
    { label: '6h', value: '6h' },
    { label: '24h', value: '24h' },
    { label: '7d', value: '7d' },
    { label: '30d', value: '30d' },
  ],
  vauleSales: [
    { label: 'Volume', value: 'volume' },
    { label: 'Sales', value: 'sales' },
  ],
  tabData: {
    trending: [],
  },
  columnDefsMap: {
    trending: [
      {
        field: 'id',
        headerName: '',
        minWidth: 70,
        maxWidth: 70,
        cellRenderer: StarRenderer,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.node?.rowIndex != null ? params.node.rowIndex + 1 : '',
      },
      {
        field: 'name',
        headerName: 'Collection',
        cellRenderer: CollectionRenderer,
        flex: 2,
        minWidth: 300,
      },
      {
        field: 'floorAsk',
        headerName: 'Floor Price (24H)',
        cellRenderer: PriceRenderer,
        headerComponent: InfoIcon,
        minWidth: 160,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.floorAsk?.price?.amount?.decimal.toFixed(2) ?? '',
      },
      {
        field: 'topBid',
        headerName: `Top Bid (24H)`,
        cellRenderer: PriceRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.topBid?.price?.amount?.decimal.toFixed(2) ?? '',
      },
      {
        field: 'volume',
        headerName: 'Volume (24H)',
        cellRenderer: NormalRenderer,
        headerComponent: AddSortIcon,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.volume.toFixed(2) ?? '',
      },
      {
        field: 'volumeChange',
        headerName: 'Volume (1 Day)',
        cellRenderer: VolumeRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.volumeChange['1day'].toFixed(2) ?? '',
      },
      {
        field: 'volumeChange',
        headerName: 'Volume (7 Day)',
        cellRenderer: VolumeRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.volumeChange['7day'].toFixed(2) ?? '',
      },
      {
        field: 'collectionVolume',
        headerName: 'Collection Volume (1 day)',
        cellRenderer: NormalRenderer,
        minWidth: 200,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.collectionVolume['1day'].toFixed(2) ?? '',
      },
      {
        field: 'collectionVolume',
        headerName: 'Collection Volume (7 day)',
        cellRenderer: NormalRenderer,
        minWidth: 200,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.collectionVolume['7day'].toFixed(2) ?? '',
      },
      {
        field: 'ownerCount',
        headerName: 'Owners',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.ownerCount.toFixed(0) ?? '',
      },
      {
        field: 'Supply',
        headerName: 'Supply',
        headerComponent: AddSortIcon,
        cellRenderer: SupplyRenderer,
        // minWidth: 120,
      },
    ],
    nft_sales: [
      {
        field: 'id',
        headerName: '',
        minWidth: 70,
        maxWidth: 70,
        cellRenderer: StarRenderer,
        valueGetter: (params: ICellRendererParams<Nft_sales>) =>
          params.node?.rowIndex != null ? params.node.rowIndex + 1 : '',
      },
      {
        field: 'name',
        headerName: 'Collection Name',
        cellRenderer: CollectionRenderer,
        headerComponent: AddSortIcon,
        flex: 2,
        minWidth: 300,
        valueGetter: (params: ICellRendererParams<Nft_sales>) =>
          params.data?.token.name ?? '',
      },
      {
        field: 'contract',
        headerName: 'Contract',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<Nft_sales>) =>
          params.data?.token.contract ?? '',
      },
      {
        field: 'tokenId',
        headerName: 'Token ID',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<Nft_sales>) =>
          params.data?.token.tokenId ?? '',
      },
      {
        field: 'Floor Price',
        headerName: 'Floor Price',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
      },
      {
        field: 'usd',
        headerName: 'Amount',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<Nft_sales>) =>
          params.data?.price.amount.usd.toFixed(0) ?? '',
      },
      {
        field: 'washTradingScore',
        headerName: 'Wash Trading Score',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<Nft_sales>) =>
          params.data?.washTradingScore.toFixed(0) ?? '',
      },
      {
        field: 'Latest Deal',
        headerName: 'Latest Deal',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
      },
    ],
    top_sales: [],
    top_mint_ranking: [
      {
        field: 'id',
        headerName: '',
        minWidth: 70,
        maxWidth: 70,
        cellRenderer: StarRenderer,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.node?.rowIndex != null ? params.node.rowIndex + 1 : '',
      },
      {
        field: 'name',
        headerName: 'Collection',
        cellRenderer: CollectionRenderer,
        flex: 2,
        minWidth: 300,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.name.toString(),
      },
      {
        field: 'id',
        headerName: 'Contract',
        cellRenderer: HoverRenderer,
        // minWidth: 160,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.id.slice(0, 6) + '...' + params.data?.id.slice(-4),
      },
      {
        field: 'mintCount',
        headerName: 'Mints',
        headerComponent: AddSortIcon,
        cellRenderer: PriceRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.mintCount.toFixed(0) ?? '',
      },
      {
        field: 'ownerCount',
        headerName: 'Notable Minters',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.ownerCount.toFixed(0) ?? '',
      },
      {
        field: 'mintPrice',
        headerName: 'Mint Price',
        headerComponent: AddSortIcon,
        cellRenderer: PriceRenderer,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.mintPrice.amount.decimal.toFixed(2) ?? '',
      },
      {
        field: 'tokenCount',
        headerName: 'Total Supply',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.tokenCount.toString() ?? '',
      },
      {
        field: 'mintVolume',
        headerName: 'Mint Volume',
        headerComponent: AddSortIcon,
        cellRenderer: PriceRenderer,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.mintVolume.toFixed(2) ?? '',
      },
    ],
  },
  volume_sales: 'volume',
  trending_loading: false,
  NftSales_loading: false,
  topMint_loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    fetchTrendingDataRequest: (state) => {
      state.trending_loading = true;
      state.error = null;
    },
    fetchTrendingDataSuccess: (state, action: PayloadAction<RowData[]>) => {
      state.trending_loading = false;
      state.tabData = { ...state.tabData, [state.activeTab]: action.payload };
    },
    fetchTrendingDataFailure: (state, action: PayloadAction<string>) => {
      state.trending_loading = false;
      state.error = action.payload;
    },
    fetchNftSalesDataRequest: (state) => {
      state.NftSales_loading = true;
      state.error = null;
    },
    fetchNftSalesDataSuccess: (state, action: PayloadAction<Nft_sales[]>) => {
      state.NftSales_loading = false;
      state.tabData = { ...state.tabData, [state.activeTab]: action.payload };
    },
    fetchNftSalesDataFailure: (state, action: PayloadAction<string>) => {
      state.NftSales_loading = false;
      state.error = action.payload;
    },
    fetchTopMintDataRequest: (state) => {
      state.topMint_loading = true;
      state.error = null;
    },
    fetchTopMintDataSuccess: (state, action: PayloadAction<TopMintData[]>) => {
      state.topMint_loading = false;
      state.tabData = { ...state.tabData, [state.activeTab]: action.payload };
    },
    fetchTopMintDataFailure: (state, action: PayloadAction<string>) => {
      state.topMint_loading = false;
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
  },
});

export const {
  fetchTrendingDataRequest,
  fetchTrendingDataSuccess,
  fetchTrendingDataFailure,
  fetchNftSalesDataFailure,
  fetchNftSalesDataRequest,
  fetchNftSalesDataSuccess,
  fetchTopMintDataRequest,
  fetchTopMintDataSuccess,
  fetchTopMintDataFailure,
  setActiveTab,
  setTabData,
  setTime,
  setVolume_sales,
} = homeSlice.actions;

export default homeSlice.reducer;
