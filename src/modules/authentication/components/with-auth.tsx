import React, { PropsWithChildren, ReactNode } from 'react';

import SignInForm from './login';

interface WithAuthProps {
  children: ReactNode;
}

const WithAuth: React.FC<PropsWithChildren<WithAuthProps>> = ({ children }) => {
  '  const isAuthenticated = useSelector(selectIsUserAuthenticated);';
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <SignInForm />;
  }

  return <>{children}</>;
};

export default WithAuth;
