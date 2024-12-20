import axiosClient from '@/config/axios.config';
import {
  GetUserQAResponse,
  GetAnswerCountResponse,
  SubmitAttendanceAndPrize,
} from '@/types/api/calendar';

export const fetchUserQA = async (
  userId: number
): Promise<GetUserQAResponse> => {
  const response = await axiosClient.get(`/calendar/${userId}`);
  return response.data;
};

export const searchUserQA = async (
  offset: number,
  limit: number,
  author: string
): Promise<GetUserQAResponse> => {
  const response = await axiosClient.get('/calendar/answer', {
    params: { offset, limit, author },
  });
  return response.data;
};

export const fetchAnswerCount = async (): Promise<GetAnswerCountResponse> => {
  const response = await axiosClient.get('/calendar/answer/count');
  return response.data;
};

export const submitAttendanceAndPrize = async (data: {
  userId: number;
  calendarDate: number;
  questionId: number;
  calendarAnswer: string;
}): Promise<SubmitAttendanceAndPrize> => {
  const response = await axiosClient.post('/calendar', data);
  return response.data;
};
