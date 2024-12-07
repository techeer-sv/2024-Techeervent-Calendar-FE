import Line from '../../../../public/assets/Line.svg';
import Ring1 from '../../../../public/assets/Ring1.svg';
import Ring2 from '../../../../public/assets/Ring2.svg';
import Ring3 from '../../../../public/assets/Ring3.svg';
import Ring4 from '../../../../public/assets/Ring4.svg';

const GiftInfo = () => {
  return (
    <div className="relative flex flex-col w-[90%] mb-[30%]">
      <span className="text-white text-lg md:text-xl font-bold font-pretendard mb-2">
        선물 안내
      </span>
      <div className="relative w-full">
        <img src={Line} alt="점선" className="w-full" />
        <div className="absolute top-[-140%] left-0 w-full flex justify-between items-center">
          <img src={Ring1} alt="선물1" className="w-[21%]" />
          <img src={Ring2} alt="선물2" className="w-[20%]" />
          <img src={Ring3} alt="선물3" className="w-[21%]" />
          <img src={Ring4} alt="선물4" className="w-[20%]" />
        </div>
      </div>
    </div>
  );
};
export default GiftInfo;
