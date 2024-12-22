import { useSuspenseQuery } from '@tanstack/react-query';
import Board from '../../../../public/assets/Board.svg';
import { fetchAnswerCount } from '@/services/calendar';
import { GetAnswerCountResponse } from '@/types/api/calendar';

const QnaCounter = () => {
  const { data } = useSuspenseQuery<GetAnswerCountResponse>({
    queryKey: ['answerCount'],
    queryFn: fetchAnswerCount,
  });

  return (
    <div className="absolute flex sm:bottom-[8%] md:bottom-[11%] sm:-right-[8%] md:-right-[8%] lg:-right-[0%] w-[20%] h-[20%] rotate-[-23]">
      <img src={Board} alt="질의응답 카운트" />
      <span className="absolute right-[24%] top-[24%] text-yellowText sm:text-[14px] md:text-[18px] lg:text-[20px] font-jua rotate-[23deg] z-10">
        {data.data.answerCount}
      </span>
    </div>
  );
};
export default QnaCounter;
