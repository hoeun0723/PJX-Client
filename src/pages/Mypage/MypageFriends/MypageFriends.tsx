import { useNavigate } from 'react-router-dom';
import FriendList from '../../../components/Friend/FriendList/FriendList';
import * as S from './MypageFriends.style';
import React from 'react';
import { IcBack } from '../../../assets/svg';
import Title from '../../../components/common/Title/Title';

const MypageFriends = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return(
    <S.MypageFriendsWrapper>
      <Title isLarge={false}>
        <S.IconBox onClick={() => handleBack()}>
          <IcBack />
        </S.IconBox>
        내 또래 친구 목록
      </Title>
      <S.FriendListBox>
        <FriendList />
      </S.FriendListBox>
    </S.MypageFriendsWrapper>
  );
};

export default MypageFriends;