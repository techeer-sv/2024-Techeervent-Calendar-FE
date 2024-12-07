import Building from '../../../../public/assets/Building.svg';
import CloseWindow from './CloseWindow';
import CalendarPosition from './WindowPosition';

const Calendar = () => {
  return (
    <div className="relative mb-6 md:mb-10">
      <img src={Building} alt="캘린더 뼈대" className="w-[100%]" />
      {CalendarPosition.map(({ date, x, y }) => (
        <CloseWindow
          key={date}
          date={date}
          style={{ top: y, left: x }}
          className="absolute w-[18%] object-cover"
        />
      ))}
    </div>
  );
};
export default Calendar;
