import React from 'react';
import * as S from './OnboardingTitle.style';

interface OnboardingTitleProps {
  children: React.ReactNode;
}

function OnboardingTitle ({ children }: OnboardingTitleProps) {
  return(
    <S.OnboardingTitleWrapper>
      {children}
    </S.OnboardingTitleWrapper>
  );
}

export default OnboardingTitle;