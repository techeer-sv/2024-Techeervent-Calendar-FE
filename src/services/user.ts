import axiosClient from '@/config/axios.config';
import { SearchUsersResponse } from '@/types/api/user';

export const searchUsers = async (
  userName: string
): Promise<SearchUsersResponse> => {
  const response = await axiosClient.get('/user', {
    params: { userName },
  });
  return response.data;
};
