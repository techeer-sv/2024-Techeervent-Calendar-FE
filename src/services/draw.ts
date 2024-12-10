import axiosClient from '@/config/axios.config';
import { GetDrawlistResponse } from '@/types/api/draw';

export const fetchDrawlist = async (): Promise<GetDrawlistResponse> => {
  const response = await axiosClient.get('/draw');
  return response.data;
};
