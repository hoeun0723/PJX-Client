import AlarmItem from '../AlarmItem/AlarmItem';
import * as S from './AlarmList.style';
import React from 'react';
import None from '../../common/None/None';
const AlarmList = () => {
  const mockDatas = [
    {name: '가', },
    {name: '나', },
    {name: '다', },
    {name: '라', },
  ];

  return(
    <S.AlarmListWrapper>
      {
        mockDatas.length == 0 ?
          <None>
            알림 내역이 아직 없어요 <br />
            친구들의 활동을 기다려주세요
          </None>
        :
          mockDatas.map(mockData => (
            <AlarmItem 
              key={mockData.name}
              nickname={mockData.name}  
            />
          ))
      }
    </S.AlarmListWrapper>
  );
};

export default AlarmList;