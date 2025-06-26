import type { ColDef } from 'ag-grid-community';

export interface AGGridTableProps {
  columnDefs: ColDef<RowData>[];
  rowData: RowData[];
  loading?: boolean;
}
export interface RowData {
  name: string;
  id: string;
  banner: string;
  image: string;
  volume: number;
  ownerCount: number;
  openseaVerificationStatus: string;
  topBid: {
    price: {
      amount: {
        usd: number;
        decimal: number;
      };
    };
  };
  volumeChange: {
    '1day': number;
    '7day': number;
    '30day': number;
  };
  collectionVolume: {
    '1day': number;
    '7day': number;
    '30day': number;
    allTime: number;
  };
  floorAsk: {
    price: {
      amount: {
        usd: number;
        decimal: number;
      };
    };
  };
  sampleImages: string[];
}

export interface NftSalesT {
  id: string;
  token: {
    name: string;
    image: string;
    contract: string;
    tokenId: string;
  };
  price: {
    amount: {
      usd: number;
      decimal: number;
    };
  };
  volumeChange: {
    '1day': number;
    '7day': number;
    '30day': number;
  };
  collectionVolume: {
    '1day': number;
    '7day': number;
    '30day': number;
    allTime: number;
  };
  washTradingScore: number;
}

export interface TopSalesT {
  id: string;
  token: {
    name: string;
    image: string;
    contract: string;
    tokenId: string;
    collectiton: {
      id: string;
      name: string;
    };
  };
  price: {
    amount: {
      usd: number;
      decimal: number;
      row: string;
    };
  };
}
