import axios from './axios';

export const getAllUsers = async () => {
  const response = await axios.get('https://api.reservoir.tools/collections/trending/v1?period=24h&sortBy=volume');
  return response.data;
};
