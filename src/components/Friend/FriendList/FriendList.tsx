import * as S from './FriendList.style';
import React from 'react';
import FriendItem from '../FriendItem/FriendItem';

const FriendList = () => {
  const friendMockData = [
    'Nickname1',
    'Nickname2',
    'Nickname3',
    'Nickname4',
    'Nickname5',
    'Nickname6',
    'Nickname7',
  ];

  return(
    <S.FriendListWrapper>
      {
        friendMockData.map((friend) => (
          <FriendItem key={friend}>
            {friend}
          </FriendItem>
        ))
      }
    </S.FriendListWrapper>
  );
};

export default FriendList;
