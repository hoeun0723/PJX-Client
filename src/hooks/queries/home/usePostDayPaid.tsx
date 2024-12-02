import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/apiInstance';
import { AxiosResponse } from 'axios';

export const POST_DAY_PAID_LIST_QUERY_KEY = ['dayPaidList'];

export const postDayPaid = async (date: string) => {

  const response: AxiosResponse = await post(`/api/spending/list`,null,{
    params: { date },
  });
  return response.data;
};

export const usePostDayPaid = () => {
  return useMutation({
    mutationFn: postDayPaid,
    onSuccess: (data) => {
      console.log('하루 지불 내역 불러오기 성공', data);
    },
    onError: () => {
      console.log('ERROR');
    },
  });
};

export default usePostDayPaid;