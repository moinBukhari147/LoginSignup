import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { themeColors } from '../../config/theme';
const Button = ({ title, onpress, mt = 0, mb = 0, ph = 0 }) => {
    return (
        <View style={{ width: '100%' }}>
            <TouchableOpacity style={[styles.button, { marginTop: mt, marginBottom: mb, paddingHorizontal: ph }]} onPress={onpress}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: themeColors.appPrimary(1),
        borderRadius: 12,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: themeColors.whiteColor,
        paddingVertical: 16,
        fontFamily: 'Poppins-Medium',


    },
});
