import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  ActivityType,
  ItemDetails,
  OverviewDetailType,
  RowData,
} from '../../types/table';
import {
  AddSortIcon,
  InfoIconSortIcon,
} from '../../utils/Table/headerRenderer';
import {
  CollectionCell,
  NormalRenderer,
  PriceRenderer,
  StarRenderer,
  TypeCell,
} from '../../utils/Table/cellRenderer';
import type { ICellRendererParams } from 'ag-grid-community';
import type {
  AiValuationLoad,
  HoldersT,
  StandoutT,
} from '../../types/collection';
import { formatDistanceToNow } from 'date-fns';

interface CollectionState {
  activeTab: string;
  itemDetails: ItemDetails;
  tabData: { [key: string]: any };
  columnDefsMap: Record<string, any[]>;
  loading: boolean;
  contract: string;
  collection: string;
  sortBy: 'eventTimestamp' | 'floorAskPrice' | '';
  includeMetadata: boolean;
  limit: number;
  grid: string;
  type: string;
  standoutType: string;
  aiValuationLoad: AiValuationLoad;
  itemSearchValue: string;
  itemSearchData: any[];
  // type:
  //   | 'ask_cancel'
  //   | 'sale'
  //   | 'mint'
  //   | 'transfer'
  //   | 'ask'
  //   | 'bid'
  //   | 'bid_cancel'
  //   | '';
  error: string | null;
}

const initialState: CollectionState = {
  activeTab: 'overview',
  itemDetails: {},
  includeMetadata: true,
  type: 'mint',
  standoutType: 'sale',
  contract: '',
  collection: '',
  itemSearchValue: '',
  itemSearchData: [],
  sortBy: 'floorAskPrice',
  grid: '8',
  limit: 50,
  aiValuationLoad: {},
  tabData: {},
  columnDefsMap: {
    overview: [],
    items: [],
    ai_valuation: [],
    standout: [],
    activity: [
      {
        field: 'id',
        headerName: '',
        minWidth: 70,
        maxWidth: 70,
        cellRenderer: StarRenderer,
        valueGetter: (params: ICellRendererParams<ActivityType>) =>
          params.node?.rowIndex != null ? params.node.rowIndex + 1 : '',
      },
      {
        headerName: 'Collection Name',
        field: 'name',
        minWidth: 300,
        flex: 2,
        cellRenderer: CollectionCell,
        valueGetter: (params: ICellRendererParams<ActivityType>) =>
          params.data?.collection.collectionName ?? '-',
      },
      {
        headerName: 'Type',
        field: 'type',
        // width: 180,
        cellRenderer: TypeCell,
        headerComponent: AddSortIcon,
        valueGetter: (params: ICellRendererParams<ActivityType>) =>
          params.data?.type ?? '-',
      },
      {
        headerName: 'Floor Price',
        field: 'price',
        minWidth: 140,
        cellRenderer: PriceRenderer,
        headerComponent: InfoIconSortIcon,
        valueGetter: (params: ICellRendererParams<ActivityType>) =>
          params.data?.price.amount.decimal ?? '-',
      },
      {
        headerName: 'From',
        field: 'from',
        // width: 100,
        cellRenderer: NormalRenderer,
        headerComponent: AddSortIcon,
        valueGetter: (params: ICellRendererParams<ActivityType>) =>
          params.data?.fromAddress
            ? params.data?.fromAddress?.slice(0, 4) +
              '...' +
              params.data?.fromAddress?.slice(-4)
            : '-',
      },
      {
        headerName: 'To',
        field: 'to',
        // // width: 140,
        cellRenderer: NormalRenderer,
        headerComponent: AddSortIcon,
        valueGetter: (params: ICellRendererParams<ActivityType>) =>
          params.data?.toAddress
            ? params.data?.toAddress?.slice(0, 4) +
              '...' +
              params.data?.toAddress?.slice(-4)
            : '-',
      },
      {
        headerName: 'Rarity Score',
        field: 'RarityScore',
        // width: 140,
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        valueGetter: (params: ICellRendererParams<ActivityType>) =>
          params.data?.token.rarityScore ?? '-',
      },
      {
        headerName: 'Quantity',
        field: 'Quantity',
        // width: 140,
        cellRenderer: NormalRenderer,
        headerComponent: AddSortIcon,
        valueGetter: (params: ICellRendererParams<ActivityType>) =>
          params.data?.amount ?? '-',
      },
      {
        headerName: 'Rarity Rank',
        field: 'RarityRank',
        // width: 140,
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        valueGetter: (params: ICellRendererParams<ActivityType>) =>
          params.data?.token.rarityRank ?? '-',
      },
      {
        headerName: 'Time',
        field: 'time',
        // width: 140,
        cellRenderer: NormalRenderer,
        headerComponent: AddSortIcon,
        valueGetter: (params: ICellRendererParams<ActivityType>) =>
          params.data?.timestamp
            ? formatDistanceToNow(new Date(params.data.timestamp * 1000), {
                addSuffix: true,
              })
            : '-',
      },
    ],
  },
  loading: false,
  error: null,
};

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    fetchItemsDataRequest: (
      state,
      action: PayloadAction<{ contract: string; limit: number }>
    ) => {
      state.loading = true;
      state.contract = action.payload.contract;
      state.error = null;
      state.limit = action.payload.limit;
    },
    fetchItemsDataSuccess: (state, action: PayloadAction<RowData[]>) => {
      state.loading = false;
      state.tabData = { ...state.tabData, [state.activeTab]: action.payload };
    },
    fetchItemsDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchItemDetailsDataRequest: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
      state.contract = action.payload;
    },
    fetchItemDetailsDataSuccess: (
      state,
      action: PayloadAction<ItemDetails[]>
    ) => {
      state.loading = false;
      console.log(action.payload[0]);
      state.itemDetails = action.payload[0];
    },
    fetchItemDetailsDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchActivityDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchActivityDataSuccess: (
      state,
      action: PayloadAction<ActivityType[]>
    ) => {
      state.loading = false;
      state.tabData = { ...state.tabData, [state.activeTab]: action.payload };
    },
    fetchActivityDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchOverviewDetailDataRequest: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
      state.contract = action.payload;
    },
    fetchOverviewDetailDataSuccess: (
      state,
      action: PayloadAction<OverviewDetailType[]>
    ) => {
      state.loading = false;
      state.tabData = {
        ...state.tabData,
        [state.activeTab]: action.payload[0],
      };
    },
    fetchOverviewDetailDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchAiValuationLoadDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchAiValuationLoadDataSuccess: (
      state,
      action: PayloadAction<AiValuationLoad>
    ) => {
      console.log('action.payload', action.payload);
      state.loading = false;
      state.aiValuationLoad = action.payload;
    },
    fetchAiValuationLoadDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchStandoutSaleDataRequest: (
      state,
      action: PayloadAction<{ contract: string; type: string }>
    ) => {
      state.loading = true;
      state.error = null;
      state.standoutType = action.payload.type;
      state.collection = action.payload?.contract;
    },
    fetchStandoutSaleDataSuccess: (state, action: PayloadAction<StandoutT>) => {
      state.loading = false;
      state.tabData = {
        ...state.tabData,
        [state.activeTab]: { sale: action.payload },
      };
    },
    fetchStandoutSaleDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.tabData = {
        ...state.tabData,
        [state.activeTab]: { sale: {} },
      };
    },
    fetchStandoutListingDataRequest: (
      state,
      action: PayloadAction<{ contract: string; type: string }>
    ) => {
      state.loading = true;
      state.error = null;
      state.standoutType = action.payload.type;
      state.collection = action.payload?.contract;
    },
    fetchStandoutListingDataSuccess: (
      state,
      action: PayloadAction<StandoutT>
    ) => {
      state.loading = false;
      state.tabData = {
        ...state.tabData,
        [state.activeTab]: {
          ...state.tabData[state.activeTab],
          listing: action.payload,
        },
      };
    },
    fetchStandoutListingDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.tabData = {
        ...state.tabData,
        [state.activeTab]: { listing: {} },
      };
    },
    fetchStandoutTransferDataRequest: (
      state,
      action: PayloadAction<{ contract: string; type: string }>
    ) => {
      state.loading = true;
      state.error = null;
      state.standoutType = action.payload.type;
      state.collection = action.payload?.contract;
    },
    fetchStandoutTransferDataSuccess: (
      state,
      action: PayloadAction<StandoutT>
    ) => {
      state.loading = false;
      state.tabData = {
        ...state.tabData,
        [state.activeTab]: {
          ...state.tabData[state.activeTab],
          transfer: action.payload,
        },
      };
    },
    fetchStandoutTransferDataFailure: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
      state.tabData = {
        ...state.tabData,
        [state.activeTab]: { transfer: {} },
      };
    },
    fetchStandoutHoldersDataRequest: (
      state,
      action: PayloadAction<{ contract: string; type: string }>
    ) => {
      state.loading = true;
      state.error = null;
      state.standoutType = action.payload.type;
      state.collection = action.payload?.contract;
    },
    fetchStandoutHoldersDataSuccess: (
      state,
      action: PayloadAction<HoldersT>
    ) => {
      state.loading = false;
      state.tabData = {
        ...state.tabData,
        [state.activeTab]: {
          ...state.tabData[state.activeTab],
          holders: action.payload,
        },
      };
    },
    fetchStandoutHoldersDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.tabData = {
        ...state.tabData,
        [state.activeTab]: { holders: {} },
      };
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    setTabData: (
      state,
      action: PayloadAction<{
        [key: string]: ItemDetails[];
      }>
    ) => {
      state.tabData = action.payload;
    },
    setCollection: (state, action: PayloadAction<string>) => {
      state.collection = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setGrid: (state, action: PayloadAction<string>) => {
      state.grid = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setItemSearchValue: (state, action: PayloadAction<string>) => {
      state.itemSearchValue = action.payload;
    },
    setItemSearchData: (state, action: PayloadAction<any[]>) => {
      state.itemSearchData = action.payload;
    },
  },
});

