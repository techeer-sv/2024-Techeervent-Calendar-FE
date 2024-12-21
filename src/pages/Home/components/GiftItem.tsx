import Line from '../../../../public/assets/Line.svg';
import Ring1 from '../../../../public/assets/Ring1.svg';
import Ring2 from '../../../../public/assets/Ring2.svg';
import Ring3 from '../../../../public/assets/Ring3.svg';
import Ring4 from '../../../../public/assets/Ring4.svg';

const gifts = [
  {
    src: Ring1,
    alt: '선물1',
    name: '컬리 캘린더',
    num: '(3명)',
    width: 'w-[85%] md:w-[100%]',
  },
  {
    src: Ring2,
    alt: '선물2',
    name: '컬리 상품권 1만원',
    num: '(3명)',
    width: 'w-[85%] md:w-[85%]',
  },
  {
    src: Ring3,
    alt: '선물3',
    name: '커피 기프티콘',
    num: '(5명)',
    width: 'w-[85%] md:w-[100%]',
  },
  {
    src: Ring4,
    alt: '선물4',
    name: '비타500 100ml',
    num: '(20명)',
    width: 'w-[85%] md:w-[90%]',
  },
];

const GiftItem = () => {
  return (
    <div className="relative flex flex-col w-[90%] mb-[35%]">
      <span className="text-white text-base md:text-lg font-bold font-pretendard mb-2">
        선물 안내
      </span>
      <div className="relative w-full">
        <img src={Line} alt="점선" className="w-full" />
        <div className="absolute top-[-140%] left-0 w-full flex justify-between items-center">
          {gifts.map(({ src, alt, name, num, width }, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={src} alt={alt} className={`${width}`} />
              <span className="text-white text-[5px] md:text-[8px] mt-2">
                {name}
              </span>
              <span className="text-white text-[5px] md:text-[7px]">{num}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftItem;
