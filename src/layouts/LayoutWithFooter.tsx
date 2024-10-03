import React from 'react';
import { useMobile } from '../hooks/useMobile';
import { Outlet } from 'react-router-dom';
import GNB from '../components/GNB/GNB';
import * as S from './Layout.style';

const LayoutWithFooter = () => {
  useMobile();

  return (
    <S.LayoutWithFooterWrapper>
      <Outlet />
      <GNB/>
    </S.LayoutWithFooterWrapper>
  );
};

export default LayoutWithFooter;