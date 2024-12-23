import { Button } from '@/components/ui/button';
import Warnning from '@/assets/images/warning.png';
import { motion } from 'framer-motion';

interface UnableConfirmModalProps {
  onSubmit: () => void;
  Day: () => number;
}

const UnableConfirmModal = ({ onSubmit, Day }: UnableConfirmModalProps) => {
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
        className="w-modal h-modal p-4 rounded-[10px] bg-modalWhite flex flex-col items-center justify-center"
      >
        <img className="w-[90px] h-[90px]" src={Warnning} />

        <h1 className="mt-[50px] text-[18px] text-center font-medium">
          아직은 내용을 확인할 수 없습니다 !
        </h1>
        <span className="my-[50px] text-[14px] font-medium flex-grow">
          {Day() || 31} 일에 함께 확인해봐요!
        </span>
        <Button
          onClick={onSubmit}
          className="w-full text-[16px] rounded-[999px] cursor-pointer bg-modalButtonBackground text-whiteDefault box-border hover:opacity-70"
        >
          닫기
        </Button>
      </motion.div>
    </div>
  );
};

export default UnableConfirmModal;
