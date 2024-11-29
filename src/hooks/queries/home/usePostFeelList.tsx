import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/apiInstance';
import { AxiosResponse } from 'axios';
import { FeelList } from '../../../types/home';

export const POST_Feel_QUERY_KEY = ['feelDataList'];

export const postFeelList = async (body:FeelList) => {

  const response: AxiosResponse = await post(`/api/users/reactions/by-month`, body);
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