import { AxiosResponse } from 'axios';
import { post } from '../../../apis/apiInstance';
import { useMutation } from '@tanstack/react-query';
import CostSummaryType from '../../../types/cost/costSummary';

export const COST_QUERY_KEY = ['costSummary'];

export const postCost = async (body: CostSummaryType) => {
  const formData = new FormData();
  formData.append('images', body.file);
  
  const res: AxiosResponse = await post('/api/spending/create', formData ,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    params: {
      date: body.date,
      amount: body.amount,
      description: body.description,
      note: body.note,
    }
  });

  return res.data;
};

const usePostCost = () => {
  return useMutation({
    mutationFn: postCost,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePostCost;