import Icon from '@/components/icon/Icon';
import { motion } from 'framer-motion';
import React from 'react';
import Question from '@/assets/images/question.png';
import useModal from '../../hooks/useModal';
import { modals } from '@/components/Modals';

interface QuestionListModalProps {
  onClose: () => void;
}

const QuestionListModal = ({ onClose }: QuestionListModalProps) => {
  const { openModal } = useModal();

  const handleQuestionDetailListModalClick = () => {
    openModal(modals.QuestionDetailListModal, {
      onClose: () => console.log('hi'),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        className="relative w-modal h-modal p-4 rounded-[10px] bg-modalWhite flex flex-col items-center justify-center"
      >
        {/* Close 버튼 */}
        <div
          className="mb-2 ml-auto text-right rounded-full cursor-pointer"
          onClick={onClose}
        >
          <Icon id="delete" className="w-4 h-4" />
        </div>

        <div className="flex-grow w-full">
          {/* 검색 입력 필드 */}
          <div className="flex items-center border-[1px] border-placeholderText rounded-[6px] h-8 pl-2 mb-[5px]">
            <Icon id="search" className="w-[22px] h-[22px]" />
            <input
              placeholder="사용자 이름으로 입력해주세요"
              className="w-full h-full border-none rounded-[6px] pl-2 text-[11px] placeholder:text-[11px] focus:outline-none focus:ring-0"
            />
          </div>

          {/* 질문 목록 컨텐츠 */}
          <div className="flex flex-col text-[10px] text-center max-h-[300px] overflow-y-auto">
            <div className="flex text-[#888686] mb-1">
              <span className="min-w-[30px]"></span>
              <span className="min-w-[30px] text-center">이름</span>
              <span className="min-w-[30px] text-center">기수</span>
              <span className="flex-grow">질문</span>
            </div>

            {/* 질문 목록 반복 렌더링 */}
            {Array.from({ length: 20 }).map((_, index) => (
              <div
                key={index}
                className="mb-2 cursor-pointer hover:opacity-70"
                onClick={handleQuestionDetailListModalClick}
              >
                <div className="flex items-center bg-questionBackground rounded-[3px] px-[2.5] py-1">
                  <span className="min-w-[30px]">
                    <img src={Question} className="w-5 h-5 mx-auto" />
                  </span>
                  <span className="min-w-[30px]">고예진</span>
                  <span className="min-w-[30px]">7기</span>
                  <span className="flex-grow">
                    2024년 나를 가장 많이 웃게 한 일은?
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuestionListModal;
