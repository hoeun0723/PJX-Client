import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/apiInstance';
import { AxiosResponse } from 'axios';

export const PAID_QUERY_KEY = ['paidData'];

export const postPaid = async (month: string) => {
    const response: AxiosResponse = await post('/api/spending/current',null,{
        params: { month },
      });
    return response.data;
};

const usePostPaid = ()=>{
    return useMutation({
        mutationFn: postPaid,
        onSuccess: (data) => {
          console.log('한달 비용 불러오기 성공', data);
        },
        onError: () => {
          console.log('ERROR');
        },
      });
};

export default usePostPaid;
