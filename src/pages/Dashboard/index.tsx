import React from 'react';
import { Button, View } from 'react-native';

import { useAuth } from '../../hooks/AuthContext';

const Dashboard = (): JSX.Element => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Sair" onPress={signOut} color="#ff9000" />
    </View>
  );
};

export default Dashboard;
