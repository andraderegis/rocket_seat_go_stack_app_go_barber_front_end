import React, { PropsWithChildren } from 'react';

import { AuthProvider } from './AuthContext';

const AppProvider = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
