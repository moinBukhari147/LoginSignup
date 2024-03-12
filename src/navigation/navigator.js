import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '../screens/common';
import { AUTH, COMMON } from './ROUTES';
import { Home, Login, Signup } from '../screens/auth';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={COMMON.SPLASH}>
        <Stack.Screen
          name={COMMON.SPLASH}
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AUTH.HOME}
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AUTH.SIGNUP}
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AUTH.LOGIN}
          component={Login}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator