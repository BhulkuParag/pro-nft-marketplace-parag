import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
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
  AddSortIcon,
  InfoIconSortIcon,
} from '../../utils/Table/headerRenderer';
import type { ICellRendererParams } from 'ag-grid-community';
import type { GlobalSearchT } from '../../types/home';
import type { AiValuationLoad } from '../../types/collection';

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
  compareList: [
    {
      volume: 215.87998,
      volumePercentChange: 179.94,
      count: 22,
      countPercentChange: 214,
      sampleImages: [
        'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf2sE%2BcsbkeVl%2B4W8jWCuUkuov0PzHyR9IJ1xIZwBbFfEA%2Bwbk8y%2FqPIB7%2Bl8cd71OsX1l0QES%2BRo2FLGNDZ26xbIyg93P8%2BhYRL6To8RefaZmGKv3Fe%2BrxltP949wGMNRA%3D%3D',
        'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf2sE%2BcsbkeVl%2B4W8jWCuUkuov0PzHyR9IJ1xIZwBbFfEA%2Bwbk8y%2FqPIB7%2Bl8cd71Op7urpdq%2FLVIo5lwstA%2FIEX%2FjN7zmEiLrUBmzR3hn%2BqYjgHmRotB2gBMtrDS8ftK1g%3D%3D',
        'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf2sE%2BcsbkeVl%2B4W8jWCuUkuov0PzHyR9IJ1xIZwBbFfEA%2Bwbk8y%2FqPIB7%2Bl8cd71OrktXopFUi0MEWS3mYS652pMk%2F%2BMdeBFvMFTkCVNPKlNmlmCosikFbR%2F58FFDtgAFA%3D%3D',
        'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf2sE%2BcsbkeVl%2B4W8jWCuUkuov0PzHyR9IJ1xIZwBbFfEA%2Bwbk8y%2FqPIB7%2Bl8cd71OjrMqPaC0mArrsn0zMc1HkQPNx8cKRk%2BXgVvlP%2BVEa8puGKUmqWuk3m44ScmT%2FhJ%2BQ%3D%3D',
      ],
      openseaVerificationStatus: 'verified',
      onSaleCount: 271,
      volumeChange: {
        '1day': 1.084885246638226,
        '7day': 1.068445525935246,
        '30day': 0.6555621576892184,
      },
      collectionVolume: {
        '1day': 215.87998,
        '7day': 1018.04451,
        '30day': 3710.42629,
        allTime: 535858.00198,
      },
      floorAskPercentChange: -0.7236860882856014,
      tokenCount: 8888,
      ownerCount: 4957,
      banner:
        'https://i.seadn.io/gcs/files/8a26e3de0f309089cbb1e5ab969fc0bc.png?w=500&auto=format',
      description:
        'Pudgy Penguins is a collection of 8,888 NFT’s, accelerating Web3 innovation through IP utilization and community empowerment. Embodying love, empathy, & compassion, the Pudgy Penguins are a beacon of good vibes & positivity for everyone. Each holder receives exclusive access to experiences, events, IP licensing opportunities and more. Let’s break through the boundaries of Web3 together.',
      floorAsk: {
        id: '0x661df9b56dd323228d507dba7813d978bf0089eb7aea2dd5cb69dfdc175739e8',
        sourceDomain: 'blur.io',
        price: {
          currency: {
            contract: '0x0000000000000000000000000000000000000000',
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
          },
          amount: {
            raw: '9599999700000000000',
            decimal: 9.6,
            usd: 24711.04932,
            native: 9.6,
          },
        },
        validFrom: 0,
        validUntil: 0,
      },
      topBid: {
        id: '0xb493473aca5f1c885ef592701ce8f3ec7f9bc234ca34f543557a821570b4df61',
        sourceDomain: 'blur.io',
        price: {
          currency: {
            contract: '0x0000000000a39bb272e79075ade125fd351887ac',
            name: 'Blur ETH',
            symbol: 'BETH',
            decimals: 18,
          },
          amount: {
            raw: '9310000000000000000',
            decimal: 9.31,
            usd: 23943.35956,
            native: 9.31,
          },
          netAmount: {
            raw: '9310000000000000000',
            decimal: 9.31,
            usd: 23943.35956,
            native: 9.31,
          },
        },
        maker: '0x0000000000a39bb272e79075ade125fd351887ac',
        validUntil: 0,
        validFrom: 0,
      },
      nsfw: false,
      spam: false,
      id: '0xbd3531da5cf5857e7cfaa92426877b022e612cf8',
      image:
        'https://img.reservoir.tools/images/v2/mainnet/rDrYz8pfL2FIiB4lkmFIWl2YJIbVYWi1ij0Ztqa%2B%2B5xQBB8%2BAV2STTiGPskKJRMyUQds%2FnSbhlmkVB6H2mqtG%2BBQTwYXZNKjFtZUa2zBWeCQZVZpzRWkoBa0Di7wsnh2cVSpQoImNHdfUiLIAqFBaA%3D%3D?width=250',
      name: 'Pudgy Penguins',
    },
  ],
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
        headerName: 'Collection Name',
        cellRenderer: CollectionRenderer,
        flex: 2,
        minWidth: 300,
      },
      {
        field: 'floorAsk',
        headerName: 'Floor Price (24H)',
        cellRenderer: ChipRenderer,
        headerComponent: InfoIconSortIcon,
        minWidth: 190,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.floorAsk?.price?.amount?.decimal.toFixed(2) ?? '',
      },
      {
        field: 'topBid',
        headerName: `Top Bid (24H)`,
        cellRenderer: ChipRenderer,
        headerComponent: InfoIconSortIcon,
        // cellRenderer: PriceRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.topBid?.price?.amount?.decimal.toFixed(2) ?? '-',
      },
      {
        field: 'volume',
        headerName: 'Volume (24H)',
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.volume?.toFixed(2) ?? '',
      },
      {
        field: 'volumeChange',
        headerName: 'Volume (1 Day)',
        cellRenderer: VolumeRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.volumeChange['1day']?.toFixed(2) ?? '',
      },
      {
        field: 'volumeChange',
        headerName: 'Volume (7 Day)',
        cellRenderer: VolumeRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.volumeChange['7day']?.toFixed(2) ?? '',
      },
      {
        field: 'collectionVolume',
        headerName: 'Collection Volume (1 day)',
        cellRenderer: NormalRenderer,
        minWidth: 200,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.collectionVolume['1day']?.toFixed(2) ?? '',
      },
      {
        field: 'collectionVolume',
        headerName: 'Collection Volume (7 day)',
        cellRenderer: NormalRenderer,
        minWidth: 200,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.collectionVolume['7day']?.toFixed(2) ?? '',
      },
      {
        field: 'ownerCount',
        headerName: 'Owners',
        cellRenderer: NormalRenderer,
        headerComponent: AddSortIcon,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.ownerCount?.toFixed(0) ?? '',
      },
      {
        field: 'Supply',
        headerName: 'Supply',
        cellRenderer: SupplyRenderer,
        headerComponent: AddSortIcon,
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
        valueGetter: (params: ICellRendererParams<NftSalesT>) =>
          params.node?.rowIndex != null ? params.node.rowIndex + 1 : '',
      },
      {
        field: 'name',
        headerName: 'Collection Name',
        cellRenderer: CollectionRenderer,
        headerComponent: AddSortIcon,
        flex: 2,
        minWidth: 300,
        valueGetter: (params: ICellRendererParams<NftSalesT>) =>
          params.data?.token?.name ?? '',
      },
      {
        field: 'contract',
        headerName: 'Contract',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<NftSalesT>) =>
          params.data?.token.contract ?? '',
      },
      {
        field: 'tokenId',
        headerName: 'Token ID',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<NftSalesT>) =>
          params.data?.token.tokenId ?? '',
      },
      {
        field: 'Floor Price',
        headerName: 'Floor Price',
        headerComponent: AddSortIcon,
        cellRenderer: PriceRenderer,
        // minWidth: 110,
      },
      {
        field: 'usd',
        headerName: 'Amount',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<NftSalesT>) =>
          params.data?.price.amount.usd.toFixed(0) ?? '',
      },
      {
        field: 'washTradingScore',
        headerName: 'Wash Trading Score',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<NftSalesT>) =>
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
    top_sales: [
      {
        field: 'id',
        headerName: '',
        minWidth: 70,
        maxWidth: 70,
        cellRenderer: StarRenderer,
        valueGetter: (params: ICellRendererParams<TopSalesT>) =>
          params.node?.rowIndex != null ? params.node.rowIndex + 1 : '',
      },
      {
        field: 'name',
        headerName: 'Collection Name',
        cellRenderer: CollectionRenderer,
        flex: 2,
        minWidth: 300,
        valueGetter: (params: ICellRendererParams<TopSalesT>) =>
          params.data?.token.collectiton?.name ?? '',
      },
      {
        field: 'token',
        headerName: 'Token',
        cellRenderer: NormalRenderer,
        valueGetter: (params: ICellRendererParams<TopSalesT>) =>
          params.data?.token.name ?? '',
        // minWidth: 110,
      },
      {
        field: 'contract',
        headerName: 'Contract',
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<TopSalesT>) =>
          params.data?.token.contract ?? '',
      },
      {
        field: 'tokenId',
        headerName: 'Token ID',
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<TopSalesT>) =>
          params.data?.token.tokenId ?? '',
      },
      {
        field: 'price',
        headerName: 'Price (ETH)',
        cellRenderer: PriceRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<TopSalesT>) =>
          params.data?.price.amount.row ?? '',
      },
      {
        field: 'price',
        headerName: 'Price (USD)',
        cellRenderer: PriceRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<TopSalesT>) =>
          params.data?.price.amount.usd ?? '',
      },
      {
        field: 'time',
        headerName: 'Time',
        cellRenderer: NormalRenderer,
        // minWidth: 120,
      },
    ],
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
          params.data?.name?.toString(),
      },
      {
        field: 'id',
        headerName: 'Contract',
        cellRenderer: HoverRenderer,
        // minWidth: 160,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.id?.slice(0, 6) + '...' + params.data?.id?.slice(-4),
      },
      {
        field: 'mintCount',
        headerName: 'Mints',
        headerComponent: AddSortIcon,
        cellRenderer: PriceRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.mintCount?.toFixed(0) ?? '',
      },
      {
        field: 'ownerCount',
        headerName: 'Notable Minters',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.ownerCount?.toFixed(0) ?? '',
      },
      {
        field: 'mintPrice',
        headerName: 'Mint Price',
        headerComponent: AddSortIcon,
        cellRenderer: PriceRenderer,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.mintPrice?.amount?.decimal?.toFixed(2) ?? '',
      },
      {
        field: 'tokenCount',
        headerName: 'Total Supply',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.tokenCount?.toString() ?? '',
      },
      {
        field: 'mintVolume',
        headerName: 'Mint Volume',
        headerComponent: AddSortIcon,
        cellRenderer: PriceRenderer,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.mintVolume?.toFixed(2) ?? '',
      },
    ],
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
      state.compareList = action.payload;
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
  setTimeComapre
} = homeSlice.actions;

export default homeSlice.reducer;
