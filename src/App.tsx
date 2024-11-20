import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserInfoProvider } from './context/User/UserInfoContext';

function App() {
  const queryClient = new QueryClient();
  return (
    <UserInfoProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </UserInfoProvider>
  );
}
export default App;
