import { StyleSheet } from 'react-native';
import { themeColors } from './theme';

/**
 * Common basic style defines
 */
export const BaseStyle = StyleSheet.create({
    textInput: {
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 18,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1
    },
    safeAreaView: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: themeColors.whiteBackground,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    text: {
        color: themeColors.blackColor(.4),
        fontSize: 14,
        letterSpacing: .5,
        textAlign: 'center',

        fontFamily: 'Poppins-Regular',
        lineHeight: 16
    }


});
