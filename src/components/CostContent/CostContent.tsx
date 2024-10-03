import React from "react";
import * as S from './CostContent.style';
import { IcNoneEmoz } from "../../assets/svg";
import { useNavigate } from "react-router-dom";

const getDayName = (date: Date | undefined) => {
    if (!date) return '';
    
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    return days[date.getDay()]; 
};

const CostContent = ({ selectedDate }: { selectedDate: Date }) => {
    const navigate = useNavigate();
    const currentDay = getDayName(selectedDate);

    return (
        <S.CostContentWrapper>
            <S.DayWrapper>
             <S.Day><p>오늘 {currentDay}</p>지출 한줄평을 작성해보세요.</S.Day>
             <IcNoneEmoz/>
             </S.DayWrapper>
             <S.AddContentBtn onClick={()=>navigate('/write-cost')}>+ 지출추가</S.AddContentBtn>
        </S.CostContentWrapper>
    )
}
export default CostContent;
