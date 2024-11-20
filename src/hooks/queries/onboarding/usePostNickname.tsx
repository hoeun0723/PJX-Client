import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { post } from '../../../apis/apiInstance';

interface NicknameInterface {
  nickname: string;
}

export const POST_NICKNAME_QUERY_KEY = ['nicknameData'];

export const postNickname = async (data: NicknameInterface) => {
  const res: AxiosResponse = await post(`/api/onboarding`, data);
  return res.data;
};

const usePostNickname = () => {
  return useMutation({
    mutationFn: postNickname,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default usePostNickname;