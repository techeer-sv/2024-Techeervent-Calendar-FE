import React from 'react';
import CloseWindowIcon from '../../../../public/assets/CloseWindow.svg';

const CloseWindow = ({
  date,
  className,
  style,
}: {
  date: number;
  className: string;
  style: React.CSSProperties;
}) => {
  return (
    <div className={`${className}`} style={style}>
      <img
        src={CloseWindowIcon}
        alt="닫힌 창문"
        className="relative w-full object-cover"
      />
      <span className="absolute inset-x-0 top-[37%] flex justify-center items-center text-white text-[220%] font-continuous z-10">
        {date}
      </span>
    </div>
  );
};
export default CloseWindow;
