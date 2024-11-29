import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/apiInstance';
import { AxiosResponse } from 'axios';

export const POST_MONTH_GOAL_QUERY_KEY = ['monthGoal'];

export const postMonthGoal = async (newGoal: number) => {
  const response: AxiosResponse = await post(`/api/spending/goal`, null, {
    params: { newGoal },
  });
  return response.data;
};

export const usePostMonthGoal = () => {
  return useMutation({
    mutationFn: postMonthGoal,
    onSuccess: (data) => {
      console.log('한달 목표 설정하기 성공', data);
    },
    onError: () => {
      console.log('ERROR');
    },
  });
};

export default usePostMonthGoal;
