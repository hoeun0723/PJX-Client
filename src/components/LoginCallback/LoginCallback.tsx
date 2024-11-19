import React, { useEffect } from 'react';
import Loading from '../../pages/Loading/Loading';
import usePostAccessCode from '../../hooks/queries/login/usePostAccessCode';
import { useNavigate } from 'react-router-dom';
import { authInstance } from '../../apis/apiInstance';

const LoginCallback = () => {
  const code = new URL(document.location.toString()).searchParams.get('code');
  const { mutate: postCode }  = usePostAccessCode();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  };

  const getKakaoInfo = async () => {
    const accessToken = localStorage.getItem('KAKAO_TOKEN');
    const response = await authInstance.get('/api/kakao/userinfo', {
      params: {
        accessToken: accessToken,
      },
    });
  
    return response.data;
  };

  useEffect(() => {
    if (code) {
      const body = {'code':code};
      postCode(body, {
        onSuccess: async () => {
          const data = await getKakaoInfo();
          localStorage.setItem('EXIT_ACCESS_TOKEN', data.jwtToken);
          localStorage.setItem('id', data.userInfo.id);
          console.log(data);
          handleNavigate();
          
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