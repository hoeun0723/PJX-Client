import * as S from './Title.style';
import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  isLarge?: boolean;
}

const Title = ({ children, isLarge = true }: TitleProps) => {
  return(
    <S.TitleWrapper $isLarge={isLarge}>
      {children}
    </S.TitleWrapper>
  );
};

export default Title;