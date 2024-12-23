import { User } from '@/types/common';
import { ApiResponse } from './apiResponse';

interface Winner {
  winnerId: number;
  user: User;
  drawName: string;
}

export type GetWinnersResponse = ApiResponse<Winner[]>;
