import React from "react";
import * as S from './CostContent.style';
import { useNavigate } from "react-router-dom";
import EmotionSelect from "../EmotionSelect/EmotionSelect";
import PaidContent from "../PaidContent/PaidContent";

const getDayName = (date: Date | undefined) => {
    if (!date) return '';
    
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    return days[date.getDay()]; 
};

const CostContent = ({ selectedDate }: { selectedDate: Date }) => {
    const navigate = useNavigate();
    const currentDay = getDayName(selectedDate);
    const paidContentExample = {
        note: "바이바이 샐러드",
        amount: 42000,
        description: "집 근처에 있는 샐러드 가게에 갔는데 안사먹을 수가 없었다...진짜 대박 맛집이었어...애들아 다들 먹어....ㅋㅋㅋ",
        images: [
            "https://github.com/user-attachments/assets/aec0820f-3805-4951-876f-8ae8912daf11", // 첫 번째 이미지 URL
            "https://github.com/user-attachments/assets/aec0820f-3805-4951-876f-8ae8912daf11"  // 두 번째 이미지 URL
        ]
    };

    const hasPaidContent = Boolean(paidContentExample.note);

    return (
        <S.CostContentWrapper>
            <S.DayWrapper>
                <S.Day><p>오늘 {currentDay}</p>지출 한줄평을 작성해보세요.</S.Day>
                <EmotionSelect/>
            </S.DayWrapper>
            {!hasPaidContent && (
                <S.AddContentBtn onClick={() => navigate('/write-type')}>+ 지출추가</S.AddContentBtn>
            )}
            <PaidContent 
                note={paidContentExample.note} 
                amount={paidContentExample.amount} 
                description={paidContentExample.description} 
                images={paidContentExample.images}
            />
        </S.CostContentWrapper>
    )
}

export default CostContent;
