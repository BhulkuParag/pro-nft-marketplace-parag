import type { RowData } from '../types/table';
import AXIOS from './axios';

export const fetchTrendingData = async (
  period: string,
  sortBy: string
): Promise<RowData[]> => {
  const response = await AXIOS.get(
    `/api/v1/reservoir/trending-api?period=${period}&sortBy=${sortBy}`
  );
  return response.data.data.collections;
};
