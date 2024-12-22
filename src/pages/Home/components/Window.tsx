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
  today,
  modal,
}: {
  date: number;
  isOpen: boolean;
  onClick: () => void;
  giftImage: React.ReactNode;
  className: string;
  style: React.CSSProperties;
  today: number;
  modal: () => void;
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
          {today === date && (
            <img
              src={Door}
              alt="애니메이션 문"
              className="object-contain w-full h-full"
            />
          )}
        </motion.div>
      )}
      <img
        src={CloseWindowIcon}
        alt="닫힌 창문"
        className="relative object-cover w-full"
      />
      <span
        onClick={onClick}
        className="absolute inset-x-0 top-[27%] flex justify-center items-center text-white text-[260%] font-birthstone z-20 cursor-pointer"
      >
        {!isOpen && date}
      </span>
      {isOpen && (
        <div
          onClick={() => {
            modal();
          }}
        >
          <img
            src={PinkDoor}
            alt="핑크색 문"
            className="absolute top-[18%] left-[18%] w-[64%] h-[75%] z-20"
          />
          <button className="absolute top-[66%] left-[53%] transform -translate-x-1/2 -translate-y-1/2 z-30">
            {giftImage}
          </button>
        </div>
      )}
    </div>
  );
};
export default Window;
