import Icon from '@/components/icon/Icon';
import QandA from '@/assets/images/QandA.png';
import { motion } from 'framer-motion';
import { QA } from '@/types/common';

interface QuestionDetailListModalProps {
  onClose: () => void;
  data: QA;
}

const QuestionDetailListModal = ({
  onClose,
  data,
}: QuestionDetailListModalProps) => {
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
        <img className="w-[80px] h-[70px]" src={QandA} alt="Q&A" />

        <div
          className="absolute rounded-full cursor-pointer top-4 right-4"
          onClick={onClose}
        >
          <Icon id="delete" className="w-4 h-4" />
        </div>

        <div className="w-full text-left">
          <div className="flex items-center my-[10px]">
            <Icon id="santa" className="h-8 mr-1 w-7" />
            <span className="text-[17px] font-bold mr-2">
              {data.user.userName}
            </span>
            <span className="flex bg-tagBackground px-[6px] py-[1px] text-[11px] font-semibold justify-center items-center rounded-[5px]">
              {data.user.userYear}기
            </span>
          </div>
          <div className="flex items-center">
            <Icon
              id="snow-crystal"
              className="w-[22px] h-[22px] mr-1"
              color="red"
            />
            <span className="text-[#E02626] font-bold text-[17px]">질문</span>
          </div>

          <div className="bg-[#FFE9EE] rounded-[10px] mb-[13px] p-[10px] text-[13px] h-[100px] overflow-auto">
            {data.question}
          </div>

          <div className="flex items-center">
            <Icon
              id="snow-crystal"
              className="w-[22px] h-[22px] mr-1"
              color="green"
            />
            <span className="text-[#1E8926] font-bold text-[17px]">답변</span>
          </div>

          <div className="bg-[#EAFBE9] rounded-[10px] p-[10px] text-[13px] h-[100px] overflow-auto">
            {data.answer}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuestionDetailListModal;
