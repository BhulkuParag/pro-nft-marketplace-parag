import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RowData } from '../../types/table';
import {
  CollectionRenderer,
  NormalRenderer,
  PriceRenderer,
  StarRenderer,
  VolumeRenderer,
} from '../../utils/Table/cellRenderer';
import { AddSortIcon, InfoIcon } from '../../utils/Table/headerRenderer';
import type { ICellRendererParams } from 'ag-grid-community';

interface HomeState {
  activeTab: string;
  tabData: { [key: string]: RowData[] };
  columnDefsMap: Record<string, any[]>;
  volume_sales: string;
  trending_loading: boolean;
  error: string | null;
}

const initialState: HomeState = {
  activeTab: 'trending',
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
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.floorAsk?.price?.amount?.decimal.toFixed(2) ?? '',
      },
      {
        field: 'topBid',
        headerName: 'Top Bid (24H)',
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
      // {
      //   field: 'Supply',
      //   headerName: 'Supply',
      //   headerComponent: AddSortIcon,
      //   cellRenderer: SupplyRenderer,
      //   minWidth: 120,
      // },
    ],
    nft_sales: [],
    top_sales: [],
    top_mint_ranking: [],
  },
  volume_sales: 'Volume',
  trending_loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    fetchTrendingDataRequest(state) {
      state.trending_loading = true;
      state.error = null;
    },
    fetchTrendingDataSuccess(state, action: PayloadAction<any>) {
      state.trending_loading = false;
      state.tabData[state.activeTab] = action.payload;
    },
    fetchTrendingDataFailure(state, action: PayloadAction<string>) {
      state.trending_loading = false;
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
  },
});

export const {
  fetchTrendingDataRequest,
  fetchTrendingDataSuccess,
  fetchTrendingDataFailure,
  setActiveTab,
  setTabData,
} = homeSlice.actions;

export default homeSlice.reducer;
