import { IcPen } from '../../assets/svg';
import React, { useEffect, useState }  from "react";
import * as S from './MonthlyCost.style';
import { useNavigate } from 'react-router-dom';
import usePostPaid from '../../hooks/queries/home/usePostPaid';

const formatMonth = (date: Date | undefined) => {
    if (!date) return '';
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    
    return `${year}-${month}`;
};

const MonthlyCost = ({selectedDate}: { selectedDate: Date}) => {
    const navigate = useNavigate();
    const { mutate: paidCost } = usePostPaid();
    const [cost, setCost] = useState(0);
    useEffect(()=>{
        const response = paidCost(formatMonth(selectedDate),{
            onSuccess: (data) => {
              console.log(data);
              setCost(data?.currentSpending || 0);
            },
            onError: (error) => {
                console.error("Failed to fetch paid cost:", error);
                setCost(0);
            },
          })
          console.log(response);
    },[selectedDate,paidCost]);
    
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
                {cost}원
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