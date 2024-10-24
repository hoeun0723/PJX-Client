import React from "react";
import * as S from './Alarm.style';
import Title from '../../components/common/Title/Title';
import AlarmList from '../../components/Alarm/AlarmList/AlarmList';

const Alarm = () => {

  return (
    <S.AlarmWrapper>
      <Title isLarge={false}>알림</Title>
      <S.AlarmBox>
        <AlarmList />
      </S.AlarmBox>
    </S.AlarmWrapper>
  );
};

export default Alarm;