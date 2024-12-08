/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import { ModalsDispatchContext, ModalsStateContext } from './ModalsContext';
import LoginModal from '@/pages/Home/components/LoginModal';
import NoReceiveModal from '@/pages/Home/components/NoReceiveModal';
import QuestionModal from '@/pages/Home/components/QuestionModal';
import QuestionCheckModal from '@/pages/Home/components/QuestionCheckModal';
import ReceiveModal from '@/pages/Home/components/ReceiveModal';
import UnableConfirmModal from '@/pages/Home/components/UnableConfirmModal';
import WinningListDetailModal from '@/pages/Home/components/WinningListDetailModal';
import WinningListModal from '@/pages/Home/components/WinningListModal';

export const modals = {
  LoginModal,
  NoReceiveModal,
  QuestionModal,
  QuestionCheckModal,
  ReceiveModal,
  UnableConfirmModal,
  WinningListDetailModal,
  WinningListModal,
};

const Modals = () => {
  const openedModals = useContext(ModalsStateContext) || [];
  const dispatch = useContext(ModalsDispatchContext);

  if (!dispatch) {
    throw new Error('ModalsDispatchContext가 제공되지 않았습니다.');
  }

  const { close } = dispatch;

  return (
    <>
      {openedModals.map((modal, index) => {
        const { Component, props } = modal;
        const { onSubmit, ...restProps } = props;

        const onClose = () => close(Component);

        const handleSubmit = async () => {
          if (typeof onSubmit === 'function') {
            await onSubmit();
          }
          onClose();
        };
        return (
          <Component
            {...props}
            key={index}
            onClose={onClose}
            onSubmit={handleSubmit}
          />
        );
      })}
    </>
  );
};

export default Modals;