export const {
  fetchItemsDataRequest,
  fetchItemsDataSuccess,
  fetchItemsDataFailure,
  fetchItemDetailsDataRequest,
  fetchItemDetailsDataSuccess,
  fetchItemDetailsDataFailure,
  fetchActivityDataRequest,
  fetchActivityDataSuccess,
  fetchActivityDataFailure,
  fetchOverviewDetailDataRequest,
  fetchOverviewDetailDataSuccess,
  fetchOverviewDetailDataFailure,
  fetchAiValuationLoadDataRequest,
  fetchAiValuationLoadDataSuccess,
  fetchAiValuationLoadDataFailure,
  fetchStandoutSaleDataRequest,
  fetchStandoutSaleDataSuccess,
  fetchStandoutSaleDataFailure,
  fetchStandoutListingDataRequest,
  fetchStandoutListingDataSuccess,
  fetchStandoutListingDataFailure,
  fetchStandoutTransferDataRequest,
  fetchStandoutTransferDataSuccess,
  fetchStandoutTransferDataFailure,
  fetchStandoutHoldersDataRequest,
  fetchStandoutHoldersDataSuccess,
  fetchStandoutHoldersDataFailure,
  setActiveTab,
  setTabData,
  setCollection,
  setType,
  setGrid,
  setLimit,
  setItemSearchValue,
  setItemSearchData
} = collectionSlice.actions;

export default collectionSlice.reducer;
