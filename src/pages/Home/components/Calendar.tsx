import { useState } from 'react';
import Building from '../../../../public/assets/Building.svg';
import Window from './Window';
import CalendarData from './CalendarData';

const Calendar = () => {
  const [positions, setPositions] = useState(CalendarData);

  const toggleWindow = (date: number) => {
    setPositions((prev) =>
      prev.map((pos) =>
        pos.date === date ? { ...pos, isOpen: !pos.isOpen } : pos
      )
    );
  };

  return (
    <div className="relative mb-8">
      <img src={Building} alt="캘린더 뼈대" className="w-[100%]" />
      {positions.map(({ date, x, y, isOpen, giftImage }) => (
        <Window
          key={date}
          date={date}
          isOpen={isOpen}
          onClick={() => toggleWindow(date)}
          giftImage={giftImage}
          style={{ top: y, left: x }}
          className="absolute w-[18%] object-cover"
        />
      ))}
    </div>
  );
};
export default Calendar;
