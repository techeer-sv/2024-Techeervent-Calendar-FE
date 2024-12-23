import { Button } from '@/components/ui/button';
import bomb from '@/assets/images/bomb.png';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
interface NoReceiveModalProps {
  onSubmit: () => void;
}

const NoReceiveModal = ({ onSubmit }: NoReceiveModalProps) => {
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
        className="w-modal h-modal p-4 rounded-[10px] bg-modalWhite flex flex-col items-center justify-center"
      >
        <img className="w-[90px] h-[90px]" src={bomb} />
        <h1 className="block my-[33px] text-[18px] text-center font-medium">
          아쉽게도 <br />
          당첨되지 않았습니다.
        </h1>
        <span className="mb-[43px] text-[14px] flex-1 flex items-center justify-center">
          내일 다시 도전해주세요! 행운을 빌어요! 🍀
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

export default NoReceiveModal;
