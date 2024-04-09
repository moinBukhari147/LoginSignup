import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Profile } from '../screens/common';
import { COMMON } from './ROUTES';
import StackNavigator from './StackNavigator';

export default function BottomTabNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name={COMMON.HOME} component={Home} />
            <Tab.Screen name={'login'} component={StackNavigator} />
            <Tab.Screen name={COMMON.PROFILE} component={Profile} />
        </Tab.Navigator>
    )
}