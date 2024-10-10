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
      </S.NicknameBox>
      {
        !isClick ? <IcPlus /> : <IcCheck fill='#FF5B29'/>
      }
    </S.FriendItemWrapper>
  );
};

export default FriendItem;