import { Drawlist } from '@/types/common';

interface Draw {
  drawId: number;
  drawName: Drawlist;
  drawTotal: number;
}

export interface GetDrawlistResponse {
  status: number;
  message: string;
  data: Draw[];
}
