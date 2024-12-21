import Icon from '@/components/icon/Icon';
import { motion } from 'framer-motion';
import useModal from '../../hooks/useModal';
import { modals } from '@/components/Modals';
import Question from '@/assets/images/Question.svg';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from '@tanstack/react-query';
import { searchUserQA } from '@/services/calendar';
import React, { useState } from 'react';
import { QA } from '@/types/common';

interface QuestionListModalProps {
  onClose: () => void;
}

const QuestionListModal = ({ onClose }: QuestionListModalProps) => {
  const { openModal } = useModal();
  const [author, setAuthor] = useState('');

  const fetchAnswers = async ({ pageParam = 0 }: { pageParam: number }) => {
    try {
      const response = await searchUserQA(pageParam, 10, author);
      return response;
    } catch {
      return null;
    }
  };

  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isError,
  } = useInfiniteQuery({
    queryKey: ['userQA', author],
    queryFn: fetchAnswers,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage) return undefined;
      const currentPage = lastPage.data.meta.currentPage;
      const totalPages = lastPage.data.meta.totalPages;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleQuestionDetailListModalClick = (qa: QA) => {
    openModal(modals.QuestionDetailListModal, {
      onClose: () => {},
      data: qa,
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
        className="relative w-[380px] h-[430px] p-4 rounded-[10px] bg-modalWhite flex flex-col items-center justify-center"
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
              onChange={handleSearchChange}
              className="w-full h-full border-none rounded-[6px] pl-2 text-[11px] placeholder:text-[11px] focus:outline-none focus:ring-0"
            />
          </div>

          {/* 질문 목록 컨텐츠 */}
          <div className="flex flex-col text-[10px] text-center max-h-[350px] overflow-y-auto">
            <div className="flex text-[#888686] mb-1">
              <span className="min-w-[30px]"></span>
              <span className="min-w-[30px] text-center">이름</span>
              <span className="min-w-[30px] text-center">기수</span>
              <span className="flex-grow">질문</span>
            </div>

            {/* 질문 목록 반복 렌더링 */}
            {isLoading ? (
              <div>로딩 중...</div>
            ) : isError ? (
              <div>데이터를 불러오는 중에 오류가 발생했습니다.</div>
            ) : (
              <InfiniteScroll
                loadMore={() => fetchNextPage()}
                hasMore={hasNextPage && !isFetchingNextPage}
                useWindow={false}
                getScrollParent={() =>
                  document.querySelector('overflow-y-auto')
                }
              >
                {data?.pages.map((page) =>
                  page?.data.answers.map((qa, index) => (
                    <div
                      key={index}
                      className="mb-2 cursor-pointer hover:opacity-70"
                      onClick={() => handleQuestionDetailListModalClick(qa)}
                    >
                      <div className="flex items-center bg-questionBackground rounded-[3px] px-[2.5] py-1">
                        <span className="min-w-[30px]">
                          <img src={Question} className="w-5 h-5 mx-auto" />
                        </span>
                        <span className="min-w-[30px]">{qa.user.userName}</span>
                        <span className="min-w-[30px]">
                          {qa.user.userYear}기
                        </span>
                        <span className="flex-grow">{qa.question}</span>
                      </div>
                    </div>
                  ))
                )}
              </InfiniteScroll>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuestionListModal;
