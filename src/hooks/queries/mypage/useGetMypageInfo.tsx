import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '../../../apis/apiInstance'
import { AxiosResponse } from 'axios';

export const PROFILE_QUERY_KEY  = ['mypageInfo'];

export const getProfile = async () => {
  const res:AxiosResponse = await get('/api/users/profile');
  return res;
};

const useGetProfile = () => {
  const { data } = useSuspenseQuery({
    queryKey: PROFILE_QUERY_KEY,
    queryFn: () => getProfile(),
  });

  return { data };
};

export default useGetProfile;