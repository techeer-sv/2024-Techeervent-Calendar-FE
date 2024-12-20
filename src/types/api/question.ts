import { Meta, QA } from '@/types/common';

export interface GetRandomQuestionResponse {
  status: number;
  message: string;
  data: {
    answers: QA[];
    meta: Meta;
  };
}
