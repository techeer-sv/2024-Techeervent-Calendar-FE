import React from 'react';

interface WinningListModalProps {
  onClose: () => void;
}

const WinningListModal = ({ onClose }: WinningListModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-[90%] w-[280px] relative min-h-[300px] p-4 rounded-[10px] bg-modalWhite flex flex-col items-center">
        <div
          onClick={onClose}
          className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full cursor-pointer top-4 right-4"
        >
          <span className="text-gray-600 text-[16px]">✕</span>
        </div>

        <div className="w-[80px] h-[70px] bg-red-500 rounded-md mb-4 ">
          <span className="flex items-center justify-center h-full text-white">
            사진
          </span>
        </div>

        <div className="w-full rounded-[10px] border-[1px] border-[#A1A1A1] text-[12px] mb-[2px]">
          <div className="flex items-center h-[35px] justify-between gap-4 px-4">
            <div>사진</div>
            <span>스타벅스 10,000원 상품권</span>
            <span>이상민</span>
          </div>
        </div>
        <div className="w-full rounded-[10px] border-[1px] border-[#A1A1A1] text-[12px] mb-[2px]">
          <div className="flex items-center h-[35px] justify-between gap-4 px-4">
            <div>사진</div>
            <span>스타벅스 10,000원 상품권</span>
            <span>이상민</span>
          </div>
        </div>
        <div className="w-full rounded-[10px] border-[1px] border-[#A1A1A1] text-[12px] mb-[2px]">
          <div className="flex items-center h-[35px] justify-between gap-4 px-4">
            <div>사진</div>
            <span>스타벅스 10,000원 상품권</span>
            <span>이상민</span>
          </div>
        </div>
        <div className="w-full rounded-[10px] border-[1px] border-[#A1A1A1] text-[12px] mb-[2px]">
          <div className="flex items-center h-[35px] justify-between gap-4 px-4">
            <div>사진</div>
            <span>스타벅스 10,000원 상품권</span>
            <span>이상민</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinningListModal;
