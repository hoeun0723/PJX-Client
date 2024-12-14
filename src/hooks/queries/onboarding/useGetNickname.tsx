import { useQuery } from '@tanstack/react-query';
import { getAccessTokenLocalStorage } from '../../../apis/apiInstance';
import axios, { AxiosResponse } from 'axios';
import { SERVER_BASE_URL } from '../../../utils/login';

interface ValidNicknameResponseType {
  available: boolean;
  message: string;
}

export const getNickname = async (value: string): Promise<ValidNicknameResponseType> => {
  const res: AxiosResponse = await axios.get(`${SERVER_BASE_URL}/api/users/user-nickname-check`, {
    headers: {
      Authorization: `Bearer ${getAccessTokenLocalStorage()}`
    },
    params: {
      userNickname: value,
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