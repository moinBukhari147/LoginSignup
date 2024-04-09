import { StyleSheet, Text, View, StatusBar, ScrollView, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { UserActions } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { Unlock, Wifi } from '../../assets';
import { Taglines, Button, InputText, ErrorText } from '../../components';
import { BaseStyle } from '../../config/styles';
import { themeColors } from '../../config/theme';
import { SvgUri } from 'react-native-svg';
import { AUTH, COMMON } from '../../navigation/ROUTES';
import axios from 'axios';
import { AUTH_URL, BASE_URL } from '../../services/ROUTES';
import EncryptedStorage from 'react-native-encrypted-storage';

const Signup = ({ navigation }) => {

    const { width, height } = useWindowDimensions();
    /////////////////////////////////////////////////////////////////
    //                      Use State
    /////////////////////////////////////////////////////////////////
    const [fname, setfname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');
    const [errorField, seterrorField] = useState('');
    const [btnPressed, setbtnPressed] = useState(false);
    const [errorMsg, seterrorMsg] = useState('');
    const [loading, setloading] = useState(false);

    /////////////////////////////////////////////////////////////////
    //                      Functions
    ////////////////////////////////////////////////////////////////
    const storeToken = async (token, rToken) => {
        try {
            console.log("rToken: ", rToken)
            await EncryptedStorage.setItem("user_session",
                JSON.stringify({
                    rToken,
                    token

                }));
            console.log("Token stored successfully")
        } catch (error) {
            console.log("Error in storing token: ", error)
        }

    }


    /////////////////////////////////////////////////////////////////
    //                      Api calls
    ////////////////////////////////////////////////////////////////

    const signup = async () => {
        try {
            console.log("========================= Signup called ================================")
            if (!fname || !email || !password || !cpassword) {
                setbtnPressed(true);
                seterrorMsg("This field is required")
                return;
            }
            data = {
                fname,
                email,
                password,
                cpassword
            }
            const url = `${AUTH_URL}/signup`;
            response = await axios.post(url, data);
            console.log("============================ response ================================")
            console.log(response.status);
            console.log(response.data);
            if (response.status == 201) {
                storeToken(response.data.token, response.data.rtoken)
                navigation.navigate(AUTH.LOGIN)
            }
            return
        }
        catch (error) {
            console.log("============================ error ================================")
            console.log("=======================error: ", error);

            if (error.response.status == 400) {
                errorResp = error.response.data.message.split(",")
                if (errorResp[0] === 'error') {
                    return alert(errorResp[1])
                    console.log("=============if is running")
                }
                console.log("efter error ----------------- sdfs -------------------");
                seterrorField(errorResp[0]);
                seterrorMsg(errorResp[1]);
            }
            else if (error.response.status == 500) {
                console.log("efter error ----------------- elif -------------------");

                alert.alert("Server Error", "Please try again later")
            }
            console.log(errorField);
            console.log(error.response.status);
            console.log(error.response.data.message);


        }

    }


    /////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    console.log("This is fname: ", fname)

    return (
        <>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />


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
                contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 32, paddingTop: height > width ? height / 6 : height / 10 }}>
                <Taglines title={'Welcome Onboard'} mt={0} mb={4} />
                <Text style={BaseStyle.text}> Get started with</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image source={require('../../assets/images/png/linkedin.png')} style={{ width: 60, height: 60, marginRight: 20 }} />
                    <Image source={require('../../assets/images/png/google.png')} style={{ width: 60, height: 60 }} />
                    <Image source={require('../../assets/images/png/fb.png')} style={{ width: 60, height: 60, marginLeft: 20 }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 28 }}>
                    <View style={{ width: 60, height: 1, backgroundColor: themeColors.blackColor(0.3), marginRight: 4 }}></View>
                    <Text style={BaseStyle.text}> or create new account </Text>
                    <View style={{ width: 60, height: 1, backgroundColor: themeColors.blackColor(0.3), marginLeft: 4 }}></View>
                </View>
                <InputText placeholder={'Enter your full name'} mt={32} onchangetext={(text) => setfname(text)} value={fname} />
                {
                    !fname && btnPressed ? <ErrorText errortext={errorMsg} mt={8} /> : null
                }
                <InputText placeholder={'Enter your Email'} mt={16} onchangetext={(text) => setemail(text)} value={email} />
                {
                    !email && btnPressed ? <ErrorText errortext={errorMsg} mt={8} /> : null
                }
                <InputText placeholder={'Enter Password'} errortext={errorMsg} mt={16} onchangetext={(text) => setpassword(text)} value={password} />
                {
                    !password && btnPressed ? <ErrorText errortext={errorMsg} mt={8} /> : null
                }
                <InputText placeholder={'Confirm Password'} mt={16} onchangetext={(text) => setcpassword(text)} value={cpassword} />
                {
                    !cpassword && btnPressed ? <ErrorText errortext={errorMsg} mt={8} /> : null
                }
                <Button title={'Sign Up'} mt={32} onpress={() => signup()} />
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <Text style={BaseStyle.text}> Already a member? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate(AUTH.LOGIN)}>
                        <Text style={[BaseStyle.text, { color: themeColors.appPrimary(1), marginLeft: 4, fontFamily: 'Poppins-Bold' }]}>Sign In</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

        </>
    );
}

export default Signup

const styles = StyleSheet.create({})