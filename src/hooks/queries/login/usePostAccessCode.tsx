import { useMutation } from '@tanstack/react-query';
import { REDIRECT_URI, REST_API_KEY } from '../../../utils/login';
import axios from 'axios';

export const postAccessCode = async (code: string) => {
  const GRANT_TYPE = 'authorization_code';
  const POST_URL = `grant_type=${GRANT_TYPE}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}&client_secret=hrF3lTqZn3atX7PvYbrJMrXUIFbj4bfr`;
  const response = await axios.post(`https://kauth.kakao.com/oauth/token?${POST_URL}`, {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  });
  return response;
};

const usePostAccessCode = () => {
  return useMutation({
    mutationFn: postAccessCode,
    onSuccess: () => {
      console.log('전송 성공');
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePostAccessCode;