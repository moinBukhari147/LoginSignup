import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ErrorText = ({ errortext, mt }) => {
    return (
        <View style={{ width: '100%' }}>
            <Text style={{ color: 'red', marginTop: mt, fontSize: 12, paddingLeft: 20 }}>{errortext}</Text>
        </View>
    )
}

export default ErrorText

const styles = StyleSheet.create({})