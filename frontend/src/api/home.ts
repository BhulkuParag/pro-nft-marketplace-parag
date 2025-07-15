import { Axios } from 'axios';
import type { GlobalSearchT, HomeCardData } from '../types/home';
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

interface HomeCard {
  data?: {
    stats?: HomeCardData;
  };
}

export const fetchHomeCard = async (
  period: string,
  chainId?: string
): Promise<HomeCardData> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.HomeCard, chainId, {
    period,
  });
  const response = await AXIOS.get<HomeCard>(url);
  return response.data?.data?.stats ?? {};
};

export const fetchTrendingData = async (
  period: string,
  sortBy: string,
  chainId?: string
): Promise<RowData[]> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.TRENDING, chainId, {
    period,
    sortBy,
  });
  const response = await AXIOS.get<TrendingApiResponse>(url);
  return response.data?.data?.collections ?? [];
};

export const fetchCollectionData = async (
  sortBy: string,
  chainId?: string
): Promise<RowData[]> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.TRENDING, chainId, {
    sortBy,
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

export const fetchTopSalesCardData = async (
  includeTokenMetadata: boolean,
  chainId?: string
): Promise<any[]> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.NFT_SALES, chainId, {
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
  gloabalSearchValue: string,
  chainId?: string
): Promise<GlobalSearchT[]> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.COLLECTION_SEARCH, chainId, {
    prefix: gloabalSearchValue,
  });
  const response = await AXIOS.get<GlobalSearchApiResponse>(url);
  return response.data?.data?.collections ?? [];
};
