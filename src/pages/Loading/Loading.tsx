import Lottie from 'lottie-react';
import loadingLottie from '../../assets/lottie/loadingLottie.json';
import * as S from './Loading.style';
import React, { ReactNode } from 'react';

type LoadingProps = { children?: ReactNode };

const Loading = ({ children }: LoadingProps) => {
  return(
    <S.LoadingWrapper>
      <Lottie animationData={loadingLottie}/>
      {children && children}
    </S.LoadingWrapper>
  );
};

export default Loading;