import React, { PropsWithChildren, ReactNode } from 'react';

import SignInForm from './login';

// import { selectIsUserAuthenticated } from '@kaayu/modules/authentication/selectors';
// import Authentication from '@kaayu/modules/authentication/container';
// add new comment in remove dead code branch
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
