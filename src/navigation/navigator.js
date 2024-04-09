import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Profile, Splash } from '../screens/common';
import { AUTH, COMMON } from './ROUTES';
import { Login, Signup } from '../screens/auth';
import BottomTabNavigator from './BottomTabNavigator';
import StackNavigator from './StackNavigator';
// import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default Navigator