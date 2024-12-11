import { Button } from '@/components/ui/button';
import QandA from '../../../assets/images/QandA.png';
import React from 'react';
import { motion } from 'framer-motion';

interface QuestionModalProps {
  onClose: () => void;
}

const QuestionCheckModal = ({ onClose }: QuestionModalProps) => {
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
        <div className="w-modal relative min-h-modal p-4 rounded-[10px] bg-modalWhite flex flex-col items-center justify-center">
          <img className="w-[80px] h-[70px]" src={QandA} />
          <h1 className="font-semibold text-[14px] mt-[32px] mb-[10px]">
            Q) 2024년, 나를 가장 많이 웃게 한 일은?
          </h1>
          <div className="min-h-full overflow-scroll w-full p-2 text-[13px] rounded-[10px] bg-[#F3F3F3]  box-border leading-[1.1]">
            코드에서 난생처음 어쩌구
          </div>
          <Button
            onClick={onClose}
            className="w-full text-[16px] rounded-[999px] cursor-pointer bg-modalButtonBackground my-[5px] text-whiteDefault box-border hover:opacity-70"
          >
            닫기
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default QuestionCheckModal;
