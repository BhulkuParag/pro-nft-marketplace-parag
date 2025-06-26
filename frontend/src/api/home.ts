import type { RowData } from '../types/table';
import AXIOS from './axios';

// Define the expected response shapes
interface TrendingApiResponse {
  data?: {
    collections?: RowData[];
  };
}

interface NftSalesApiResponse {
  data?: {
    sales?: any[];
  };
}

export const fetchTrendingData = async (
  period: string,
  sortBy: string
): Promise<RowData[]> => {
  const response = await AXIOS.get<TrendingApiResponse>(
    `/api/v1/reservoir/trending-api?period=${period}&sortBy=${sortBy}`
  );
  return response.data?.data?.collections ?? [];
};

export const fetchNftSalesData = async (
  includeTokenMetadata: boolean
): Promise<any[]> => {
  const response = await AXIOS.get<NftSalesApiResponse>(
    `/api/v1/reservoir/nft-sales?includeTokenMetadata=${includeTokenMetadata}`
  );
  return response.data?.data?.sales ?? [];
};