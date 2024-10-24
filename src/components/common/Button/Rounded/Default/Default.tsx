import React from "react";
import * as S from './Default.style';
import { IcCheck } from "../../../../../assets/svg";
interface DefaultProps {
    onClick: () => void;
  }

const Default = ({onClick}:DefaultProps) => {
    return (
        <S.DefaultWrapper onClick={onClick}><IcCheck fill="#27262E"/>내 또래 친구</S.DefaultWrapper>
    )
}

export default Default;