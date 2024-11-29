import InputType from '../../../types/InputType';
import BtnSmall from '../../common/Button/SmallButton/BtnSmall';
import * as S from './CostName.style';
import React, { ChangeEvent } from 'react';

interface CostNameProps {
  description: string;
  setValues: React.Dispatch<React.SetStateAction<InputType>>;
  onPrev: VoidFunction;
}

const CostName = ({ description, setValues, onPrev }: CostNameProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      description: e.target.value,
    }));
  };
  return(
    <S.CostNameWrapper>
      <S.NameInput 
        value={description}
        placeholder='지출 내용을 입력해주세요'
        onChange={onChange}
      />
      <S.ButtonField>
        <BtnSmall onClick={() => onPrev()}>확인</BtnSmall>
      </S.ButtonField>
    </S.CostNameWrapper>
  );
};

export default CostName;