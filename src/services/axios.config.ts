import axios, { AxiosError } from 'axios';

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1`,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error(`API Error [${error.config?.url}]: ${error.message}`);

    const status = error.response?.status;
    if (status === 500) {
      console.warn('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
