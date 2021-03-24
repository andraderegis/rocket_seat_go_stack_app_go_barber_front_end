import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { useAuth } from '../hooks/AuthContext';

const Routes = (): JSX.Element => {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
