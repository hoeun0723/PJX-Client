import React from "react";
import * as S from './Primary.style';
import { IcPlus } from "../../../../../assets/svg";

interface PrimaryProps {
    onClick: VoidFunction;
  }

const Primary = ({onClick}:PrimaryProps) => {
    return (
        <S.PrimaryWrapper onClick={onClick}><IcPlus style={{width: '1.2rem',height: '1.2rem',fill:'white'}}/>친구 맺기</S.PrimaryWrapper>
    )

}

export default Primary;