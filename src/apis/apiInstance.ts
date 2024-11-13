import axios, { AxiosError, AxiosResponse } from 'axios';

export const getAccessTokenLocalStorage = () => {
    const accessToken = localStorage.getItem('EXIT_ACCESS_TOKEN');
    return accessToken ? `${accessToken}` : '';
};

export const getRefreshTokenLocalStorage = () => {
    const refreshToken = localStorage.getItem('EXIT_REFRESH_TOKEN');
    return refreshToken ? `${refreshToken}` : '';
  };

export const checkCurrentMode = () => {
    const currentMode = import.meta.env.PROD ? 'production' : 'development';
    return currentMode;
  };

  /*이 authInstance는 추후 로그인 작업에서 필요할 경우 사용하세요! header 에 어떤 값을 넘겨줘야하는지 명세서 확인하고 수정하기!*/
export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
  withCredentials: true,
  headers: {},
});

export const serverInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${getAccessTokenLocalStorage()}`,
    },
  });

  export const aiInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_AI_BASE_URL,
    withCredentials: true,
    headers: {
      "Content-Type": `multipart/form-data`,
    },
  });

  function interceptorResponseFulfilled(res: AxiosResponse) {
    return res.status >= 200 && res.status < 300 ? res : Promise.reject(res);
  }
  
  function interceptorResponseRejected(error: AxiosError) {
    // @ts-ignore
    return Promise.reject(new Error(error.response?.data?.message ?? error));
  }
  
  serverInstance.interceptors.response.use(interceptorResponseFulfilled, interceptorResponseRejected);
  aiInstance.interceptors.response.use(interceptorResponseFulfilled, interceptorResponseRejected);

  export function aiPost<T>(...args: Parameters<typeof aiInstance.post>) {
    return aiInstance.post<T>(...args);
  }
  
  export function get<T>(...args: Parameters<typeof serverInstance.get>) {
    return serverInstance.get<T, T>(...args);
  }
  
  export function post<T>(...args: Parameters<typeof serverInstance.post>) {
    return serverInstance.post<T>(...args);
  }
  
  export function put<T>(...args: Parameters<typeof serverInstance.put>) {
    return serverInstance.put<T>(...args);
  }
  
  export function patch<T>(...args: Parameters<typeof serverInstance.patch>) {
    return serverInstance.patch<T, T>(...args);
  }
  
  export function del<T>(...args: Parameters<typeof serverInstance.delete>) {
    return serverInstance.delete<T>(...args);
  }
  