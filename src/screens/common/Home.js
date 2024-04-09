import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CStatusBar } from '../../components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COMMON } from '../../navigation/ROUTES';

const Home = ({ navigation }) => {



    return (
        <>
            <CStatusBar />
            <Text style={{ fontSize: 40, color: "green", textAlign: "center", marginTop: 40, marginBottom: 50 }}>This is Home</Text>
            <Button title='Next' onPress={() => navigation.navigate(COMMON.SPLASH)} />

        </>
    )
}

export default Home

const styles = StyleSheet.create({

})