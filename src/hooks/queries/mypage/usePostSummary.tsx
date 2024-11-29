export const SUMMARY_QUERY_KEY = ['summary'];
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { aiPost } from '../../../apis/apiInstance';

export const postSummary = async ({}) => {
  const body = { user_id: localStorage.getItem('id'), };
  const res: AxiosResponse = await aiPost('spending/analyze', body, {
    headers: {
      "Content-Type": 'application/json',
    },
  });
  return res.data;
};

const usePostSummary = () => {
  return useMutation({
    mutationFn: postSummary,
    onSuccess: (data) => {
      console.log('post 성공', data);
    },
    onError: () => {
      console.log('ERROR');
    },
  });
};

export default usePostSummary;