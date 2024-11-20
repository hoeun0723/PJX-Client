import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/apiInstance';
import { AxiosResponse } from 'axios';

interface ValidNicknameResponseType {
  available: boolean;
  message: string;
}

export const getNickname = async (value: string): Promise<ValidNicknameResponseType> => {
  const res: AxiosResponse = await get('/api/onboarding/nickname-check', {
    params: {
      nickname: value,
    },
  });
  console.log(res);
  return res.data;
};

const useGetNickname = (value: string) => {
  const queryKey = ['validNickname', value];
  const { data, isError, status } = useQuery({
    queryKey,
    queryFn: () => getNickname(value),
    retry: 0,
  });
  return { data, isError, status };
};

export default useGetNickname;