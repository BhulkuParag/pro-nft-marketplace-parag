export interface AiValuationLoad {
  name?: string;
  category?: string;
  verified?: boolean;
  description?: string;
  contract_address?: string;
  chain_id?: number;
  thumbnail_url?: string;
  thumbnail_palette?: string[];
  nft_count?: number;
  start_date?: string;
  social_media?: Array<{
    platform: string;
    url: string;
  }>;
  marketplace_links?: object[];
}
