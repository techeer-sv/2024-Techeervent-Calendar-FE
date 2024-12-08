import axiosClient from '@/services/axios.config';

interface User {
  userId: number;
  userName: string;
  userYear: number;
}

interface FetchUsersResponse {
  status: number;
  message: string;
  data: User[];
}

export const fetchUsers = async (
  userName: string
): Promise<FetchUsersResponse> => {
  const response = await axiosClient.get('/user', {
    params: { userName },
  });
  return response.data;
};
