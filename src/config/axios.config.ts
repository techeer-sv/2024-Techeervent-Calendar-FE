import axios, { AxiosError } from 'axios';
import { API_CONFIG } from '@/config/api.config';
import { ENV } from '@/config/env.config';

const isDev = ENV.MODE === 'development';

interface ApiErrorResponse {
  message?: string;
}

const axiosClient = axios.create(API_CONFIG);

axiosClient.interceptors.request.use(
  (config) => {
    if (isDev) console.log('[Request Config]:', config);
    return config;
  },
  (error) => {
    if (isDev) console.error('[Request Error]:', error);
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (isDev) console.log('[Response Data]:', response.data);
    return response;
  },
  (error: AxiosError<ApiErrorResponse>) => {
    const errorInfo = {
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
    };

    if (isDev) {
      console.error(`[API Error - ${error.config?.url}]:`, error.message);
      console.log('[Custom Error]:', errorInfo);
      if (errorInfo.status === 500)
        console.warn('[Server Error]: 잠시 후 다시 시도해주세요.');
    }

    return Promise.reject(errorInfo);
  }
);

export default axiosClient;
