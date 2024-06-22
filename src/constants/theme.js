import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
// const { width, height } = Dimensions.get("screen");

export const COLORS = {
  primary: '#FF673A', // orange 

  yellow: '#FCBF00',

  red: '#FF0000',  // red

  blue: "#0080C8",

  gray10: '#E5E5E5',   //lightgray
  gray20: '#CCCCCC',
  gray30: '#A1A1A1',
  // gray30: '#A1A1AA',
  gray40: '#999999',
  gray50: '#7F7F7F',
  gray60: '#666666',
  gray70: '#4C4C4C',
  gray80: '#333333',
  gray85: '#242526',
  gray90: '#191919',

  lime: "#009C93",

  // placeholderColor
  placeholderColor: "#52525B",

  gray01: 'rgba(113, 113, 122, 1)',
  white60: 'rgba(255, 255, 255, 0.6)',

  danger: "#FF0000",



  additionalColor4: '#C3C3C3',
  additionalColor9: '#F3F3F3',
  additionalColor11: '#F0FFFB',
  additionalColor13: '#EBF3EF',

  white: '#FFFFFF',
  black: '#000000',

  transparent: 'transparent',
  transparentWhite1: 'rgba(255, 255, 255, 0.1)',
  transparentWhite2: 'rgba(255, 255, 255, 0.2)',
  transparentWhite3: 'rgba(255, 255, 255, 0.3)',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack2: 'rgba(0, 0, 0, 0.2)',
  transparentBlack3: 'rgba(0, 0, 0, 0.3)',
  transparentBlack4: 'rgba(0, 0, 0, 0.4)',
  transparentBlack5: 'rgba(0, 0, 0, 0.5)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',
};
export const SIZES = {
  // app dimensions
  width,
  height
};
export const FONTS = {
  black: "Inter-Black",
  bold: "Inter-Bold",
  extraBold: "Inter-ExtraBold",
  semiBold: "Inter-Semibold",
  medium: "Inter-Medium",
  regular: "Inter-Regular",
  light: "Inter-Light",
  extraLight: "Inter-ExtraLight",
  thin: "Inter-Thin",
};


export const darkTheme = {
  name: "dark",
  backgroundColor1: COLORS.gray85,
  backgroundColor2: COLORS.gray90,
  backgroundColor3: COLORS.gray90,
  backgroundColor4: COLORS.primary,
  backgroundColor5: COLORS.gray85,
  backgroundColor6: COLORS.black,
  backgroundColor7: COLORS.gray90,
  backgroundColor8: COLORS.gray70,
  lineDivider: COLORS.gray70,
  borderColor1: COLORS.gray70,
  borderColor2: COLORS.gray70,
  textColor: COLORS.white,
  textColor2: COLORS.white,
  textColor3: COLORS.gray40,
  textColor4: COLORS.white,
  textColor5: COLORS.gray30,
  textColor6: COLORS.gray30,
  textColor7: COLORS.gray40,
  tintColor: COLORS.white,
  dotColor1: COLORS.white,
  dotColor2: COLORS.primary,
}

export const lightTheme = {
  name: "light",
  backgroundColor1: COLORS.white,
  backgroundColor2: COLORS.primary3,
  backgroundColor3: COLORS.additionalColor11,
  backgroundColor4: COLORS.white,
  backgroundColor5: COLORS.additionalColor13,
  backgroundColor6: COLORS.primary3,
  backgroundColor7: COLORS.white,
  backgroundColor8: COLORS.gray10,
  lineDivider: COLORS.gray20,
  borderColor1: COLORS.white,
  borderColor2: COLORS.black,
  textColor: COLORS.black,
  textColor2: COLORS.primary,
  textColor3: COLORS.gray80,
  textColor4: COLORS.white,
  textColor5: COLORS.black,
  textColor6: COLORS.gray,
  textColor7: COLORS.black,
  tintColor: COLORS.black,
  dotColor1: COLORS.gray20,
  dotColor2: COLORS.primary3,
}

export const selectedTheme = darkTheme

const appTheme = { COLORS, SIZES, FONTS, darkTheme, lightTheme };

export default appTheme;
