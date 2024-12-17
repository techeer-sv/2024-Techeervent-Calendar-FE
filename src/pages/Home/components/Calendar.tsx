import { modals } from '@/components/Modals';
import { useEffect, useState } from 'react';
import Building from '../../../../public/assets/Building.svg';
import useCalendar from '../hooks/useCalendar';
import Window from './Window';
import useModal from '../hooks/useModal';

const Calendar = () => {
  const { calendarPositions, toggleWindow, TODAY } = useCalendar();
  const { openModal } = useModal();
  const [days, setDays] = useState<number>(new Date().getDate());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const currentDay = currentDate.getDate();

      setDays((prevDay) => {
        if (prevDay !== currentDay) {
          return currentDay;
        }
        return prevDay;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlenQuestionModalClick = () => {
    openModal(modals.QuestionModal, {
      onSubmit: () => {
        console.log('비즈니스 로직 처리...');
      },
      onClose: () => {},
    });
  };

  const handleQuestionCheckModalClick = () => {
    openModal(modals.QuestionCheckModal, {
      onClose: () => {},
    });
  };

  return (
    <div className="relative mb-8">
      <img src={Building} alt="캘린더 뼈대" className="w-[100%]" />
      {calendarPositions.map(({ qa, date, x, y, isOpen, giftImage }) => (
        <Window
          key={date}
          date={date}
          isOpen={isOpen}
          onClick={() => date === days && toggleWindow(date)}
          giftImage={giftImage}
          style={{ top: y, left: x }}
          className="absolute w-[18%] object-cover"
          TODAY={TODAY}
          modal={qa ? handleQuestionCheckModalClick : handlenQuestionModalClick}
        />
      ))}
    </div>
  );
};

export default Calendar;
