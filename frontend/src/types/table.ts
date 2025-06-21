// export interface RowData {
//   id: number;
//   Collection: string;
//   'Floor Price(24H)': number;
//   'Top Bid(24H)': number;
//   'Volume(24H)': number;
//   'Volume (1 Day)': number;
//   'Volume (7 Day)': number;
//   'Collection Volume (1 day)': number;
//   'Collection Volume (7 day)': number;
//   Owners: number;
//   Supply: number;
// }

export interface RowData {
  name: string;
  id: string;
  image: string;
  volume: number;
  openseaVerificationStatus: boolean;
  topBid: {
    price: {
      amount: {
        usd: number;
        decimal: number;
      };
    };
  };
  floorAsk: {
    price: {
      amount: {
        usd: number;
        decimal: number;
      };
    };
  };
}
