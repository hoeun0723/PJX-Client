import { useMutation } from '@tanstack/react-query';
import { patch } from '../../../apis/apiInstance'

const patchNickname = async (newNickname: string) => {
  const kakaoId = localStorage.getItem('id');
  const res = await patch(`/api/users/${kakaoId}/nickname`, {}, {
    params: {
      newNickname: newNickname,
    },
  });
  return res;
}

const usePatchNickname = () => {
  return useMutation({
    mutationFn: patchNickname,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePatchNickname;