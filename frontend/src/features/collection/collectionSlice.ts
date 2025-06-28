import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ActivityType, ItemDetails, RowData } from '../../types/table';
import { AddSortIcon, InfoIconSortIcon } from '../../utils/Table/headerRenderer';
import { AddressCell, CollectionCell, PriceCell, TypeCell } from '../../utils/Table/cellRenderer';

interface CollectionState {
  activeTab: string;
  itemDetails: ItemDetails;
  tabData: { [key: string]: any };
  columnDefsMap: Record<string, any[]>;
  loading: boolean;
  collection: string;
  sortBy: 'eventTimestamp' | 'floorAskPrice' | '';
  includeMetadata: boolean;
  limit: number;
  type:
    | 'ask_cancel'
    | 'sale'
    | 'mint'
    | 'transfer'
    | 'ask'
    | 'bid'
    | 'bid_cancel'
    | '';
  error: string | null;
}

const initialState: CollectionState = {
  activeTab: 'overview',
  itemDetails: {},
  includeMetadata: false,
  type: 'mint',
  collection: '0x5af0d9827e0c53e4799bb226655a1de152a425a5',
  sortBy: 'floorAskPrice',
  limit: 40,
  tabData: {},
  columnDefsMap: {
    overview: [],
    items: [],
    ai_valuation: [],
    standout: [],
    activity: [
        {
          headerName: 'Collection Name',
          field: 'name',
          minWidth: 300,
          cellRenderer: CollectionCell,
        },
        {
          headerName: 'Type',
          field: 'type',
          // width: 180,
          cellRenderer: TypeCell,
          headerComponent: AddSortIcon,
        },
        {
          headerName: 'Floor Price',
          field: 'price',
          minWidth: 140,
          cellRenderer: PriceCell,
          headerComponent: InfoIconSortIcon,
        },
        {
          headerName: 'From',
          field: 'from',
          // width: 100,
          headerComponent: AddSortIcon,
        },
        {
          headerName: 'To',
          field: 'to',
          // // width: 140,
          cellRenderer: AddressCell,
          headerComponent: AddSortIcon,
          // cellStyle: { fontWeight: 700, textAlign: 'right' },
        },
        {
          headerName: 'Rarity Score',
          field: 'RarityScore',
          // width: 140,
          headerComponent: AddSortIcon,
          // cellStyle: { fontWeight: 700, textAlign: 'right' },
        },
        {
          headerName: 'Quantity',
          field: 'Quantity',
          // width: 140,
          headerComponent: AddSortIcon,
          // cellStyle: { fontWeight: 700, textAlign: 'right' },
        },
        {
          headerName: 'Rarity Rank',
          field: 'RarityRank',
          // width: 140,
          headerComponent: AddSortIcon,
          // cellStyle: { fontWeight: 700, textAlign: 'right' },
        },
        {
          headerName: 'Time',
          field: 'time',
          // width: 140,
          headerComponent: AddSortIcon,
          // cellStyle: { fontWeight: 700, textAlign: 'right' },
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
    fetchItemsDataRequest: (state) => {
      state.loading = true;
      state.error = null;
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
  setActiveTab,
  setTabData,
  setCollection,
} = collectionSlice.actions;

export default collectionSlice.reducer;
