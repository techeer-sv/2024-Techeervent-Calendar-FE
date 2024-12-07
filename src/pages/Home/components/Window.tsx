import React from 'react';
import { motion } from 'framer-motion';
import CloseWindowIcon from '../../../../public/assets/CloseWindow.svg';
import Door from '../../../../public/assets/Door.svg';
import PinkDoor from '../../../../public/assets/Door(pink).svg';

const Window = ({
  date,
  isOpen,
  onClick,
  giftImage,
  className,
  style,
}: {
  date: number;
  isOpen: boolean;
  onClick: () => void;
  giftImage: string;
  className: string;
  style: React.CSSProperties;
}) => {
  return (
    <div className={`${className}`} style={style}>
      {isOpen && (
        <motion.div
          className="absolute top-[18%] left-[18%] w-[64%] h-[75%] object-contain z-30"
          animate={{
            rotateY: isOpen ? -130 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 18,
          }}
          style={{
            transformStyle: 'preserve-3d',
            perspective: 1000,
            transformOrigin: 'left',
          }}
        >
          <img
            src={Door}
            alt="애니메이션 문"
            className="w-full h-full object-contain"
          />
        </motion.div>
      )}
      <img
        src={CloseWindowIcon}
        alt="닫힌 창문"
        className="relative w-full object-cover"
      />
      <span
        onClick={onClick}
        className="absolute inset-x-0 top-[37%] flex justify-center items-center text-white text-[220%] font-continuous z-20 cursor-pointer"
      >
        {!isOpen && date}
      </span>
      {isOpen && (
        <div className="">
          <img
            src={PinkDoor}
            alt="핑크색 문"
            className="absolute top-[18%] left-[18%] w-[64%] h-[75%] z-20"
          />
          <img
            src={giftImage}
            alt={`선물상자 ${date}`}
            className="absolute w-[58%] top-[43%] left-[50%] transform -translate-x-1/2 z-20"
          />
        </div>
      )}
    </div>
  );
};
export default Window;
