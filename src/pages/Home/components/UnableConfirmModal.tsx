import { Button } from '@/components/ui/button';
import React from 'react';

interface UnableConfirmModalProps {
  onSubmit: () => void;
}

const UnableConfirmModal = ({ onSubmit }: UnableConfirmModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-modal min-h-modal p-4  rounded-[10px] bg-modalWhite flex flex-col items-center justify-center">
        <div className="w-[90px] h-[90px] bg-redText">눈 내리니는 사진</div>

        <h1 className="mt-[50px] text-[18px] text-center font-medium">
          아직은 내용을 확인할 수 없습니다 !
        </h1>
        <span className="my-[50px] text-[14px] font-medium">
          31일에 함께 확인해봐요!
        </span>
        <Button
          onClick={onSubmit}
          className="w-full text-[16px] rounded-[999px] bg-modalButtonBackground text-whiteDefault box-border hover:opacity-70"
        >
          닫기
        </Button>
      </div>
    </div>
  );
};

export default UnableConfirmModal;
