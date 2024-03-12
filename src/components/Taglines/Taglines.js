import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { themeColors } from '../../config/theme'

const Taglines = ({ title, mt = 0, mb = 0, ph = 0 }) => {
    return (
        <View style={[styles.container, { marginTop: mt, marginBottom: mb, paddingHorizontal: ph }]}>
            <Text style={styles.tagline}>{title}</Text>
        </View>
    )
}

export default Taglines

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    tagline: {
        color: themeColors.blackColor(.8),
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        letterSpacing: .5,
        textAlign: 'center',
    }
})