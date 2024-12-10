export interface User {
  userName: string;
  userYear: number;
  userId: number;
}

export interface QA {
  question: string;
  questionId: number;
  questionContent: string;
  answer: string;
  user: User;
}

export type Drawlist =
  | '마켓컬리 3만원 금액권'
  | '문화상품권'
  | '공차 기프티콘'
  | '스타벅스 기프티콘';
