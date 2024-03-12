import { StyleSheet, Text, View, StatusBar, ScrollView, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { UserActions } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { Unlock, Wifi } from '../../assets';
import { Taglines, Button, InputText } from '../../components';
import { BaseStyle } from '../../config/styles';
import { themeColors } from '../../config/theme';
import { SvgUri } from 'react-native-svg';
import { AUTH, COMMON } from '../../navigation/ROUTES';

const Signup = ({ navigation }) => {

    const { width, height } = useWindowDimensions();

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
                <InputText placeholder={'Enter you full name'} mt={32} />
                <InputText placeholder={'Enter your Email'} mt={16} />
                <InputText placeholder={'Enter Password'} mt={16} />
                <InputText placeholder={'Confirm Password'} mt={16} />

                <Button title={'Sign Up'} mt={32} onpress={() => navigation.navigate(AUTH.LOGIN)} />
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