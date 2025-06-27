import type { ItemDetails, RowData } from '../types/table';
import AXIOS from './axios';

interface ItemsApiResponse {
  data?: {
    tokens?: RowData[];
  };
}

interface ItemDetailApiResponse {
  data?: {
    tokens?: ItemDetails[];
  };
}

export const fetchItemsData = async (
  limit: number,
  sortBy: string,
  collection: string
): Promise<RowData[]> => {
  const response = await AXIOS.get<ItemsApiResponse>(
    `/api/v1/reservoir/tokens?collection=${collection}&sortBy=${sortBy}&limit=${limit}`
  );
  return response.data?.data?.tokens ?? [];
};

export const fetchItemDetailData = async (
  token: string,
  sortBy: string
): Promise<ItemDetails[]> => {
  const response = await AXIOS.get<ItemDetailApiResponse>(
    `/api/v1/reservoir/tokens/item-details?tokens=${token}&sortBy=${sortBy}`
  );
  return response.data?.data?.tokens ?? [];
};
