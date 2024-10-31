import { IcBack } from '../../../assets/svg';
import * as S from './WriteHeader.style';
import React from 'react';

interface WriteHeaderProps {
  children: React.ReactNode;
  onPrev: VoidFunction;
}

const WriteHeader = ({ children, onPrev }: WriteHeaderProps) => {
  
  return(
    <S.WriteHeaderWrapper>
      <S.IconWrapper onClick={() => onPrev()}>
        <IcBack />
      </S.IconWrapper>
      {children}
      <S.BlankBox />
    </S.WriteHeaderWrapper>
  );
};

export default WriteHeader;