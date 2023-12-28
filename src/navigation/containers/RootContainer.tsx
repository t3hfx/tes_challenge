import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {RootContainerStackParamList, Screens} from '~/navigation/constants';
import {Car} from '~/screens/Car';
import {CarList} from '~/screens/CarList';

const Stack = createNativeStackNavigator<RootContainerStackParamList>();

export const RootContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: true,
      }}
      initialRouteName={Screens.CarList}>
      <Stack.Screen
        name={Screens.CarList}
        component={CarList}
        options={{
          title: Screens.CarList,
        }}
      />
      <Stack.Screen
        name={Screens.Car}
        component={Car}
        options={{
          presentation: 'formSheet',
          title: Screens.Car,
        }}
      />
    </Stack.Navigator>
  );
};
