import Icon from '@/components/icon/Icon';
import QandA from '../../../assets/images/QandA.png';
import React from 'react';

interface WinningListDetailModalProps {
  onClose: () => void;
}

const WinningListDetailModal = ({ onClose }: WinningListDetailModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-[90%] w-[280px] relative min-h-[300px] p-4 rounded-[10px] bg-modalWhite flex flex-col items-center">
        <img className="w-[80px] h-[70px]" src={QandA} alt="Q&A" />

        {/* 닫기 버튼 */}
        <div
          className="absolute rounded-full cursor-pointer top-4 right-4"
          onClick={onClose}
        >
          <Icon id="delete" className="w-4 h-4" />
        </div>

        <div className="w-full text-left">
          {/* 유저 정보 */}
          <div className="flex items-center my-[15px]">
            <Icon id="santa" className="w-4 h-5" />
            <span className="text-[13px] mr-2">조진우</span>
            <span className="flex bg-tagBackground min-w-[20px] h-3 text-[8px] justify-center items-center rounded-[3px]">
              7기
            </span>
          </div>

          {/* 질문 섹션 */}
          <p className="text-[#E02626] font-bold">질문</p>
          <div className="bg-[#FFE9EE] rounded-[10px] mb-[13px] p-[10px] text-[11px] min-h-[100px]">
            올해 크리스마스에 가장 받고 싶은 선물은 무엇인가요?
          </div>

          {/* 답변 섹션 */}
          <p className="text-[#1E8926]">답변</p>
          <div className="bg-[#EAFBE9] p-[10px] text-[11px] min-h-[100px]">
            올해 크리스마스에 가장 받고 어쩌구
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinningListDetailModal;
