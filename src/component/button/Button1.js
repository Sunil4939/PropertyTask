import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, } from '../../constants'
import Icons from '../Icons'



const Button1 = ({ bg, disabled, width, height, loading, buttonStyle, children, textColor, onPress, icon, btnType }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.btn, disabled&&{backgroundColor: '#3F3F46' }, buttonStyle, bg && { backgroundColor: bg }, width && { width: width }, height && { height: height }]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading &&
        <ActivityIndicator size={SIZES.width * .07} color={COLORS.white} style={{ marginRight: SIZES.width * .03 }} />
      }
      {btnType == 'icon' && <Icons type={'image'} src={icon} size={SIZES.width * .06} color={COLORS.white} style={{ marginRight: SIZES.width * .03 }} />}
      <Text style={[styles.btn_text, disabled && { color: COLORS.white }, textColor && { color: textColor }]}>{children}</Text>
    </TouchableOpacity>
  )
}

Button1.defaultProps = {
  bg: null,
  buttonStyle: null,
  textColor: null,
  children: null,
  onPress: null,
  loading: false,
  width: null,
  height: null,
  disabled: false,
}

export default Button1;

const styles = StyleSheet.create({
  btn: {
    width: SIZES.width * .8,
    height: SIZES.height * .065,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    borderColor: COLORS.primary,
    elevation: 5,
  },

  btn_text: {
    fontFamily: FONTS.bold,
    color: COLORS.black,
    fontSize: SIZES.width * .041,
  },
})