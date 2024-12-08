/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from 'react';

export interface ModalsDispatch {
  open: (Component: any, props: any) => any;
  close: (Component: any) => any;
}

export interface ModalItem {
  Component: any;
  props: any;
}

// 모달의 상태를 저장할 컨텍스트
export const ModalsStateContext = createContext<ModalItem[]>([]);

// 모달 열기/닫기 기능을 제공할 컨텍스트
export const ModalsDispatchContext = createContext<ModalsDispatch | undefined>(
  undefined
);
