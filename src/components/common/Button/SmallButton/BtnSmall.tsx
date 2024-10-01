import React from 'react';
import * as S from './BtnSmall.style';

interface BtnSmallProps {
  onClick: () => void;
  children: React.ReactNode;
}

function BtnSmall ({ onClick, children }: BtnSmallProps){
  return(
    <S.ButtonWrapper onClick={() => onClick()}>
      {children}
    </S.ButtonWrapper>
  );
};

export default BtnSmall;