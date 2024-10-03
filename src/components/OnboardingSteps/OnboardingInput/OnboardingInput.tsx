import * as S from './OnboardingInput.style';
import React from 'react';

interface OnboardingInputProps {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode
}

function OnboardingInput ({ placeholder, name, value, onChange, children }: OnboardingInputProps){
  return(
    <S.OnboardingInputWrapper>
      <S.InputAreaBox>
        <S.TextInput 
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {children}
      </S.InputAreaBox>
    </S.OnboardingInputWrapper>
  );
}

export default OnboardingInput;