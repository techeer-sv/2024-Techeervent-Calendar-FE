import { QA } from '../common';
import { ApiResponse } from './apiResponse';
export interface Calendar {
  calendarId: number;
  calendarDate: number;
  qa: QA;
  drawName: string;
}

export type GetUserQAResponse = ApiResponse<Calendar[]>;

export type GetAnswerCountResponse = ApiResponse<{
  answerCount: number;
}>;

export type SubmitAttendanceAndPrize = ApiResponse<{
  drawName: string;
}>;

export type FetchDateResponse = ApiResponse<number>;
