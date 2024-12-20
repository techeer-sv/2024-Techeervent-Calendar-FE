import axiosClient from '@/config/axios.config';
import { GetRandomQuestionResponse } from '@/types/api/question';

export const fetchRandomQuestion = async (
  userId: number
): Promise<GetRandomQuestionResponse> => {
  const response = await axiosClient.get(`/question/${userId}`);
  return response.data;
};
