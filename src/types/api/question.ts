import { Meta, QA } from '@/types/common';
import { ApiResponse } from './apiResponse';

export type GetRandomQuestionResponse = ApiResponse<{
  answers: QA[];
  meta: Meta;
}>;

export type GetRandomResponse = ApiResponse<{
  questionId: number;
  questionContent: string;
}>;
