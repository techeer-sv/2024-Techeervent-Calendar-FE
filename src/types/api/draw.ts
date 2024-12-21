interface Draw {
  drawId: number;
  drawName: string;
  drawTotal: number;
}

export interface GetDrawlistResponse {
  status: number;
  message: string;
  data: Draw[];
}
