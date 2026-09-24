import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';
import SplashScreen from '../screens/common/SplashScreen';
import { navigationRef } from './navigationRef';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'fade',
};

export default function RootNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="splash-screen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="splash-screen" component={SplashScreen} />
        <Stack.Screen name="auth-stack" component={AuthStackNavigator} />
        <Stack.Screen name="main-stack" component={MainStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
