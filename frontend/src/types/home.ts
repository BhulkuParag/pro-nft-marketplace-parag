export interface GlobalSearchT {
  chainId: 0;
  id: 'string';
  name: 'string';
  image: 'string';
  openseaVerificationStatus: 'verified' | 'not_requested';
  tokenCount: 'string';
  allTimeVolume: 'string';
  floorAskPrice: 0;
  contract: 'string';
}

export interface HomeCardData {
  '1day'?: {
    mintCount: 0;
    saleCount: 0;
    totalCount: 0;
    mintVolume: 0;
    saleVolume: 0;
    totalVolume: 0;
  };
  '7day'?: {
    mintCount: 0;
    saleCount: 0;
    totalCount: 0;
    mintVolume: 0;
    saleVolume: 0;
    totalVolume: 0;
  };
}
