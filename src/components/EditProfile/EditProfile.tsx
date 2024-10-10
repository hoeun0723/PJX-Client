import * as S from './EditProfile.style';
import React from 'react';
import mockImage from '../../assets/profileMockImage.png';
import { IcPen } from '../../assets/svg';

const EditProfile = () => {
  return(
    <S.EditProfileWrapper>
      <S.ImageBox>
        <S.ProfileImage src={mockImage}/>
        <S.EditIconBox><IcPen width='1.8rem' height='1.8rem'/></S.EditIconBox>
      </S.ImageBox>

      <S.EditBox>
        <S.EditItem>
          <S.EditTitleText>이메일</S.EditTitleText>
          <p>email@naver.com</p>
          <S.EditSpan>수정</S.EditSpan>
        </S.EditItem>
        <S.EditItem>
          <S.EditTitleText>닉네임</S.EditTitleText>
          <p>이웃집 토토로</p>
          <S.EditSpan>수정</S.EditSpan>
        </S.EditItem>
      </S.EditBox>
    </S.EditProfileWrapper>
  );
};

export default EditProfile;