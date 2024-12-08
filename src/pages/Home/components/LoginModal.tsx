import DynamicIcon from '@/components/icon/DynamicIcon';
import { Button } from '@/components/ui/button';
import React, { useEffect, useRef } from 'react';

interface LoginModalProps {
  onSubmit: () => void;
}

const LoginModal = ({ onSubmit }: LoginModalProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-modal min-h-modal p-4  rounded-[10px] bg-modalWhite flex flex-col items-center justify-center">
        <DynamicIcon className="w-[118px] h-[116px]" type="snow" />
        <div className="my-[60px]">
          <div className="border-b-[1px] border-rgba(0, 0, 0, 0.5) mb-[10px]">
            <input
              ref={inputRef}
              className="block  border-none placeholder:text-[#A1A1A1] focus:outline-none focus:border-none focus:ring-0"
              placeholder="이름을 입력해주세요."
            />
          </div>

          <Button className="w-[40px] h-[20px] rounded-[5px] text-[12px] bg-text-whiteDefault text-modalButtonBackground box-border mr-2">
            5기
          </Button>
          <Button className="w-[29px] h-[13px] rounded-[5px] text-[12px] bg-text-whiteDefault text-modalButtonBackground box-border">
            7기
          </Button>
        </div>

        <Button
          onClick={onSubmit}
          className="w-full text-[16px] cursor-pointer rounded-[999px] bg-modalButtonBackground text-whiteDefault box-border hover:opacity-70"
        >
          시작
        </Button>
      </div>
    </div>
  );
};

export default LoginModal;
