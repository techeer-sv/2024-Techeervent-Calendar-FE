import Icon from '@/components/icon/Icon';
import Crown from '../../../assets/images/crown.png';
import React from 'react';
import { motion } from 'framer-motion';

interface WinningListModalProps {
  onClose: () => void;
}

const WinningListModal = ({ onClose }: WinningListModalProps) => {
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
        <div
          className="absolute rounded-full cursor-pointer top-4 right-4"
          onClick={onClose}
        >
          <Icon id="delete" className="w-4 h-4" />
        </div>

        <img className="w-[80px] h-[62px] mb-3" src={Crown} />

        <div className="flex-1 w-full overflow-y-scroll">
          <div className="rounded-[10px] border-[1px] border-[#A1A1A1] text-[12px] mb-[2px]">
            <div className="flex items-center h-[35px] justify-between gap-4 px-4">
              <div>사진</div>
              <span>스타벅스 10,000원 상품권</span>
              <span>이상민</span>
            </div>
          </div>
          <div className="rounded-[10px] border-[1px] border-[#A1A1A1] text-[12px] mb-[2px]">
            <div className="flex items-center h-[35px] justify-between gap-4 px-4">
              <div>사진</div>
              <span>스타벅스 10,000원 상품권</span>
              <span>이상민</span>
            </div>
          </div>
          <div className="rounded-[10px] border-[1px] border-[#A1A1A1] text-[12px] mb-[2px]">
            <div className="flex items-center h-[35px] justify-between gap-4 px-4">
              <div>사진</div>
              <span>스타벅스 10,000원 상품권</span>
              <span>이상민</span>
            </div>
          </div>
          <div className="rounded-[10px] border-[1px] border-[#A1A1A1] text-[12px] mb-[2px]">
            <div className="flex items-center h-[35px] justify-between gap-4 px-4">
              <div>사진</div>
              <span>스타벅스 10,000원 상품권</span>
              <span>이상민</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WinningListModal;
