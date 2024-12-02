import { IcTitleIcon } from '../../assets/svg';
import BtnKakaoLogin from '../../components/common/Button/KakaoLoginButton/BtnKakaoLogin';
import BtnLarge from '../../components/common/Button/LargeButton/BtnLarge';
import { kakaoUrl } from '../../utils/login';
import * as S from './Start.style';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import shareKakao from '../../utils/shareKakao';

function Start (){
  const navigate = useNavigate();
  const handeleLogin = async () => {
    window.location.href = kakaoUrl;
  };
  const handleNavigate = () => {
    navigate('/onboarding');
  };

  return(
    <S.StartWrapper>
      <S.TitleText>식비달인</S.TitleText>
      <S.SubtitleText>AI활용 지출내역 관리</S.SubtitleText>
      <S.IntroText>똑똑하게 관리해봐요!💸</S.IntroText>
      <IcTitleIcon style={{marginTop: '50px'}}/>
      <S.ButtonField>
        {
          localStorage.getItem('EXIT_ACCESS_TOKEN') ? 
            <BtnLarge onClick={handleNavigate}>시작하기</BtnLarge>
          :
            <BtnKakaoLogin onClick={handeleLogin}/>
        }
      </S.ButtonField>
      <button onClick={() => {shareKakao()}}>
        임시 버트트튼
      </button>
    </S.StartWrapper>
  );
}

export default Start;