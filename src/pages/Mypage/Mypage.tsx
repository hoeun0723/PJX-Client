import React from "react";
import * as S from './Mypage.style';
import Title from './../../components/common/Title/Title';
import mockImage from '../../assets/profileMockImage.png';
import { IcCheck, IcPen, IcRight, IcSearch } from '../../assets/svg';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
  const navigate = useNavigate();
  const options = [
    {
      text: '내 지출 요약',
      icon: <IcCheck fill='#000000' />,
      onclick: () => {navigate('/')},
    },
    {
      text: '내 또래 친구 목록',
      icon: <IcSearch />,
      onclick: () => {navigate('/mypage-friends')},
    },
  ];

  const summaries = [
    {
      label: 'days',
      value: '1034',
      text: '일 동안',
    },
    {
      label: 'costs',
      value: '1000000',
      text: '원을 아꼈어요',
    },
    {
      label: 'friends',
      value: '3',
      text: '명의 또래 친구가 생겼어요',
    },
  ];
  
  const handleProfile = () => {
    navigate('/mypage-profile');
  };

  return (
    <S.MyPageWrapper>
      <Title isLarge={false}>마이페이지</Title>
      <S.ProfileBox>
        <S.ProflieImage src={mockImage}/>
        <S.NicknameBox onClick={() => handleProfile()}>
          닉네임
          <S.IconBox>
            <IcPen width={'1.8rem'} height={'1.8rem'}/>
          </S.IconBox>
        </S.NicknameBox>
      </S.ProfileBox>
      <S.SummaryBox>
        {
          summaries.map((summary) => (
            <p key={summary.label}>
              <S.SummarySpan isDays={summary.label === 'days'}>
                {summary.value}
              </S.SummarySpan>
              {summary.text}
            </p>
          ))
        }
      </S.SummaryBox>
      <S.NavigateField>
        {
          options.map((option) => (
            <S.NavigateBox key={option.text} onClick={option.onclick}>
              {option.icon}
              <p>{option.text}</p>
              <IcRight />
            </S.NavigateBox>
          ))
        }
      </S.NavigateField>
    </S.MyPageWrapper>
  );
};

export default Mypage;