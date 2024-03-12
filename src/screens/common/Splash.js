import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
    useWindowDimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { UserActions } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { Unlock } from '../../assets';
import { Taglines, Button, InputText } from '../../components';
import { BaseStyle } from '../../config/styles';
import { themeColors } from '../../config/theme';
import { AUTH, COMMON } from '../../navigation/ROUTES';

const Splash = ({ navigation }) => {
    // const dispatch = useDispatch();
    // const [inputText, setInputText] = useState('');
    // const textFromRedux = useSelector(state => state.user.currentUser);
    const { width, height } = useWindowDimensions();


    const handleSetText = () => {
        dispatch(UserActions.onSetCurrentUserDetails(inputText));
    };

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
                    left: -30,
                    top: -60,
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
                    left: -100,
                    top: 20,
                    borderWidth: 1,
                    borderColor: themeColors.appPrimary(0.5),
                }}></View>

            <ScrollView style={{ width: '100%', }}
                contentContainerStyle={{ alignItems: 'center', padding: 20, paddingTop: height > width ? height / 4 : height / 8 }}>

                <Unlock width={220} height={220} />
                <Taglines title={'Get things done with ToDo!'} mt={60} mb={20} />
                <Text style={[BaseStyle.text, { paddingHorizontal: 20 }]}> Great things can happen with time managment. The ToDo is here to  help you achieve best out of your time.</Text>
                <Button title={'Get Started'} mt={60} onpress={() => navigation.navigate(AUTH.SIGNUP)} />

            </ScrollView>

        </>
    );
};

export default Splash;

const styles = StyleSheet.create({

});
