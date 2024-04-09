import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
    useWindowDimensions,
    TouchableOpacity
} from 'react-native';
import { Welcome } from '../../assets';
import { Taglines, Button, InputText, CStatusBar } from '../../components';
import { BaseStyle } from '../../config/styles';
import { themeColors } from '../../config/theme';
import { AUTH, COMMON } from '../../navigation/ROUTES';
import EncryptedStorage from 'react-native-encrypted-storage';

const Login = ({ navigation }) => {


    const { width, height } = useWindowDimensions();
    //////////////////////////////////////////////////////////////////////
    //                      Use State
    //////////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////
    //                      Functions
    //////////////////////////////////////////////////////////////////////
    const getToken = async () => {
        try {
            const session = await EncryptedStorage.getItem("user_session");
            if (session) {
                tokensObj = JSON.parse(session);
                console.log("Session: ", tokensObj.rToken);
            }
        } catch (error) {
            console.log("Error in getting token: ", error)

        }
    }

    //////////////////////////////////////////////////////////////////

    const getData = async () => {
        try {
            const session = await EncryptedStorage.getItem("user_session");
            if (session) {
                tokensObj = JSON.parse(session);
                console.log("Session: ", tokensObj);
            }
        } catch (error) {
            console.log("Error in getting token: ", error)

        }
    }

    //////////////////////////////////////////////////////////////////
    const storeData = async (data1 = 12, data2 = 24) => {
        try {
            await EncryptedStorage.setItem("data",
                JSON.stringify({
                    data1,
                    data2

                }));
            console.log("data stored successfully")
        } catch (error) {
            console.log("Error in storing data: ", error)
        }

    }
    const storeIt = async () => {
        storeData("adf", "asd");

    }


    //////////////////////////////////////////////////////////////////////
    //                      api calls
    //////////////////////////////////////////////////////////////////////

    return (
        <>

            <CStatusBar />


            <View
                style={{
                    backgroundColor: themeColors.appPrimary(0.4),
                    width: 200,
                    height: 200,
                    borderRadius: 200,
                    transform: [{ rotateZ: '30deg' }, { rotateX: '25deg' }],
                    position: 'absolute',
                    left: -50,
                    top: -80,
                    borderWidth: 1,
                    borderColor: themeColors.appPrimary(0.5),
                }}></View>
            <View
                style={{
                    backgroundColor: themeColors.appPrimary(0.4),
                    width: 200,
                    height: 200,
                    borderRadius: 200,
                    transform: [{ rotateZ: '30deg' }, { rotateX: '25deg' }],
                    position: 'absolute',
                    left: -120,
                    top: 0,
                    borderWidth: 1,
                    borderColor: themeColors.appPrimary(0.5),
                }}></View>

            <ScrollView style={{ width: '100%', }}
                contentContainerStyle={{ alignItems: 'center', padding: 20, paddingTop: height > width ? height / 5 : height / 8 }}>
                <Taglines title={'Welcome Back!'} mt={0} mb={40} />

                <Welcome width={200} height={200} />
                <InputText placeholder={'Enter your Email'} mt={40} />
                <InputText placeholder={'Enter Password'} mt={20} />
                <TouchableOpacity onPress={() => navigation.navigate(AUTH.LOGIN)} style={{ marginTop: 16 }}>
                    <Text style={[BaseStyle.text, { color: themeColors.appPrimary(1), marginLeft: 4, fontFamily: 'Poppins-Bold' }]}>Forgot Password</Text>
                </TouchableOpacity>
                <Button title={'Log In'} mt={36} onpress={() => navigation.navigate(COMMON.HOME)} />
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <Text style={BaseStyle.text}> Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate(AUTH.SIGNUP)}>
                        <Text style={[BaseStyle.text, { color: themeColors.appPrimary(1), marginLeft: 4, fontFamily: 'Poppins-Bold' }]}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

        </>
    );
}

export default Login

const styles = StyleSheet.create({})