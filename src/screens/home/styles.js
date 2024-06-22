import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';


export default StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  back: {
    position: 'absolute',
    left: SIZES.width * .02,
    top: SIZES.width * .05,
  },
  logoutBtn: {
    position: 'absolute',
    right: SIZES.width * .02,
    top: SIZES.width * .05,
    width: SIZES.width * .1,
    height: SIZES.width * .1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: SIZES.width * .3,
    marginTop: SIZES.height * .02,
    alignSelf: 'center',
    // marginBottom: SIZES.height * .01,
  },
  box: {
    width: SIZES.width * .92,
    borderRadius: 20,
    backgroundColor: 'rgba(252, 191, 0, 0.53)',
    alignSelf: 'center',
    marginTop: SIZES.height * .03,
    paddingBottom: SIZES.height * .03,
  },
  boxRow: {
    width: SIZES.width * .8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.width * .02,
  },
  circle: {
    width: SIZES.width * .1,
    height: SIZES.width * .1,
    borderRadius: SIZES.width * .1,
    backgroundColor: COLORS.black,
    marginLeft: SIZES.width * .03,
    marginTop: SIZES.height * .01,
    marginBottom: SIZES.height * .05,
  },
  ellipse: {
    width: '100%',
    height: SIZES.height * .61,
    overflow: 'hidden'
  },
  arrow: {
    width: SIZES.width * .5,
    height: SIZES.height * .5,
    position: 'absolute',
    bottom: SIZES.height * -.06,
    left: SIZES.width * -.05
  },
  gold: {
    width: SIZES.width * .8,
    height: SIZES.height * .6,
    bottom: SIZES.height * -.11,
    // marginLeft: SIZES.width * .05,
  },
  titleBox: {
    position: 'absolute',
    top: SIZES.height * -.025,
    zIndex: 2,
    marginLeft: SIZES.width * .05,
  },

  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.width * .05,
    color: COLORS.black,
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
  subTitle: {
    width: SIZES.width * .8,
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * .034,
    color: COLORS.black,
  },

  text: {
    // width: SIZES.width * .31,
    fontFamily: FONTS.bold,
    fontSize: SIZES.width * .038,
    color: COLORS.black,
    textAlign:'center',
    marginTop: SIZES.height * .01,
  },

  btn: {
    width: SIZES.width * .7,
    borderRadius: 15,
    marginTop: SIZES.height * .025,
  },
});
