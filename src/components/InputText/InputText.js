import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { themeColors } from '../../config/theme'

const InputText = ({ placeholder, mt = 0, mb = 0, ph = 0, onchangetext, value = '' }) => {
    return (
        <View style={{ marginTop: mt, marginBottom: mb, paddingHorizontal: ph, width: '100%' }}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={themeColors.blackColor(.3)}
                style={styles.textInput}
                onChangeText={onchangetext}
                value={value}
            />
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 35,
        height: 56,
        paddingRight: 20,
        paddingLeft: 32,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: themeColors.whiteColor,
        color: themeColors.blackColor(0.7),
    },
})