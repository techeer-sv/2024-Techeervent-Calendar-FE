import Leaf from '../../../public/assets/Leaf.svg';
import CrownButton from '../../../public/assets/CrownBtn.svg';
import Logo from '../../../public/assets/Logo.svg';
import SnowField from '../../../public/assets/SnowField.svg';
import Tree from '../../../public/assets/Tree.svg';
import Calendar from './components/Calendar';
import GiftInfo from './components/GiftInfo';
import QnaCounter from './components/QnaCounter';

const Home = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-full min-h-screen">
      <div className="relative">
        <img src={Leaf} alt="나뭇잎" />
        <img
          src={CrownButton}
          alt="당첨자 리스트 버튼"
          className="absolute right-7 top-5"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <span className="text-white text-base md:text-lg font-pretendard">
          매일이 설레는 고예진님의 선물!
        </span>
        <img src={Logo} alt="테커벤트 캘린더 로고" className="w-[95%] mb-4" />
      </div>

      <Calendar />

      <img src={SnowField} alt="눈" className="absolute bottom-0" />

      <div className="relative flex w-full max-h-96 h-full mb-[4%]">
        <div className="relative z-10 flex-auto basis-[50%]">
          <img src={Tree} alt="크리스마스 트리" />
          <QnaCounter />
        </div>

        <div className="relative flex flex-col flex-auto justify-start basis-[50%]">
          <GiftInfo />

          <div className="text-white mb-[14%]">
            <h1 className="text-lg md:text-xl font-jua">
              <span className="text-yellowText">2024년, 올 한해도 수고한</span>
              <br />
              <span className="text-yellowText">태커인</span> 을 위한 힐링 선물
            </h1>
            <span className="font-pretendard text-xs md:text-sm">
              (1일 1회 참여 가능)
            </span>
            <br />
            <span className="font-pretendard text-xs md:text-sm">
              이벤트 기간: 2024년 12월 25일(수) ~ 31일(화)
            </span>
          </div>

          <div className="flex flex-col justify-start">
            <h1 className="text-lg md:text-xl font-jua">
              <span className="font-jua text-confirmText">
                트리에 모든 답변이
              </span>
              <br />
              <span className="font-jua text-confirmText">
                차곡차곡 쌓이는 중...🎄
              </span>
            </h1>
            <span className="font-pretendard font-semibold text-xs md:text-sm text-black">
              모두의 마음이 모여 트리가 채워지고 있어요!
            </span>
            <span className="font-pretendard font-semibold text-xs md:text-sm text-black">
              트리를 클릭해 이야기들을 함께 확인해보세요.
            </span>
            <span className="font-pretendard text-xs md:text-sm text-grayText">
              (31일 확인 가능)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
