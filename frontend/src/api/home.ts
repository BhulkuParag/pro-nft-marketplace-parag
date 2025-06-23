import AXIOS from './axios';

export const fetchTrendingData = async (): Promise<any> => {
  const response = await AXIOS.get('https://api.reservoir.tools/collections/trending/v1?period=24h&sortBy=volume');
  return response.data.collections;
};
