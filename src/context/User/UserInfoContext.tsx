import React,{ createContext, ReactNode, useState } from 'react';
import UserInfoType from '../../types/userInfo';

interface UserInfoContextType {
  userInfo: UserInfoType;
  setUserInfo: (userInfo: UserInfoType) => void;
}

const initialValue: UserInfoType = {
  profileImage: '',
  nickname: '',
};

const UserInfoContext = createContext<UserInfoContextType>({
  userInfo: initialValue,
  setUserInfo: () => {},
});

export const UserInfoProvider = ({ children }: { children: ReactNode}) => {
  const [userInfo, setUserInfo] = useState<UserInfoType>(initialValue);
  return(
    <UserInfoContext.Provider value={{userInfo, setUserInfo}}>{children}</UserInfoContext.Provider>
  );
};

export default UserInfoContext;