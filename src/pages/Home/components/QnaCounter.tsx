import Board from '../../../../public/assets/Board.svg';

const QnaCounter = () => {
  const mackData = 20;
  return (
    <div className="absolute flex sm:bottom-[6%] md:bottom-[5%] sm:-right-[8%] md:-right-[8%] lg:-right-[0%] w-[20%] h-[20%] rotate-[-23]">
      <img src={Board} alt="질의응답 카운트" />
      <span className="absolute right-[25%] top-[24%] text-yellowText sm:text-[14px] md:text-[18px] lg:text-[20px] font-jua rotate-[23deg] z-10">
        {mackData}
      </span>
    </div>
  );
};
export default QnaCounter;
