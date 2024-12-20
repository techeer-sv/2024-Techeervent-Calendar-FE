export interface User {
  userName: string;
  userYear: number;
  userId: number;
}

export interface QA {
  question: string;
  answer: string;
  user: User;
}

export interface Meta {
  totalItems: number; // 전체 항목 개수
  itemCount: number; // 현재 페이지에 포함된 항목 개수
  itemsPerPage: number; // 페이지 당 항목 개수 (limit)
  totalPages: number; // 총 페이지 수
  currentPage: number; // 현재 페이지 번호
}

export type Drawlist =
  | '마켓컬리 3만원 금액권'
  | '문화상품권'
  | '공차 기프티콘'
  | '스타벅스 기프티콘';
