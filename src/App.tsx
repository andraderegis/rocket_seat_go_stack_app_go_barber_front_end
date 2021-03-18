import React from 'react';

import { View, StatusBar } from 'react-native';

const App = (): JSX.Element => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View style={{ flex: 1, backgroundColor: '#312e38' }} />
  </>
);

export default App;
