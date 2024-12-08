import { ModalsDispatchContext } from '@/components/ModalsContext';
import React, { useContext } from 'react';

const useModal = () => {
  const context = useContext(ModalsDispatchContext);

  if (!context) {
    throw new Error('useModal은 ModalsProvider 내에서만 사용해야 합니다.');
  }

  const { open, close } = context;

  const openModal = <P>(Component: React.ComponentType<P>, props: P) => {
    open(Component, props);
  };

  const closeModal = <P>(Component: React.ComponentType<P>) => {
    close(Component);
  };

  return {
    openModal,
    closeModal,
  };
};

export default useModal;
