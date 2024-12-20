import { Button } from '@/components/ui/button';
import giftBox from '@/assets/images/giftBox.png';
import { motion } from 'framer-motion';
interface ReceiveModalProps {
  onSubmit: () => void;
  draw: string;
}

const ReceiveModal = ({ onSubmit, draw }: ReceiveModalProps) => {
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
        <img className="w-25 h-25" src={giftBox} />

        <h1 className="my-[43px] text-[18px] text-center font-medium">
          축하합니다! <br />
          랜덤 상품에 당첨되었습니다! 🎉
        </h1>
        <span className="mb-[43px] font-bold text-[16px] text-redText flex-1">
          {draw}
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

export default ReceiveModal;
