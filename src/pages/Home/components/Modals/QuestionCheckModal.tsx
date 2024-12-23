import { Button } from '@/components/ui/button';
import QandA from '@/assets/images/QandA.png';
import { motion } from 'framer-motion';
import { CalendarPosition } from '@/pages/Home/hooks/useCalendar';
import { useEffect } from 'react';

interface QuestionModalProps {
  onClose: () => void;
  calendar: CalendarPosition;
}

const QuestionCheckModal = ({ onClose, calendar }: QuestionModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden'; // html도 숨김 처리
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, []);

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
        className="w-modal h-modal max-h-modal p-4 rounded-[10px] bg-modalWhite flex flex-col items-center justify-center"
      >
        <img className="w-[80px] h-[70px]" src={QandA} />
        <h1 className="font-semibold text-[14px] mt-[32px] mb-[10px]">
          Q) {calendar.qa?.question}
        </h1>
        <div className="flex-grow overflow-auto w-full p-2 text-[13px] rounded-[10px] bg-[#F3F3F3]  box-border leading-[1.1]">
          {calendar.qa?.answer}
        </div>
        <Button
          onClick={onClose}
          className="w-full text-[16px] rounded-[999px] cursor-pointer bg-modalButtonBackground my-[5px] text-whiteDefault box-border hover:opacity-70"
        >
          닫기
        </Button>
      </motion.div>
    </div>
  );
};

export default QuestionCheckModal;
