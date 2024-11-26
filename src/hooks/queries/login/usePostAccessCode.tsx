import { useMutation } from '@tanstack/react-query';
import { authInstance } from '../../../apis/apiInstance';
import { AxiosResponse } from 'axios';
import { REDIRECT_URI } from '../../../utils/login';

export const postAccessCode = async (code: string) => {
  const body = {
    code: code,
    redirectUri: REDIRECT_URI,
  };
  
  const response: AxiosResponse = await authInstance.post('/api/kakao/callback', body);
  return response.data;
};

const usePostAccessCode = () => {
  return useMutation({
    mutationFn: postAccessCode,
    onSuccess: (response) => {
      localStorage.setItem('KAKAO_TOKEN', response.access_token);
      localStorage.setItem('KAKAO_REFRESH_TOKEN', response.refresh_token);
      console.log('전송 성공');
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePostAccessCode;