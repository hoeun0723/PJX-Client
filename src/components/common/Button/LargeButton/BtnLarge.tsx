import React from 'react';
import * as S from './BtnLarge.style';

interface BtnLargeProps {
  onClick: () => void;
  children: React.ReactNode;
}

function BtnLarge ({ onClick, children }: BtnLargeProps){
  return(
    <S.ButtonWrapper onClick={() => onClick()}>
      {children}
    </S.ButtonWrapper>
  );
}

export default BtnLarge;