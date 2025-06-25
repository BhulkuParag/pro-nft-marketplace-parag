import type { RowData } from '../types/table';
import AXIOS from './axios';

export const fetchTrendingData = async (): Promise<RowData[] | unknown> => {
  const response = await AXIOS.get(
    `/api/v1/reservoir/trending-api?period=24h&sortBy=volume`
  );
  return response.data.data.collections;
};
