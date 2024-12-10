import { User } from '@/types/common';

export interface SearchUsersResponse {
  status: number;
  message: string;
  data: User[];
}
