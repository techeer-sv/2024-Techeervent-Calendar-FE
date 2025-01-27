import Leaf from '../../../public/assets/Leaf.svg';
import Logo from '../../../public/assets/Logo.svg';
import SnowField from '../../../public/assets/SnowField.svg';
import Calendar from './components/Calendar';
import QnaCounter from './components/QnaCounter';
import { Suspense, useCallback, useEffect, useState } from 'react';
import GiftItem from './components/GiftItem';
import WinningList from './components/WinningList';
import AnswerList from './components/AnswerList';
import Snow from './components/Snow';
import Bell from './components/Bell';
import consoleArt from '@/utils/consoleArt';
import useModal from '@/pages/Home/hooks/useModal';
import { modals } from '@/components/Modals';
import { session } from '@/utils/session';

const Home = () => {
  const { openModal } = useModal();
  const [userName, setUserName] = useState(session.get('userName'));

  const isSessionMissing = useCallback(() => {
    return (
      !session.get('userId') ||
      !session.get('userName') ||
      session.get('userId') === ''
    );
  }, []);

  const handleLoginModalClick = useCallback(() => {
    openModal(modals.LoginModal, {
      onSubmit: () => {
        setUserName(session.get('userName'));
      },
    });
  }, [openModal]);

  useEffect(() => {
    if (isSessionMissing()) {
      handleLoginModalClick();
    }
  }, [isSessionMissing, handleLoginModalClick]);

  useEffect(() => {
    consoleArt();
  }, []);

  return (
    <div className="relative flex flex-col items-center h-full max-w-full min-h-screen">
      <Snow />
      <div className="absolute top-0 left-0">
        <img src={Leaf} alt="나뭇잎" />
        <Bell />
        <WinningList />
      </div>

      <div className="flex flex-col items-center justify-center mt-[15vh]">
        <span className="text-base text-white md:text-lg font-pretendard">
          매일이 설레는 {userName ? `${userName}님의 ` : ''}선물!
        </span>
        <img src={Logo} alt="테커벤트 캘린더 로고" className="w-[95%] mb-4" />
      </div>

      <Calendar />
      <div className="w-full sm:h-[350px] md:h-[450px]" />

      <img src={SnowField} alt="눈" className="absolute bottom-0" />

      <div className="absolute bottom-0 flex w-full max-h-84">
        <div className="relative z-10 basis-[50%]">
          <AnswerList />
          <Suspense fallback={''}>
            <QnaCounter />
          </Suspense>
        </div>

        <div className="relative flex flex-col justify-start basis-[50%] mb-5">
          <GiftItem />

          <div className="flex flex-col mb-3 text-white sm:mt-5 md:mb-12">
            <h1 className="text-[90%] md:text-[140%] font-jua">
              <span className="text-yellowText">2024년, 올 한해도 수고한</span>
              <br />
              <span className="text-yellowText">테커인</span> 을 위한 힐링 선물
            </h1>
            <span className="font-pretendard text-[55%] md:text-[80%]">
              (1일 1회 참여 가능)
            </span>
            <span className="font-pretendard text-[55%] md:text-[80%]">
              이벤트 기간: 2024년 12월 25일 ~ 31일
            </span>
          </div>

          <div className="flex flex-col justify-start ml-4 transition-opacity duration-300 opacity-0 md:opacity-100">
            <h1 className="text-[100%] md:text-[120%] font-jua">
              <span className="font-jua text-confirmText">
                트리에 모든 답변이
              </span>
              <br />
              <span className="font-jua text-confirmText">
                차곡차곡 쌓이는 중...🎄
              </span>
            </h1>
            <span className="font-pretendard font-semibold text-[60%] md:text-[70%] text-black">
              모두의 마음이 모여 트리가 채워지고 있어요!
            </span>
            <span className="font-pretendard font-semibold text-[60%] md:text-[70%] text-black">
              트리를 클릭해 이야기들을 함께 확인해보세요.
            </span>
            <span className="font-pretendard text-[60%] md:text-[70%] text-grayText">
              (31일 확인 가능)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
