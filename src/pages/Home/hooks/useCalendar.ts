import React, { useEffect, useState } from 'react';
import CalendarData, { USER_CALENDAR } from '../components/CalendarData';
import useModal from './useModal';
import { modals } from '@/components/Modals';

interface CalendarPosition {
  date: number;
  x: string;
  y: string;
  isOpen: boolean;
  giftImage: React.ReactNode;
  calendarId?: number;
  qa?: {
    question: string;
    answer: string;
  };
  drawName?: string | null;
}

const useCalendarInfo = () => {
  const [calendarPositions, setCalendarPositions] = useState<
    CalendarPosition[]
  >([]);
  const { openModal } = useModal();

  const date = new Date();
  const TODAY = date.getDate();
  const handleUnableConfirmModalClick = (date: number) => {
    openModal(modals.UnableConfirmModal, {
      onSubmit: () => {
        console.log('비즈니스 로직 처리...');
      },
      Day: () => {
        return date;
      },
    });
  };

  const toggleWindow = (date: number) => {
    if (date > TODAY) {
      handleUnableConfirmModalClick(date);
    } else if (date === TODAY) {
      setCalendarPositions((prev) =>
        prev.map((pos) =>
          pos.date === date ? { ...pos, isOpen: !pos.isOpen } : pos
        )
      );
    } else {
      handleUnableConfirmModalClick(date);
    }
  };

  useEffect(() => {
    //api 요청해서 USER_CALENDAR 가져오기
    const mergedData = CalendarData.map((calendarItem) => {
      const matchingUserCalendar = USER_CALENDAR.find(
        (userCalendar) => userCalendar.calendarDate === calendarItem.date
      );

      if (matchingUserCalendar) {
        return {
          ...calendarItem,
          calendarId: matchingUserCalendar.calendarId,
          qa: matchingUserCalendar.qa,
          drawName: matchingUserCalendar.drawName,
          isOpen: true,
        };
      }

      return calendarItem;
    });

    setCalendarPositions(mergedData);
  }, []);

  return { calendarPositions, setCalendarPositions, toggleWindow, TODAY };
};

export default useCalendarInfo;
