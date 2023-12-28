import React from 'react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from '~/navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from '~/store/store';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
