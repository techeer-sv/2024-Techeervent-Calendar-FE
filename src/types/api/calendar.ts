import { QA } from '../common';

interface Calendar {
  calendarId: number;
  calendarDate: number;
  qa: QA;
  drawName: string;
}

export interface GetUserQAResponse {
  status: number;
  message: string;
  data: Calendar[];
}

export interface GetAnswerCountResponse {
  status: number;
  message: string;
  data: {
    answerCount: number;
  };
}

export interface SubmitAttendanceAndPrize {
  status: number;
  message: string;
  data: {
    drawName: string;
  };
}
