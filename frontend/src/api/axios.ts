import axios from 'axios';

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'http://65.1.94.196:8085/';

const AXIOS = axios.create({
  baseURL: BASE_URL,
  // timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
});

// Request Interceptor
AXIOS.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('token');
    // if (token && config.headers) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
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
