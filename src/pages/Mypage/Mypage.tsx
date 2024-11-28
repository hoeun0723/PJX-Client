import React, { useEffect, useState } from "react";
import * as S from './Mypage.style';
import Title from './../../components/common/Title/Title';
import usePostSummary from '../../hooks/queries/mypage/usePostSummary';
import { IcPen } from '../../assets/svg';
import { useNavigate } from 'react-router-dom';
import { UserInfoProvider } from '../../context/User/UserInfoContext';
import useGetProfile from '../../hooks/queries/mypage/useGetMypageInfo';

const Mypage = () => {
  //const { userInfo } = React.useContext(UserInfoContext);
  const navigate = useNavigate();
  const userNickname = localStorage.getItem('userNickname');
  const { data } = useGetProfile();
  const { mutate: postSummary } = usePostSummary();
  
  const [summaryValues, setSummaryValues] = useState({
    amount: 0,
    category: '',
    rate: '',
  });

  const handleProfile = () => {
    navigate('/mypage-profile');
  };

  useEffect(() => {
    postSummary({}, {
      onSuccess: (data) => {
        console.log(data);
        setSummaryValues(prevState => ({
          ...prevState,
          amount: data['총 지출 금액'],
          category: data['주요 지출 카테고리'],
          rate: data['월간 예산 대비 초과 또는 절약 금액'],
        }));
      },
      
    });
  }, []);

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
          <p>이번 달 총 <S.SummarySpan $isDays={true}>{summaryValues.amount}</S.SummarySpan> 원 지출</p>
          <p>주요 지출 카테고리 <S.SummarySpan $isDays={false}>{summaryValues.category}</S.SummarySpan></p>
          <p>월간 예상 대비 <S.SummarySpan $isDays={false}>{summaryValues.rate}</S.SummarySpan></p>
        </S.SummaryBox>
      </S.MyPageWrapper>
    </UserInfoProvider>
  );
};

export default Mypage;