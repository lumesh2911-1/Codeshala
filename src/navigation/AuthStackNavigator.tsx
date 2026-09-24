import React from 'react';
import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import LoginScreen from '../features/auth/screens/LoginScreen';
import type { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const screenOptions: NativeStackNavigationOptions = { headerShown: false };

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="login" screenOptions={screenOptions}>
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
