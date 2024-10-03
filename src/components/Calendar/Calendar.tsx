import React, { useRef, useState } from "react";
import { DayPicker } from 'react-day-picker';
import "./DayPicker.css";
import { IcSearch } from '../../assets/svg';
import { ko } from 'date-fns/locale';
import * as S from './Calendar.style';

const getDayName = (date: Date | undefined) => {
    if (!date) return '';
    
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    return days[date.getDay()]; 
};

const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}년 ${month}월 ${day}일`;
};

const Calendar = ({ selectedDate, setSelectedDate }: { selectedDate: Date, setSelectedDate: React.Dispatch<React.SetStateAction<Date>> }) => {
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
    const startX = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (startX.current === null) return;
        const moveX = e.touches[0].clientX - (startX.current as number);
        if (moveX > 50) {
            setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
            startX.current = null;
        } else if (moveX < -50) {
            setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
            startX.current = null;
        }
    };

    return(
        <S.CalendarWrapper  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <S.DateWrapper>
                <S.YearMonthDate>{formatDate(selectedDate)}</S.YearMonthDate>
                <S.IconWrapper>
                    <S.Day>{getDayName(selectedDate)}</S.Day>
                    <IcSearch />
                </S.IconWrapper>
            </S.DateWrapper>
            <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                locale={ko}
                weekStartsOn={1}
                month={currentMonth}
                onMonthChange={setCurrentMonth}
            />
        </S.CalendarWrapper>
    );
}

export default Calendar;
