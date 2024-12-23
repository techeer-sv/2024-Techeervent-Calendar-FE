import { ApiResponse } from '@/types/api/apiResponse';

interface Draw {
  drawId: number;
  drawName: string;
  drawTotal: number;
}

export type GetDrawlistResponse = ApiResponse<Draw[]>;
