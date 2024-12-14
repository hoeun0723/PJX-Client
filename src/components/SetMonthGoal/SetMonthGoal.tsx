import { useNavigate } from 'react-router-dom';
import BtnContained from '../common/Button/ContainedButton/BtnContained';
import BtnSmall from '../common/Button/SmallButton/BtnSmall';
import * as S from './SetMonthGoal.style';
import React, { ChangeEvent, useState } from 'react';
import WriteHeader from '../common/WriteHeader/WriteHeader';
import usePostMonthGoal from '../../hooks/queries/home/usePostMonthGoal';


const SetMonthGoal = () => {
    const navigate = useNavigate();
    const postMonthGoalMutation = usePostMonthGoal();
    const [values, setValues] = useState({
        price:0,
        memo:'',
        image:'',
      });
    const counts = [
        {
          label: '1천원',
          value: 1000,
        },
        {
          label: '5천원',
          value: 5000,
        },
        {
          label: '1만원',
          value: 10000,
        },
        {
          label: '3만원',
          value: 30000,
        },
      ];

      const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        if (newValue >= 100000000) {
            alert('값이 너무 큽니다. 8자리 이하로 입력해주세요.');
            return;
        }
        setValues((prevValues) => ({
            ...prevValues,
            price: newValue,
        }));
    };

    const handlePrice = (value: number) => {
        const newPrice = values.price + value;
        if (newPrice >= 100000000) {
            alert('값이 너무 큽니다. 8자리 이하로 입력해주세요.');
            return;
        }
        setValues((prevValues) => ({
            ...prevValues,
            price: newPrice,
        }));
    };

      const handleSubmit = () => {
        console.log("버튼 눌렸다.");
        localStorage.setItem('MONTHLY_GOAL',values.price.toString());
        navigate('/home');

        postMonthGoalMutation.mutate(values.price)
        
        
    }
    
    return (
        <S.Wrapper>
            <WriteHeader onPrev={()=>navigate(-1)}>한달지출목표</WriteHeader>
        <S.SetMonthGoalWrapper>
            <S.InputBox>
        <S.PriceInput 
          value={values.price}
          placeholder='0'
          onChange={onChange}
        /> 원
      </S.InputBox>
      <S.NameText>금액을 입력해주세요</S.NameText>
      <S.CountButtonField>
        {
          counts.map((count) => (
            <BtnContained
              key={count.label}
              onClick={() => handlePrice(count.value)}
              value={count.value}
            >
              {count.label}
            </BtnContained>
          ))
        }
      </S.CountButtonField>
      <S.ButtonField>
        <BtnSmall onClick={handleSubmit}>확인</BtnSmall>
      </S.ButtonField>
        </S.SetMonthGoalWrapper>
        </S.Wrapper>
    )
}

export default SetMonthGoal;