import { Button } from '@/components/ui/button';
import React from 'react';
import giftBox from '../../../assets/images/giftBox.png';
interface ReceiveModalProps {
  onSubmit: () => void;
}

const ReceiveModal = ({ onSubmit }: ReceiveModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-modal min-h-modal p-4  rounded-[10px] bg-modalWhite flex flex-col items-center justify-center">
        <img className="w-25 h-25" src={giftBox} />

        <h1 className="my-[43px] text-[18px] text-center font-medium">
          축하합니다! <br />
          랜덤 상품에 당첨되었습니다!🎉
        </h1>
        <span className="mb-[43px] font-bold text-[16px] text-redText">
          스타벅스 10,000원 상품권
        </span>
        <Button
          onClick={onSubmit}
          className="w-full text-[16px] rounded-[999px] cursor-pointer bg-modalButtonBackground text-whiteDefault box-border hover:opacity-70"
        >
          닫기
        </Button>
      </div>
    </div>
  );
};

export default ReceiveModal;
