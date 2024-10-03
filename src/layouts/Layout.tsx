import React from 'react';
import { useMobile } from '../hooks/useMobile';
import { Outlet } from 'react-router-dom';
import GNB from '../components/GNB/GNB';

const Layout = () => {
  useMobile();

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;