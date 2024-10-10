import { IcPen } from '../../assets/svg';
import React, { useState }  from "react";
import * as S from './MonthlyCost.style';
const MonthlyCost = () => {
    const [currentAmount, setCurrentAmount] = useState(50000);
    const maxGoal = 100000;
    const handleAmount = () => {
        setCurrentAmount((currentAmount / maxGoal) * 100);
    }
    return (
        <>
        <S.IcPenWrapper><IcPen width={'2.2rem'} height={'2.2rem'}/></S.IcPenWrapper>
            <S.MonthlyPaidWrapper>
                <p><span>닉네임</span> 이번달 지출</p>
                {currentAmount}원
            </S.MonthlyPaidWrapper>
            <S.MonthlyGoalWrapper>
                <p>목표 지출 <span> {maxGoal}만원</span></p>
            </S.MonthlyGoalWrapper>
            <S.ProgressBarWrapper>
                <S.ProgressBarFill widthPercentage={handleAmount} />
            </S.ProgressBarWrapper>
        </>
    )
}

export default MonthlyCost;