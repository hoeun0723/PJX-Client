import * as S from './AlarmItem.style';
import React from 'react';
import mockImage from '../../../assets/profileMockImage.png';
import BtnRounded from '../../common/Button/RoundedButton/BtnRounded';

interface AlarmItemProps {
  nickname: string;
}

const AlarmItem = ({ nickname }: AlarmItemProps) => {
  const handleNavigate = () => {
    alert('보러가기');
  };

  return(
    <S.AlarmItemWrapper>
      <S.ProfileImage src={mockImage}/>
      <S.TextBox>
        {nickname}님이 반응을 남겼어요
        <span>2일전</span>
      </S.TextBox>
      <BtnRounded onClick={handleNavigate}>보러가기</BtnRounded>
    </S.AlarmItemWrapper>
  );
};

export default AlarmItem;