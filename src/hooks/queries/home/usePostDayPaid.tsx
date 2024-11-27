import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/apiInstance';
import { AxiosResponse } from 'axios';
import { DayPaid } from '../../../types/home';

export const POST_DAY_PAID_LIST_QUERY_KEY = ['dayPaidList'];

export const postDayPaid = async (body:DayPaid) => {

  const response: AxiosResponse = await post(`/api/spending/manual/list`, body);
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