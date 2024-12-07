import Board from '../../../../public/assets/Board.svg';

const QnaCounter = () => {
  const mackData = 20;
  return (
    <div className="absolute flex bottom-[0%] right-[0%] w-[20%] h-[20%] rotate-[-23]">
      <img src={Board} alt="질의응답 카운트" />
      <span className="absolute right-[26%] top-[23%] text-yellowText font-jua rotate-[23deg] z-10">
        {mackData}
      </span>
    </div>
  );
};
export default QnaCounter;
