export interface GlobalSearchT {
  chainId: 0;
  id: string;
  name: string;
  image: string;
  openseaVerificationStatus: 'verified' | 'not_requested';
  tokenCount: string;
  allTimeVolume: string;
  floorAskPrice: 0;
  contract: string;
}

export interface HomeCardData {
  '1day': { label: string; name: string; value: number }[];
  '7day': { label: string; name: string; value: number }[];
}
