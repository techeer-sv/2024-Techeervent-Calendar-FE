import React from 'react';

interface WinningListDetailModalProps {
  onClose: () => void;
}

const WinningListDetailModal = ({ onClose }: WinningListDetailModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-[90%] w-[280px] relative min-h-[300px] p-4 rounded-[10px] bg-modalWhite flex flex-col items-center">
        <div
          onClick={onClose}
          className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full cursor-pointer top-4 right-4"
        >
          <span className="text-gray-600 text-[16px]">✕</span>
        </div>

        <div className="w-[80px] h-[70px] bg-red-500 rounded-md mb-4">
          <span className="flex items-center justify-center h-full text-white">
            사진
          </span>
        </div>
        <div className="text-left">
          <div className="flex items-center my-[15px]">
            <span className="text-[13px] mr-2">조진우</span>
            <span className="flex bg-tagBackground min-w-[20px] h-3 text-[8px] justify-center items-center rounded-[3px]">
              7기
            </span>
          </div>

          <p className="text-[#E02626] font-bold">질문</p>
          <div className="bg-[#FFE9EE] rounded-[10px] mb-[13px] p-[10px] text-[11px] min-h-[100px]">
            올해 크리스마스에 가장 받고 싶은 선물은 무엇인가요?
          </div>
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
