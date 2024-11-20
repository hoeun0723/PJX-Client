import * as S from './OnboardingInput.style';
import React from 'react';

interface OnboardingInputProps {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode
  isError: boolean;
}

function OnboardingInput ({ placeholder, name, value, onChange, isError }: OnboardingInputProps){
  return(
    <S.OnboardingInputWrapper>
      <S.TextInput 
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        $isError={isError}
      />
      {isError && <S.ErrorText>동일한 닉네임이 있어요</S.ErrorText>}
    </S.OnboardingInputWrapper>
  );
}

export default OnboardingInput;