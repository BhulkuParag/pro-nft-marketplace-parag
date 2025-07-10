import type { AiValuationLoad, HoldersT, StandoutT } from '../types/collection';
import type {
  ActivityType,
  ItemDetails,
  OverviewDetailType,
  RowData,
} from '../types/table';
import { API_CONFIG, buildApiUrl } from './api_config';
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

interface AiValuationLoadApiResponse {
  data?: AiValuationLoad;
}

interface StandoutApiResponse {
  data?: StandoutT;
}

interface HoldersApiResponse {
  data?: HoldersT;
}

export const fetchItemsData = async (
  limit: number,
  sortBy: string,
  contract: string,
  chainId?: string
): Promise<RowData[]> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.TOKENS, chainId, {
    contract,
    sortBy: 'floorAskPrice',
    limit,
  });
  const response = await AXIOS.get<ItemsApiResponse>(url);
  return response.data?.data?.tokens ?? [];
};

export const fetchItemDetailData = async (
  token: string,
  sortBy: string,
  chainId?: string
): Promise<ItemDetails[]> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.ITEM_DETAILS, chainId, {
    tokens: token,
    sortBy,
  });
  const response = await AXIOS.get<ItemDetailApiResponse>(url);
  return response.data?.data?.tokens ?? [];
};

export const fetchActivityData = async (
  includeMetadata: boolean,
  type: string[],
  sortBy: string,
  chainId?: string
): Promise<ActivityType[]> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.ACTIVITY, chainId, {
    sortBy: 'eventTimestamp',
    includeMetadata,
    type,
  });
  const response = await AXIOS.get<ActivityApiResponse>(url);
  return response.data?.data?.activities ?? [];
};

export const fetchOverviewDetailData = async (
  contract: string,
  chainId?: string
): Promise<OverviewDetailType[]> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.COLLECTIONS_V7, chainId, {
    contract,
  });
  const response = await AXIOS.get<OverviewDetailApiResponse>(url);
  return response.data?.data?.collections ?? [];
};

export const fetchAiValuationLoadData = async (
  chainId?: string
): Promise<AiValuationLoad> => {
  const response = await AXIOS.get<AiValuationLoadApiResponse>(
    `/api/v1/reservoir/collection/v1?chain=${chainId}`
  );
  return response.data?.data ?? {};
};

export const fetchStandoutData = async (
  collection: string,
  type: string,
  chainId?: string
): Promise<StandoutT> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.STANDOUT, chainId, {
    collection,
    type,
  });
  const response = await AXIOS.get<StandoutApiResponse>(url);
  return response.data?.data ?? {};
};

export const fetchStandoutHoldersData = async (
  collection: string,
  type: string,
  period: string = '7d', // Default period is 7 days
  chainId?: string
): Promise<HoldersT> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.STANDOUT_HOLDERS, chainId, {
    collection,
    type,
    period
  });
  const response = await AXIOS.get<HoldersApiResponse>(url);
  return response.data?.data ?? {};
};

export const fetchTraitsDataData = async (
  chainId?: string
): Promise<string[]> => {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.STANDOUT_HOLDERS, chainId, {
  });
  const response = await AXIOS.get<any>(url);
  return response.data?.data ?? {};
};
