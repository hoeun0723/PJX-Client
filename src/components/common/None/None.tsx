import { IcNone } from '../../../assets/svg';
import * as S from './None.style';
import React from 'react';

interface NoneProps {
  children: React.ReactNode;
}

const None = ({ children }: NoneProps) => {
  return(
    <S.NoneWrapper>
      <IcNone />
      {children}
    </S.NoneWrapper>
  );
};

export default None;