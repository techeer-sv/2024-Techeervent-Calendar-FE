import { QA } from '@/types/common';

export interface GetRandomQuestionResponse {
  status: number;
  message: string;
  data: QA;
}
