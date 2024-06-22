import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const EmptyData = ({mainStyle, title}) => {
  return (
    <View style={[styles.container, mainStyle]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default EmptyData

const styles = StyleSheet.create({
    container: {
        height: SIZES.height * .9,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .04,
        color: COLORS.black,
        marginBottom: -4,
    },
})