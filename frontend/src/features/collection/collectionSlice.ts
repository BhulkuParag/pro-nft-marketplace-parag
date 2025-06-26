import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RowData } from '../../types/table';

interface CollectionState {
  activeTab: string;
  tabData: { [key: string]: any };
  columnDefsMap: Record<string, any[]>;
  loading: boolean;
  collection: string;
  sortBy: string;
  limit: number;
  error: string | null;
}

const initialState: CollectionState = {
  activeTab: 'overview',
  collection: '0x5af0d9827e0c53e4799bb226655a1de152a425a5',
  sortBy: 'floorAskPrice',
  limit: 40,
  tabData: {},
  columnDefsMap: {
    overview: [],
    items: [],
    ai_valuation: [],
    standout: [],
    activity: [],
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
    fetchItemDetailsDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchItemDetailsDataSuccess: (state, action: PayloadAction<RowData[]>) => {
      state.loading = false;
      state.tabData = { ...state.tabData, [state.activeTab]: action.payload };
    },
    fetchItemDetailsDataFailure: (state, action: PayloadAction<string>) => {
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
  setActiveTab,
  setTabData,
  setCollection,
} = collectionSlice.actions;

export default collectionSlice.reducer;
