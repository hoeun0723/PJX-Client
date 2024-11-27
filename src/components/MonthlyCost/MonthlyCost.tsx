import { IcPen } from '../../assets/svg';
import React, { useState }  from "react";
import * as S from './MonthlyCost.style';
import { useNavigate } from 'react-router-dom';
//import usePostPaid from '../../hooks/queries/home/usePostPaid';
const MonthlyCost = () => {
    const navigate = useNavigate();
    //const userPaid = usePostPaid();
    //const paidResponse = userPaid.mutate("2024-11");
    const [currentAmount, setCurrentAmount] = useState(0);
    const maxGoal = parseInt(localStorage.getItem('MONTHLY_GOAL') || '0', 10);
    const handleAmount = () => {
        setCurrentAmount((currentAmount / maxGoal) * 100);
    }
    return (
        <>
        <S.IcPenWrapper onClick={()=>navigate('/monthly-goal')}><IcPen width={'2.2rem'} height={'2.2rem'}/></S.IcPenWrapper>
            <S.MonthlyPaidWrapper>
                <p ><span>닉네임</span> 이번달 지출</p>
                1000원
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