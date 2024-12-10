import { User, Drawlist } from '@/types/common';

interface Winner {
  winnerId: number;
  user: User;
  drawName: Drawlist;
}

export interface GetWinnersResponse {
  status: number;
  message: string;
  data: Winner[];
}
