import React, { useEffect, useState } from 'react';
import CalendarData, { USER_CALENDAR } from '../components/CalendarData';
import { toast } from '@/hooks/use-toast';

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

  const TODAY = 29; // 현재 날짜;
  const toggleWindow = (date: number) => {
    if (date > TODAY) {
      // 아직 도착하지 않은 날짜
      toast({
        title: `📅 ${date}일은 아직 도착하지 않았어요!`,
        description: '조금만 더 기다리세요!',
        style: {
          background: '#ffeb3d',
          color: 'black',
          padding: '16px',
          fontWeight: 'bold',
          borderRadius: '12px',
        },
      });
    } else if (date === TODAY) {
      // 오늘 열리는 날짜
      toast({
        title: '🎁 선물이 열렸습니다!',
        description: '오늘 날짜의 선물을 열어보세요!',
        style: {
          background: '#2ecc71',
          color: 'white',
          padding: '16px',
          fontWeight: 'bold',
          borderRadius: '12px',
        },
      });

      setCalendarPositions((prev) =>
        prev.map((pos) =>
          pos.date === date ? { ...pos, isOpen: !pos.isOpen } : pos
        )
      );
    } else {
      // 이미 지나간 날짜
      toast({
        title: `❄️ ${date}일이 이미 지나갔어요!`,
        description: '놓친 선물을 다시 확인하세요.',
        style: {
          background: '#ff5722',
          color: 'white',
          padding: '16px',
          fontWeight: 'bold',
          borderRadius: '12px',
        },
      });
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
