import { useMutation } from '@tanstack/react-query';
import { authInstance } from '../../../apis/apiInstance';
import { AxiosResponse } from 'axios';

interface bodyType {
  code: string;
}

export const postAccessCode = async (body: bodyType) => {
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