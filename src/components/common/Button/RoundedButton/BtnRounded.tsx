import * as S from './BtnRounded.style';
import React from 'react';

interface BtnRoundedProps {
  children: React.ReactNode;
  onClick: VoidFunction;
}

const BtnRounded = ({ children, onClick }: BtnRoundedProps) => {
  return(
    <S.ButtonWrapper onClick={() => onClick()}>
      {children}
    </S.ButtonWrapper>
  );
};

export default BtnRounded;