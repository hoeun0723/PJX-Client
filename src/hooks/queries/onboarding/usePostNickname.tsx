import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { getAccessTokenLocalStorage } from '../../../apis/apiInstance';
import { SERVER_BASE_URL } from '../../../utils/login';

export const POST_NICKNAME_QUERY_KEY = ['nicknameData'];

export const postNickname = async (value: string) => {
  const data = { userNickname: value };
  const res: AxiosResponse = await axios.post(`${SERVER_BASE_URL}/api/users/api/onboarding`, data, {
    headers: {
      Authorization: `Bearer ${getAccessTokenLocalStorage()}`
    },
  });
  return res.data;
};

const usePostNickname = () => {
  return useMutation({
    mutationFn: postNickname,
    onSuccess: (data) => {
      localStorage.setItem('nickname', data.data.userNickname);
      localStorage.setItem('status', 'existing')
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default usePostNickname;