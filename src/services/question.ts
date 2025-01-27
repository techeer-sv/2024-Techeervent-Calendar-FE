import axiosClient from '@/config/axios.config';
import { GetRandomResponse } from '@/types/api/question';

export const fetchRandomQuestion = async (
  userId: string
): Promise<GetRandomResponse> => {
  const response = await axiosClient.get(`/question/${userId}`);
  return response.data;
};
