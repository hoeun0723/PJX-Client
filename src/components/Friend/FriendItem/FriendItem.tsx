import * as S from './FriendItem.style';
import React from 'react';
import profileMockImage from '../../../assets/profileMockImage.png';
import { IcCheck, IcPlus } from '../../../assets/svg';
import { useState } from 'react';
interface FriendItemProps {
  children: React.ReactNode;
}

const FriendItem = ({ children }: FriendItemProps) => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };

  return(
    <S.FriendItemWrapper
      onClick={() => handleClick()}
      $isClick={isClick}
    >
      <S.FriendImg src={profileMockImage}/>
      <S.NicknameBox>
        {children}
        <p>새로 가입한 또래친구</p>
      </S.NicknameBox>
      {
        !isClick ? <IcPlus /> : <IcCheck />
      }
    </S.FriendItemWrapper>
  );
};

export default FriendItem;