import * as S from './Profile.style';
import React from 'react';
import Title from '../../../components/common/Title/Title';
import { IcBack } from '../../../assets/svg';
import { useNavigate } from 'react-router-dom';
import BtnLarge from '../../../components/common/Button/LargeButton/BtnLarge';
import EditProfile from '../../../components/EditProfile/EditProfile';

const Profile = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    alert('저장 API 연결');
  };

  return(
    <S.ProfileWrapper>  
      <Title isLarge={false}>
        <S.IconBox onClick={() => handleBack()}>
          <IcBack />
        </S.IconBox>
        내  프로필
      </Title>
      <EditProfile />
      <S.ButtonField>
        <BtnLarge onClick={() => handleSubmit()}>저장</BtnLarge>
      </S.ButtonField>
    </S.ProfileWrapper>
  );
};

export default Profile;