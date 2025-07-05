import type { GlobalSearchT } from '../types/home';
import type { NftSalesT, RowData, TopMintData } from '../types/table';
import { API_CONFIG, buildApiUrl } from './api_config';
import AXIOS from './axios';

// Define the expected response shapes
interface TrendingApiResponse {
  data?: {
    collections?: RowData[];
  };
}

interface NftSalesApiResponse {
  data?: {
    sales?: NftSalesT[];
  };
}
interface TopSalesApiResponse {
  data?: {
    sales?: NftSalesT[];
  };
}

interface MintRankingApiResponse {
  data?: {
    mints?: TopMintData[];
  };
}

interface GlobalSearchApiResponse {
  data?: {
    collections?: GlobalSearchT[];
  };
}

export const fetchTrendingData = async (
  period: string,
  sortBy: string,
  chainId?: string
): Promise<RowData[]> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.TRENDING, chainId, {
    period,
    sortBy: 'floorAskPrice',
  });
  const response = await AXIOS.get<TrendingApiResponse>(url);
  return response.data?.data?.collections ?? [];
};

export const fetchNftSalesData = async (
  includeTokenMetadata: boolean,
  chainId?: string
): Promise<any[]> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.NFT_SALES, chainId, {
    includeTokenMetadata,
  });
  const response = await AXIOS.get<NftSalesApiResponse>(url);
  return response.data?.data?.sales ?? [];
};

export const fetchTopSalesData = async (
  includeTokenMetadata: boolean,
  chainId?: string
): Promise<any[]> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.TOP_SALES, chainId, {
    includeTokenMetadata,
  });
  const response = await AXIOS.get<TopSalesApiResponse>(url);
  return response.data?.data?.sales ?? [];
};

export const fetchMintRankingData = async (
  period: string,
  sortBy: string,
  chainId?: string
): Promise<TopMintData[]> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.TRENDING_MINTS, chainId, {
    period,
    sortBy,
  });
  const response = await AXIOS.get<MintRankingApiResponse>(url);
  return response.data?.data?.mints ?? [];
};

export const fetchGlobalSearchData = async (
  chain: number,
  gloabalSearchValue: string
): Promise<GlobalSearchT[]> => {
  const response = await AXIOS.get<GlobalSearchApiResponse>(
    `/api/v1/reservoir/collection/search?chainId=${chain}&prefix=${gloabalSearchValue}`
  );
  return response.data?.data?.collections ?? [];
};
