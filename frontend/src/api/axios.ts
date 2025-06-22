import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'https://api.example.com';

const AXIOS = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
AXIOS.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => console.log(error)
);

// Response Interceptor
AXIOS.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // handle unauthorized logic
      console.error('Unauthorized! Logging out...');
    }
    return console.log(error);
  }
);

export default AXIOS;
