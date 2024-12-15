import React, { useEffect, useState } from "react";
import * as S from './CostContent.style';
import { useNavigate } from "react-router-dom";
import EmotionSelect from "../EmotionSelect/EmotionSelect";
import PaidContent from "../PaidContent/PaidContent";
import usePostDayPaid from "../../hooks/queries/home/usePostDayPaid";

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
    
    return `${year}-${month}-${day}`;
};

const CostContent = ({ selectedDate }: { selectedDate: Date}) => {
    const navigate = useNavigate();
    const currentDay = getDayName(selectedDate);
    const { mutate: dayPaid } = usePostDayPaid();
 
    const [spendingList, setSpendingList] = useState<
    Array<{
        note: string;
        amount: number;
        description: string;
        images: string[];
    }>
>([]);
    useEffect(()=>{
        if (!selectedDate) return;

    const formattedDate = formatDate(selectedDate); // 날짜 변환
    localStorage.setItem('selectedDate', formattedDate); // 로컬 스토리지에 저장

    dayPaid(formattedDate, {
        onSuccess: (data) => {
            console.log(data);
            if (data && data.spendingList && data.spendingList.length > 0) {
                setSpendingList(data.spendingList);
            } else {
                setSpendingList([]);
            }
        },
        onError: (error) => {
            console.error("Error fetching spending data:", error);
            setSpendingList([]);
        },
    });
    },[selectedDate, dayPaid])
    

    const hasPaidContent = spendingList.length > 0;

    return (
        <S.CostContentWrapper>
            <S.DayWrapper>
                <S.Day><p>오늘 {currentDay}</p>지출 한줄평을 작성해보세요.</S.Day>
                {hasPaidContent && <EmotionSelect selectedDate={selectedDate} />}
            </S.DayWrapper>
                <S.AddContentBtn onClick={() => navigate('/write-type')}>
                    + 지출추가
                </S.AddContentBtn>
            {hasPaidContent &&
                spendingList.map((item, index) => (
                    <PaidContent
                        key={index} // 각 PaidContent에 고유한 key 제공
                        note={item.note}
                        amount={item.amount}
                        description={item.description}
                        images={item.images}
                    />
                ))}
        </S.CostContentWrapper>
    )
}

export default CostContent;
