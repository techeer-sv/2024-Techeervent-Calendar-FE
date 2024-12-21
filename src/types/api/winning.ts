import { User } from '@/types/common';

interface Winner {
  winnerId: number;
  user: User;
  drawName: string;
}

export interface GetWinnersResponse {
  status: number;
  message: string;
  data: Winner[];
}
