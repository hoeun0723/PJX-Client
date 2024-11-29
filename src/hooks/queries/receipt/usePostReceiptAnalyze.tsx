import { useMutation } from '@tanstack/react-query';
import { aiPost } from '../../../apis/apiInstance';
import { AxiosResponse } from 'axios';
import { ReceiptImage } from '../../../types/receipt';

export const POST_RECEIPT_QUERY_KEY = ['receiptData'];

export const postReceiptImage = async (body: ReceiptImage) => {
  const formData = new FormData();
  formData.append('files', body.file); 

  const response: AxiosResponse = await aiPost(`/receipt/analyze`, formData ,{
    headers: {
      "Content-Type": `multipart/form-data`,
    },
  });
  return response.data;
};

export const usePostReceiptAnalyze = () => {
  return useMutation({
    mutationFn: postReceiptImage,
    onSuccess: (data) => {
      console.log('영수증 이미지 post 성공', data);
    },
    onError: () => {
      console.log('ERROR');
    },
  });
};

export default usePostReceiptAnalyze;
