import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import type {MainStackScreenProps} from '../MainStack.types';
import type {AuthStackParamsList} from './AuthStack.types';

import {LoginOrSignup} from './screens/LoginOrSignup/LoginOrSignup';
import {Login} from './screens/Login/Login';
import {Signup} from './screens/Signup/Signup';

interface Props extends MainStackScreenProps<'AuthStack'> {}

const Stack = createNativeStackNavigator<AuthStackParamsList>();

const AuthStack: React.FC<Props> = () => {
  const screensOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screensOptions}>
      <Stack.Screen name="LoginOrSignup" component={LoginOrSignup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export {AuthStack};
