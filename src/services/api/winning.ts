import axiosClient from '@/services/axios.config';
import { GetWinnersResponse } from '@/types/api/winning';

export const fetchWinners = async (): Promise<GetWinnersResponse> => {
  const response = await axiosClient.get('/winning');
  return response.data;
};
