import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {RootContainerStackParamList, Screens} from '~/navigation/constants';
import {MoviesList} from '~/screens/MoviesList';

const Stack = createNativeStackNavigator<RootContainerStackParamList>();

export const RootContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: true,
      }}
      initialRouteName={Screens.MoviesList}>
      <Stack.Screen
        name={Screens.MoviesList}
        component={MoviesList}
        options={{
          title: Screens.MoviesList,
        }}
      />
    </Stack.Navigator>
  );
};
