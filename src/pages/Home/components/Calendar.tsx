import { modals } from '@/components/Modals';
import Building from '../../../../public/assets/Building.svg';
import useCalendar from '../hooks/useCalendar';
import Window from './Window';
import useModal from '../hooks/useModal';
import { session } from '@/utils/session';
import { CalendarPosition } from '../hooks/useCalendar';
import { fetchRandomQuestion } from '@/services/question';

const Calendar = () => {
  const { calendarPositions, toggleWindow, today } = useCalendar(
    session.get('userId') || ''
  );
  const { openModal } = useModal();

  const handlenQuestionModalClick = async (date: number) => {
    const questionData = await fetchRandomQuestion(session.get('userId') || '');

    openModal(modals.QuestionModal, {
      onSubmit: () => {},
      date,
      questionData,
    });
  };

  const handleQuestionCheckModalClick = ({
    qa,
    date,
    x,
    y,
    isOpen,
    giftImage,
  }: CalendarPosition) => {
    console.log('qa', qa);
    openModal(modals.QuestionCheckModal, {
      onClose: () => {},
      calendar: { qa, date, x, y, isOpen, giftImage },
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
          today={today}
          modal={() =>
            qa
              ? handleQuestionCheckModalClick({
                  qa,
                  date,
                  x,
                  y,
                  isOpen,
                  giftImage,
                })
              : handlenQuestionModalClick(date)
          }
        />
      ))}
    </div>
  );
};

export default Calendar;
