import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/apiInstance';
import { AxiosResponse } from 'axios';

export const POST_Feel_QUERY_KEY = ['feelDataList'];

export const postFeelList = async (month: string) => {

  const response: AxiosResponse = await post(`/api/reaction/reactions/by-month`,null,{
    params: { month },
  });
return response.data;
};

export const usePostFeelList = () => {
  return useMutation({
    mutationFn: postFeelList,
    onSuccess: (data) => {
      console.log('감정리스트 받아오기 성공', data);
    },
    onError: () => {
      console.log('ERROR');
    },
  });
};

export default usePostFeelList;