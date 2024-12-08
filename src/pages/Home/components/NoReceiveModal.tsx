import { Button } from '@/components/ui/button';
import React from 'react';
import bomb from '../../../assets/images/bomb.png';
interface NoReceiveModalProps {
  onSubmit: () => void;
}

const NoReceiveModal = ({ onSubmit }: NoReceiveModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-modal min-h-modal p-4  rounded-[10px] bg-modalWhite flex flex-col items-center justify-center">
        <img className="w-[90px] h-[90px]" src={bomb} />
        <h1 className="block my-[33px] text-[18px] text-center">
          아쉽게도 <br />
          당첨되지 않았습니다.
        </h1>
        <span className="mb-[43px] text-[14px]">
          내일 다시 도전해주세요! 행운을 빌어요!🍀
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

export default NoReceiveModal;
