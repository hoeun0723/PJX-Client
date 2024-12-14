import InputType from '../../../types/InputType';
import BtnContained from '../../common/Button/ContainedButton/BtnContained';
import BtnSmall from '../../common/Button/SmallButton/BtnSmall';
import * as S from './CostPrice.style';
import React, { ChangeEvent } from 'react';

interface CostPriceProps {
  amount: number;
  description: string;
  setValues: React.Dispatch<React.SetStateAction<InputType>>;
  onPrev: VoidFunction;
}

const CostPrice = ({ amount, description, setValues, onPrev}: CostPriceProps) => {
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
    if(isNaN(Number(e.target.value))){
      return;
    }
    setValues((prevValues) => ({
      ...prevValues,
      amount: Number(e.target.value),
    }));
  };
  const handlePrice = (value: number) => {
    setValues((prevValues) => ({
      ...prevValues,
      amount: amount + value,
    }));
  };

  return(
    <S.CostPriceWrapper>
      <S.InputBox>
        <S.PriceInput 
          value={amount}
          placeholder='0'
          onChange={onChange}
        /> 원
      </S.InputBox>
      <S.NameText>{description}</S.NameText>
      <S.CountButtonField>
        {
          counts.map((count) => (
            <BtnContained
              key={count.label}
              onClick={handlePrice}
              value={count.value}
            >
              {count.label}
            </BtnContained>
          ))
        }
      </S.CountButtonField>
      <S.ButotnField>
        <BtnSmall onClick={() => onPrev()}>확인</BtnSmall>
      </S.ButotnField>
    </S.CostPriceWrapper>
  );
};

export default CostPrice;