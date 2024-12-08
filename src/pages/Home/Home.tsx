import React from 'react';
import useModal from './hooks/useModal';
import { modals } from '@/components/Modals';

const Home = () => {
  const { openModal } = useModal();

  const handleLoginModalClick = () => {
    openModal(modals.LoginModal, {
      onSubmit: () => {
        console.log('비즈니스 로직 처리...');
      },
    });
  };

  const handleReceiveModalClick = () => {
    openModal(modals.ReceiveModal, {
      onSubmit: () => {
        console.log('비즈니스 로직 처리...');
      },
    });
  };

  const handlenNoReceiveModalClick = () => {
    openModal(modals.NoReceiveModal, {
      onSubmit: () => {
        console.log('비즈니스 로직 처리...');
      },
    });
  };

  const handlenQuestionModalClick = () => {
    openModal(modals.QuestionModal, {
      onSubmit: () => {
        console.log('비즈니스 로직 처리...');
      },
      onClose: () => {},
    });
  };

  const handleQuestionCheckModalClick = () => {
    openModal(modals.QuestionCheckModal, {
      onClose: () => {},
    });
  };

  const handleUnableConfirmModalClick = () => {
    openModal(modals.UnableConfirmModal, {
      onSubmit: () => {
        console.log('비즈니스 로직 처리...');
      },
    });
  };

  const handleWinningListDetailModalClick = () => {
    openModal(modals.WinningListDetailModal, {
      onSubmit: () => {
        console.log('비즈니스 로직 처리...');
      },
      onClose: () => {},
    });
  };

  const handleWinningListModalClick = () => {
    openModal(modals.WinningListModal, {
      onClose: () => {},
    });
  };

  return (
    <div>
      <button className="block" onClick={handleLoginModalClick}>
        로그인 모달
      </button>
      <button className="block" onClick={handleReceiveModalClick}>
        당첨 모달
      </button>
      <button className="block" onClick={handlenNoReceiveModalClick}>
        당첨 안됨 모달
      </button>
      <button className="block" onClick={handleQuestionCheckModalClick}>
        했음 확인 모달
      </button>
      <button className="block" onClick={handlenQuestionModalClick}>
        질문 모달
      </button>
      <button className="block" onClick={handleUnableConfirmModalClick}>
        날짜 아직 안됨 모달
      </button>
      <button className="block" onClick={handleWinningListDetailModalClick}>
        당첨자 디테일 모달
      </button>
      <button className="block" onClick={handleWinningListModalClick}>
        당첨자 모달
      </button>
    </div>
  );
};

export default Home;
