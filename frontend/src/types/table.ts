import type { ColDef } from 'ag-grid-community';

export interface AGGridTableProps {
  columnDefs: ColDef<RowData>[];
  rowData: RowData[];
  loading?: boolean;
}
export interface RowData {
  name?: string;
  id?: string;
  banner?: string;
  image?: string;
  volume?: number;
  ownerCount?: number;
  openseaVerificationStatus?: string;
  RarityScore?: string;
  Quantity?: string;
  RarityRank?: string;
  topBid?: {
    price: {
      amount: {
        usd: number;
        decimal: number;
      };
    };
  };
  volumeChange?: {
    '1day': number;
    '7day': number;
    '30day': number;
  };
  collectionVolume?: {
    '1day': number;
    '7day': number;
    '30day': number;
    allTime: number;
  };
  floorAsk?: {
    price: {
      amount: {
        usd: number;
        decimal: number;
      };
    };
  };
  sampleImages?: string[];
  type?: string;
  from?: string;
  to?: string;
  price?: string;
  time?: string;
  field?: string;
}
