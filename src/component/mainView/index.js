import { StyleSheet, Text, View, ScrollView, Image, ActivityIndicator, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images } from '../../constants'


const MainView = ({  bg, children, mainStyle, modalLoading, statusBarBg }) => {

    return (
        <SafeAreaView style={[styles.container, mainStyle, bg && { backgroundColor: bg }]}>
            {statusBarBg == COLORS.transparent ?
                <StatusBar translucent={true} backgroundColor={COLORS.transparent} barStyle='light-content' />
                :
                <StatusBar backgroundColor={statusBarBg} barStyle={statusBarBg == COLORS.white ? 'dark-content' : 'light-content'} />
            }
            {children}

        </SafeAreaView>
    )
}

MainView.defaultProps = {
    scroll: false,
    loading: false,
    modalLoading: false,
    children: '',
    renderTopOuterComponent: null,
    renderBottomOuterComponent: null,
    statusBarBg: COLORS.white,
}

export default MainView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    loading: {
        width: SIZES.width * .18,
        height: SIZES.width * .18,
        alignSelf: 'center',
        // tintColor: COLORS.primary,
    }
})

