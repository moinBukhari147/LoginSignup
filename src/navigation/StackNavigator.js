import { View, Text } from 'react-native'
import React from 'react'
import { AUTH, COMMON } from './ROUTES';
import { Login, Signup } from '../screens/auth';
import { Home, Profile, Splash } from '../screens/common';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={COMMON.SPLASH}>
            <Stack.Screen
                name={COMMON.SPLASH}
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={COMMON.HOME}
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={COMMON.PROFILE}
                component={Profile}
                options={{ headerShown: false }}
            />
            {/* ==================== Common ========================= */}
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
    )
}

export default StackNavigator