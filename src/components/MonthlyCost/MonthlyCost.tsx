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

const formatCost = (cost:number) => {
    if (cost >= 10000000) {
        return `${Math.floor(cost / 10000000)}천만원`;
    } else if (cost >= 1000000) {
        return `${Math.floor(cost / 1000000)}백만원`;
    } else if (cost >= 1000) {
        return `${Math.floor(cost / 10000)}만원`;
    } else {
        return `${cost}원`;
    }
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

    const userNickname = localStorage.getItem('nickname');
    return (
        <>
        <S.IcPenWrapper onClick={()=>navigate('/monthly-goal')}><IcPen width={'2.2rem'} height={'2.2rem'}/></S.IcPenWrapper>
            <S.MonthlyPaidWrapper>
                <p ><span>{userNickname}</span> 이번달 지출</p>
                {formatCost(cost)}
            </S.MonthlyPaidWrapper>
            <S.MonthlyGoalWrapper>
                <p>목표 지출 <span> {maxGoal}원</span></p>
            </S.MonthlyGoalWrapper>
            <S.ProgressBarWrapper>
                <S.ProgressBarFill $widthpercentage={handleAmount} />
            </S.ProgressBarWrapper>
        </>
    )
}

export default MonthlyCost;