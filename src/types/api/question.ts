import { Meta, QA } from '@/types/common';

export interface GetRandomQuestionResponse {
  status: number;
  message: string;
  data: {
    answers: QA[];
    meta: Meta;
  };
}

export interface GetRandomResponse {
  status: number;
  message: string;
  data: {
    questionId: number;
    questionContent: string;
  };
}
