/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import { ModalsDispatchContext, ModalsStateContext } from './ModalsContext';
import LoginModal from '@/pages/Home/components/Modals/LoginModal';
import NoReceiveModal from '@/pages/Home/components/Modals/NoReceiveModal';
import QuestionModal from '@/pages/Home/components/Modals/QuestionModal';
import QuestionCheckModal from '@/pages/Home/components/Modals/QuestionCheckModal';
import ReceiveModal from '@/pages/Home/components/Modals/ReceiveModal';
import UnableConfirmModal from '@/pages/Home/components/Modals/UnableConfirmModal';
import WinningListModal from '@/pages/Home/components/Modals/WinningListModal';
import { AnimatePresence } from 'framer-motion';
import QuestionDetailListModal from '@/pages/Home/components/Modals/QuestionDetailListModal';
import QuestionListModal from '@/pages/Home/components/Modals/QuestionListModal';

export const modals = {
  LoginModal,
  NoReceiveModal,
  QuestionModal,
  QuestionCheckModal,
  ReceiveModal,
  UnableConfirmModal,
  QuestionListModal,
  QuestionDetailListModal,
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
    <AnimatePresence>
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
    </AnimatePresence>
  );
};

export default Modals;
