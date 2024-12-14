import React, { useState } from "react";n
import * as S from './Mypage.style';
import Title from './../../components/common/Title/Title';
//import usePostSummary from '../../hooks/queries/mypage/usePostSummary';
import { IcPen } from '../../assets/svg';
import { useNavigate } from 'react-router-dom';
import { UserInfoProvider } from '../../context/User/UserInfoContext';
import useGetProfile from '../../hooks/queries/mypage/useGetMypageInfo';
import BtnLarge from '../../components/common/Button/LargeButton/BtnLarge';
import Loading from '../Loading/Loading';

const Mypage = () => {
  const navigate = useNavigate();
  const userNickname = localStorage.getItem('nickname');
  const { data } = useGetProfile();
  const { isPending, mutate: postSummary } = usePostSummary();
  const [summaryValues, setSummaryValues] = useState({
    amount: 0,
    category: '',
    rate: '',
    comment: '',
    error: undefined,
  });

  const handleProfile = () => {
    navigate('/mypage-profile');
  };
  const handlePost = () => {
    postSummary({}, {
      onSuccess: (data) => {
        setSummaryValues(prevState => ({
          ...prevState,
          amount: data['총 지출 금액'],
          category: data['주요 지출 카테고리'],
          rate: data['월간 예산 대비 초과 또는 절약 금액'],
          comment: data['지출 절약을 위한 추천 사항'],
          error: data.error,
        }));
      },
    });
  }
  console.log(summaryValues)
  return (
    <UserInfoProvider>
      <S.MyPageWrapper>
        <Title isLarge={false}>마이페이지</Title>
        <S.ProfileBox>
          <S.ProflieImage src={data.data}/>
          <S.NicknameBox onClick={() => handleProfile()}>
            {userNickname}
            <S.IconBox>
              <IcPen width={'1.8rem'} height={'1.8rem'}/>
            </S.IconBox>
          </S.NicknameBox>
        </S.ProfileBox>
        <S.SummaryBox>
          {
            isPending ?  
              <Loading>AI 지출 요약 중</Loading> 
            : (
              summaryValues.amount === 0 ? ('지출을 분석해보세요!') : 
              (
                summaryValues.error === undefined ? 
                <>
                  <p>이번 달 총 <S.SummarySpan $isDays={true}>{summaryValues.amount}</S.SummarySpan> 원 지출</p>
                  <p>주요 지출 카테고리 <S.SummarySpan $isDays={false}>{summaryValues.category}</S.SummarySpan></p>
                  <p>월간 예상 대비 <S.SummarySpan $isDays={false}>{summaryValues.rate}</S.SummarySpan></p>
                  <S.CommentText>{summaryValues.comment}</S.CommentText>
                </> 
                :
                ('지출 내역이 없습니다!')
              )
            )
          }
        </S.SummaryBox>
        <BtnLarge onClick={handlePost}>AI분석 결과 요청하기</BtnLarge>
      </S.MyPageWrapper>
    </UserInfoProvider>
  );
};

export default Mypage;