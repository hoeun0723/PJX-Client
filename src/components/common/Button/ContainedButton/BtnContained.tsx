import * as S from './BtnContained.style';
import React from 'react';

interface BtnContainedProps {
  onClick: (value: number) => void;
  children: React.ReactNode;
  value: number;
}

const BtnContained = ({ onClick, children, value}: BtnContainedProps) => {
  return (
    <S.ButtonWrapper onClick={() => onClick(value)}>
      {`+ ${children}`}
    </S.ButtonWrapper>
  );
};

export default BtnContained;