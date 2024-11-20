import InputType from '../../../types/InputType';
import BtnContained from '../../common/Button/ContainedButton/BtnContained';
import BtnSmall from '../../common/Button/SmallButton/BtnSmall';
import * as S from './CostPrice.style';
import React, { ChangeEvent } from 'react';

interface CostPriceProps {
  price: number;
  category: string;
  setValues: React.Dispatch<React.SetStateAction<InputType>>;
  onPrev: VoidFunction;
}

const CostPrice = ({ price, category, setValues, onPrev}: CostPriceProps) => {
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
    setValues((prevValues) => ({
      ...prevValues,
      price: Number(e.target.value),
    }));
  };
  const handlePrice = (value: number) => {
    setValues((prevValues) => ({
      ...prevValues,
      price: price + value,
    }));
  };

  return(
    <S.CostPriceWrapper>
      <S.InputBox>
        <S.PriceInput 
          value={price}
          placeholder='0'
          onChange={onChange}
        /> 원
      </S.InputBox>
      <S.NameText>{category}</S.NameText>
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