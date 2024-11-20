import { createBrowserRouter } from 'react-router-dom';
import Start from '../pages/Start/Start';
import Layout from '../layouts/Layout';
import React from 'react';
import Onboarding from '../pages/Onboarding/Onboarding';
import Home from '../pages/Home/Home';
import Feed from '../pages/Feed/Feed';
import Alarm from '../pages/Alarm/Alarm';
import Mypage from '../pages/Mypage/Mypage';
import LayoutWithFooter from '../layouts/LayoutWithFooter';
import WriteType from '../pages/WriteType/WriteType';
import MypageFriends from '../pages/Mypage/MypageFriends/MypageFriends';
import Profile from '../pages/Mypage/Profile/Profile';
import Loading from '../pages/Loading/Loading';
import LoginCallback from '../components/LoginCallback/LoginCallback';
import WriteCost from '../pages/WriteCost/WriteCost';
import MypageFriends from '../pages/Mypage/MypageFriends/MypageFriends';
import Profile from '../pages/Mypage/Profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Start />
      },
      {
        path: '/loading',
        element: <Loading />
      },
      {
        path: '/auth/kakao',
        element: <LoginCallback />,
      },
      {
        path: '/onboarding',
        element: <Onboarding />,
      },
      {
        path: '/write-type',
        element: <WriteType />
      },
      {
        path: '/write-cost',
        element: <WriteCost />,
      },
      {
        path: '/mypage-friends',
        element: <MypageFriends />
      },
      {
        path: '/mypage-profile',
        element: <Profile />,
      },
      {
        path: '/mypage-friends',
        element: <MypageFriends />
      },
      {
        path: '/mypage-profile',
        element: <Profile />,
      },
    ],
  },
  {
    path:'/',
    element: <LayoutWithFooter/>,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/feed',
        element: <Feed />
      },
      {
        path: '/alarm',
        element: <Alarm />
      },
      {
        path: '/mypage',
        element: <Mypage />
      },
    ]
  }
]);

export default router;