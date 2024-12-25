import { Button } from '@/components/ui/button';
import QandA from '@/assets/images/QandA.png';
import { motion } from 'framer-motion';
import { submitAttendanceAndPrize } from '@/services/calendar';
import { session } from '@/utils/session';
import { useState } from 'react';
import { modals } from '@/components/Modals';
import useModal from '@/pages/Home/hooks/useModal';
import { useQueryClient } from '@tanstack/react-query';
import { GetRandomResponse } from '@/types/api/question';

interface QuestionModalProps {
  onSubmit: () => void;
  date: number;
  questionData: GetRandomResponse;
}

const QuestionModal = ({
  onSubmit,
  date,
  questionData,
}: QuestionModalProps) => {
  const [answer, setAnswer] = useState('');
  const { openModal } = useModal();
  const queryClient = useQueryClient();

  const handleSubmit = async () => {
    if (!answer.trim()) return;

    try {
      const res = await submitAttendanceAndPrize({
        userId: session.get('userId') || '',
        calendarDate: date,
        questionId: questionData.data.questionId,
        calendarAnswer: answer,
      });

      const userId = session.get('userId') || '';
      if (userId) {
        queryClient.invalidateQueries({
          queryKey: ['userCalendar', userId],
        });
      }

      if (res.data.drawName) {
        openModal(modals.ReceiveModal, {
          onSubmit: () => {
            Promise.all([
              queryClient.invalidateQueries({ queryKey: ['winners'] }),
              queryClient.invalidateQueries({ queryKey: ['userQA'] }),
              queryClient.invalidateQueries({ queryKey: ['answerCount'] }),
            ]);
          },
          draw: res.data.drawName,
        });
      } else {
        openModal(modals.NoReceiveModal, {
          onSubmit: () => {
            Promise.all([
              queryClient.invalidateQueries({ queryKey: ['userQA'] }),
              queryClient.invalidateQueries({ queryKey: ['answerCount'] }),
            ]);
          },
        });
      }
      onSubmit();
    } catch {
      return null;
    }
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
        <img className="w-[80px] h-[70px] mx-auto" src={QandA} />
        <h1 className="font-semibold text-[14px] mt-[32px] mb-[6px] text-left">
          Q) {questionData.data.questionContent}
        </h1>
        <textarea
          placeholder="한 번 제출하면 수정이 불가능하니, 신중하게 작성해 주세요."
          className="w-full h-full placeholder:text-[#A1A1A1] overflow-y-auto placeholder:leading-[1.1] p-2 text-[12px] placeholder:text-[12px] rounded-[10px] mb-[32px] box-border resize-none leading-[1.1] border-[1px] border-black focus:outline-none focus:ring-0 focus:border-black"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          disabled={!answer.trim()}
          className={`w-full text-[16px] rounded-[999px] cursor-pointer ${
            !answer.trim()
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-modalButtonBackground text-whiteDefault hover:opacity-70'
          }`}
        >
          출석
        </Button>
      </motion.div>
    </div>
  );
};

export default QuestionModal;
