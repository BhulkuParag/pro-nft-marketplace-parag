import type {
  ActivityType,
  ItemDetails,
  OverviewDetailType,
  RowData,
} from '../types/table';
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

interface ActivityApiResponse {
  data?: {
    activities?: ActivityType[];
  };
}

interface OverviewDetailApiResponse {
  data?: {
    collections?: OverviewDetailType[];
  };
}

export const fetchItemsData = async (
  limit: number,
  sortBy: string,
  collection: string
): Promise<RowData[]> => {
  const response = await AXIOS.get<ItemsApiResponse>(
    `/api/v1/reservoir/tokens?collection=${collection}&sortBy=${'floorAskPrice'}&limit=${limit}`
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

export const fetchActivityData = async (
  includeMetadata: boolean,
  type: string,
  sortBy: string
): Promise<ActivityType[]> => {
  const response = await AXIOS.get<ActivityApiResponse>(
    `/api/v1/reservoir/activity?sortBy=${'eventTimestamp'}&includeMetadata=${includeMetadata}&type=${type}`
  );
  return response.data?.data?.activities ?? [];
};

export const fetchOverviewDetailData = async (
  contract: string
): Promise<OverviewDetailType[]> => {
  const response = await AXIOS.get<OverviewDetailApiResponse>(
    `/api/v1/reservoir/collections/v7?contract=${contract}`
  );
  return response.data?.data?.collections ?? [];
};
