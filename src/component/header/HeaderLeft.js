import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from '../Icons'
import { COLORS, SIZES, icons, images } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const HeaderLeft = ({style, onPress,}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity activeOpacity={0.5} style={[styles.back, style]} onPress={onPress ? onPress : () => navigation?.goBack()} >
        <Icons type={'image'} src={icons.back} size={SIZES.width * .07} />
    </TouchableOpacity>
  )
}

HeaderLeft.defaultProps = {
    style: null,
    onPress: null,
}

export default HeaderLeft

const styles = StyleSheet.create({
    back: {
        width: SIZES.width * .09,
        height: SIZES.width * .09,
        borderRadius: 12,
        // backgroundColor: COLORS.white16,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: SIZES.width * .03,
    }
})