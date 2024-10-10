import StepProps from '../../../types/StepPropsType';
import BtnSmall from '../../common/Button/SmallButton/BtnSmall';
import OnboardingInput from '../OnboardingInput/OnboardingInput';
import Title from '../../common/Title/Title';
import * as S from './Step2.style';
import { ChangeEvent, useState } from 'react';
import React from 'react';

function Step2 ({ onNext }: StepProps){
  const [value, setValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleNext = () => {
    console.log(value);
    onNext();
  };
  return(
    <S.Step2Wrapper>
      <Title>
        😎 <br /> 
        본인을 확인할 수 있는 <br />
        닉네임을 입력해 주세요
      </Title>
      <OnboardingInput 
        placeholder='닉네임을 입력해주세요'
        name={value}
        value={value}
        onChange={onChange}
      />
      <S.ButtonField>
        <BtnSmall onClick={handleNext}>확인</BtnSmall>
      </S.ButtonField>
    </S.Step2Wrapper>
  );
}

export default Step2;