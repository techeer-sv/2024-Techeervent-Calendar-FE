export interface User {
  userName: string;
  userYear: number;
  userId: string;
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
