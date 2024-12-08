import Icon from '@/components/icon/Icon';
import { Button } from '@/components/ui/button';
import QandA from '../../../assets/images/QandA.png';
import React from 'react';

interface QuestionModalProps {
  onSubmit: () => void;
  onClose: () => void;
}

const QuestionModal = ({ onSubmit, onClose }: QuestionModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-modal relative min-h-modal p-4  rounded-[10px] bg-modalWhite flex flex-col items-center justify-center">
        <div onClick={onClose}>
          <Icon
            id="delete"
            className="absolute w-4 h-4 rounded-full cursor-pointer top-4 right-4"
          />
        </div>

        <img className="w-[80px] h-[70px]" src={QandA} />
        <h1 className="font-semibold text-[14px] mt-[32px] mb-[10px]">
          Q) 2024년, 나를 가장 많이 웃게 한 일은?
        </h1>
        <textarea
          placeholder="한 번 제출하면 수정이 불가능하니, 신중하게 작성해 주세요."
          className="h-[115px] w-full placeholder:text-[#A1A1A1] placeholder:leading-[1.1] p-2 text-[8px] placeholder:text-[8px] rounded-[10px] mb-[32px] box-border resize-none leading-[1.1] focus:outline-none"
        ></textarea>
        <Button
          onClick={onSubmit}
          className="w-full text-[16px] rounded-[999px] cursor-pointer bg-modalButtonBackground text-whiteDefault box-border hover:opacity-70"
        >
          출석
        </Button>
      </div>
    </div>
  );
};

export default QuestionModal;
