import { modals } from '@/components/Modals';
import Building from '../../../../public/assets/Building.svg';
import useCalendar from '../hooks/useCalendar';
import Window from './Window';
import useModal from '../hooks/useModal';

const Calendar = () => {
  const { calendarPositions, toggleWindow, TODAY } = useCalendar();
  const { openModal } = useModal();

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
          onClick={() => toggleWindow(date)}
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
