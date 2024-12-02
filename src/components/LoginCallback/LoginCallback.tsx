import React, { useContext, useEffect } from 'react';
import Loading from '../../pages/Loading/Loading';
import usePostAccessCode from '../../hooks/queries/login/usePostAccessCode';
import { useNavigate } from 'react-router-dom';
import { authInstance } from '../../apis/apiInstance';
import UserInfoContext from '../../context/User/UserInfoContext';

const LoginCallback = () => {
  const code = new URL(document.location.toString()).searchParams.get('code');

  const { mutate: postCode }  = usePostAccessCode();
  const navigate = useNavigate();
  const handleNavigate = (status: string) => {
    status === 'new' ? navigate('/onboarding') : navigate('/home');
  };

  const { setUserInfo } = useContext(UserInfoContext);

  const getKakaoInfo = async (accessToken: string) => {
    const response = await authInstance.get('/api/kakao/userinfo', {
      params: {
        accessToken: accessToken,
      },
    });
  
    return response.data;
  };

  useEffect(() => {
    if (code) {
      postCode(code, {
        onSuccess: async (res) => {
          const resData = await getKakaoInfo(res.data.access_token);
          console.log(resData);
          localStorage.setItem('EXIT_ACCESS_TOKEN', resData.jwtToken);
          localStorage.setItem('id', resData.userInfo.id);
          localStorage.setItem('nickname', resData.userInfo.userNickname);
          setUserInfo({
            nickname: resData.userInfo.nickname,
            profileImage: resData.userInfo.profileImageUrl,
          });
          handleNavigate(resData.status);
          
        },
      });
    } else {
      console.error('Code parameter is missing from the URL.');
    }
  },[code]);

  return(
    <Loading />
  );
};

export default LoginCallback;