import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";


export default StyleSheet.create({
    //   ==================== Bottom tab style ==================
    tabBarStyle: {
        backgroundColor: COLORS.white,
        height: SIZES.height * .09,
        paddingTop: SIZES.height * .015,
        paddingBottom: SIZES.height * .01,
        // marginBottom: -5,
        borderTopWidth: 0,
        // alignItems: 'center',
    },
    labelStyle: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .036,
        marginBottom: 2,
    },
    scanner_btn: {
        width: SIZES.width * .15,
        height: SIZES.width * .15,
        borderRadius: SIZES.width * .1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        bottom: SIZES.height * .045,
    },
    scanner: {
        bottom: SIZES.height * .03,
    },
    hr: {
        width: SIZES.width * .06,
        height: 3,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        alignSelf: 'center',
    },
    hr1: {
        width: SIZES.width * .06,
        height: 3,
        borderRadius: 5,
        backgroundColor: COLORS.transparent,
        alignSelf: 'center',
    },
    tab_btn: {
        alignItems: 'center',
        marginBottom: -3,
    },

    // =================== stack screen style ==================

    headerStyle: {
        backgroundColor: COLORS.white,
        elevation: 0,
    },
    headerStyle1: {
        backgroundColor: COLORS.black,
        elevation: 0,
    },
   
    headerTitleStyle: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .05,
        color: COLORS.black,
        // marginBottom: -4,
        textAlign: 'center',
    },
    dot: {
        width: SIZES.width * .03,
        height: SIZES.width * .03,
        borderRadius: SIZES.width * .015,
        backgroundColor: COLORS.primary,
        position: 'absolute',
        top: -2,
        right: -2,
        zIndex: 99
    }

})