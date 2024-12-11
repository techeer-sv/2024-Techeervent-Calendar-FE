import Icon from '@/components/icon/Icon';
import QandA from '../../../assets/images/QandA.png';
import React from 'react';
import { motion } from 'framer-motion';

interface WinningListDetailModalProps {
  onClose: () => void;
}

const WinningListDetailModal = ({ onClose }: WinningListDetailModalProps) => {
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
        <img className="w-[80px] h-[70px]" src={QandA} alt="Q&A" />

        <div
          className="absolute rounded-full cursor-pointer top-4 right-4"
          onClick={onClose}
        >
          <Icon id="delete" className="w-4 h-4" />
        </div>

        <div className="w-full text-left">
          <div className="flex items-center my-[10px]">
            <Icon id="santa" className="w-6 mr-1 h-7" />
            <span className="text-[17px] mr-2">조진우</span>
            <span className="flex bg-tagBackground px-[6px] py-[1px] text-[11px] justify-center items-center rounded-[5px]">
              7기
            </span>
          </div>

          <p className="text-[#E02626] font-bold text-[15px]">질문</p>
          <div className="bg-[#FFE9EE] rounded-[10px] mb-[13px] p-[10px] text-[13px] h-[100px] overflow-y-scroll">
            올해 크리스마스에 가장 받고 싶은 선물은 무엇인가요?
          </div>

          <p className="text-[#1E8926] text-[15px]">답변</p>
          <div className="bg-[#EAFBE9] rounded-[10px] p-[10px] text-[13px] h-[100px] overflow-y-scroll">
            올해 크리스마스에 가장 받고 어쩌구
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WinningListDetailModal;
