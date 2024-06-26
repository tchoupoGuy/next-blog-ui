import React, { PropsWithChildren, ReactNode } from 'react';

import SignInForm from './login';
import { useSelector } from 'react-redux';

// import { selectIsUserAuthenticated } from '@kaayu/modules/authentication/selectors';
// import Authentication from '@kaayu/modules/authentication/container';
// add new comment in develop
// add second comment in develop
// add second comment in the LEAR-GIT-STASH branch

interface WithAuthProps {
  children: ReactNode;
}

const WithAuth: React.FC<PropsWithChildren<WithAuthProps>> = ({ children }) => {
  //const isAuthenticated = useSelector(selectIsUserAuthenticated);
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <SignInForm />;
  }

  return <>{children}</>;
};

export default WithAuth;
