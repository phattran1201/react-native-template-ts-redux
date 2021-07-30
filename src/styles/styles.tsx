import { Platform, StyleSheet } from 'react-native';
import {
  headerHeight,
  heightBottomBar,
  HEIGHT_SCALE,
  iconSize,
  IS_TABLET,
  textInputHeight,
  WIDTH_SCALE,
} from '~constants/constants';
import { pButton, styleAllButton } from '~styles/button';
import { pColor } from '~styles/colors';
import { pFont, pFontSize, pFontWeight, pText } from '~styles/typography';

const pShadow = {
  BLUR0: {
    ...Platform.select({
      android: {
        backgroundColor: 'white',
        elevation: 3,
      },
      ios: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 3,
        shadowOpacity: 0.16,
      },
    }),
  },
  BLUR10: {
    ...Platform.select({
      android: {
        backgroundColor: 'white',
        elevation: 4,
      },
      ios: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 4,
        shadowOpacity: 0.16,
      },
    }),
  },
  BLUR20: {
    ...Platform.select({
      android: {
        backgroundColor: 'white',
        elevation: 5,
      },
      ios: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        shadowOpacity: 0.16,
      },
    }),
  },
};

const pStyle = StyleSheet.create({
  backBtnSize: { left: -10 * WIDTH_SCALE, width: WIDTH_SCALE * 24 },
  full: { height: '100%', width: '100%' },

  text: {
    ...pText.BODY1,
    color: pColor.textColor,
  },
  text2: {
    ...pText.BODY2,
    color: pColor.textColor,
  },

  textHeader: {
    ...pText.H2,
    color: pColor.textColor,
  },
  textHeader2: {
    ...pText.H01,
    color: pColor.textColor,
    textAlign: 'center',
  },
  textHeader3: {
    ...pText.H0,
    color: pColor.textColor,
    textAlign: 'center',
  },
  textSubTitle: {
    ...pText.BODY1,
    color: pColor.textSubColor,
  },
  textTitle: {
    ...pText.H3,
    color: pColor.textColor,
  },

  textTitle2: {
    ...pText.H4,
    color: pColor.textColor,
    ...pFontWeight.BOLD,
  },
  textTitle3: {
    ...pText.H4,
    color: pColor.textColor,
  },

  textCaption: {
    ...pText.SMALL1,
    color: pColor.textSubColor,
  },

  textCaption2: {
    ...pText.SMALL2,
    color: pColor.textSubColor,
  },
  textCaption3: {
    ...pText.SMALL1,
    color: pColor.textColor,
  },
  textInput: {
    ...pText.H4,
    color: pColor.textColor2,
  },
  textInput2: {
    ...pText.BODY1,
    color: pColor.textColor2,
  },
  textButton: {
    ...pText.BODY1,
    color: pColor.white,
    fontFamily: pFont.MEDIUM,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  textButtonDisable: {
    ...pText.BODY1,
    color: pColor.disableText,
    fontFamily: pFont.MEDIUM,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  textButton2: {
    ...pText.BODY1,
    color: pColor.appColor,
    fontFamily: pFont.REGULAR,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  textButton2Disable: {
    ...pText.BODY1,
    color: pColor.disableText,
    fontFamily: pFont.REGULAR,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  textButtonOutLine: {
    ...pText.BODY1,
    color: pColor.appColor,
    fontFamily: pFont.MEDIUM,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  textButtonOutLine2: {
    ...pText.BODY1,
    color: pColor.textColor,
    fontFamily: pFont.REGULAR,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  textButtonOutLineDisable: {
    ...pText.BODY1,
    color: pColor.disableText,
    fontFamily: pFont.MEDIUM,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  textButtonOutLine2Disable: {
    ...pText.BODY1,
    color: pColor.disableText,
    fontFamily: pFont.REGULAR,
    textAlign: 'center',
  },
  textShadow: {
    textShadowColor: '#00000060',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10 * WIDTH_SCALE,
  },
  textShadow2: {
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5 * WIDTH_SCALE,
  },
  //header
  titleHeader: {
    ...pText.H3,
    color: pColor.appColor,
    textAlign: 'center',
  },
  // khi text bị null thì hiện cái vạch màu
  textNull: {
    ...pText.BODY1,
    color: pColor.divider,
    height: pText.BODY1.fontSize,
    width: '90%',
  },
  divider: {
    backgroundColor: pColor.divider,
    height: 1,
    width: '100%',
  },
  textNull: {
    ...pText.BODY1,
    color: pColor.divider,
    height: pText.BODY1.fontSize,
    width: '90%',
  },
  textNull2: {
    ...pText.H3,
    color: pColor.divider,
    height: pText.H3.fontSize,
    width: '30%',
  },
  border: {
    borderColor: pColor.borderColor,
    borderRadius: 4 * WIDTH_SCALE,
    borderWidth: 0.5 * WIDTH_SCALE,
  },
  borderImage: {
    borderColor: pColor.borderColor,
    borderRadius: 4 * WIDTH_SCALE,
    borderWidth: 0.5 * WIDTH_SCALE,
  },
  //Button
  button: {
    ...pButton.FILL,
    ...styleAllButton,
  },
  button2: {
    ...pButton.FILL,
    backgroundColor: '#F3EEFE',
    ...styleAllButton,
  },
  buttonDisable: {
    ...pButton.FILL,
    ...styleAllButton,

    backgroundColor: pColor.disableButton,
  },
  buttonOutline: {
    ...pButton.OUTLINE,
    ...styleAllButton,
  },
  buttonOutlineDisable: {
    ...pButton.OUTLINE,
    ...styleAllButton,

    borderColor: pColor.disableButton,
  },
  buttonOutlineWhite: {
    ...pButton.OUTLINE_WHITE,
    ...styleAllButton,
  },
  buttonIcon: {
    ...pShadow.BLUR0,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'baseline',
    borderRadius: 2 * WIDTH_SCALE,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5 * WIDTH_SCALE,
  },
  input: {
    backgroundColor: pColor.backgroundInput,
    borderColor: '#87755c30',
    borderRadius: 8 * WIDTH_SCALE,
    borderWidth: 2,
    height: textInputHeight,
    justifyContent: 'center',
    paddingHorizontal: 8 * WIDTH_SCALE,
    paddingVertical: 0,
  },
  input2: {
    borderRadius: 20 * WIDTH_SCALE,
    height: textInputHeight * 1.1,
    marginBottom: 18 * HEIGHT_SCALE,
    paddingHorizontal: 24 * WIDTH_SCALE,
    width: '100%',
    ...Platform.select({
      android: {
        backgroundColor: 'white',
        elevation: 2,
      },
      ios: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2,
        shadowOpacity: 0.16,
      },
    }),
    ...pText.BODY12,
  },
  inputArena: {
    ...pText.BODY1,
    borderColor: pColor.borderColor,
    borderRadius: 2 * WIDTH_SCALE,
    borderWidth: 1,
    color: pColor.textSubColor,
    padding: 16 * WIDTH_SCALE,
  },
  icon: {
    color: pColor.appColor,
    fontSize: pFontSize(iconSize),
  },
  btnRightStyle: {
    alignItems: 'center',
    backgroundColor: '#00000050',
    borderRadius: pText.H2.fontSize * 1.8,
    height: pText.H2.fontSize * 1.8,
    justifyContent: 'center',
    marginRight: 8 * WIDTH_SCALE,
    paddingHorizontal: 0,
    width: pText.H2.fontSize * 1.8,
  },
  iconSectionImage: {
    height: 24 * WIDTH_SCALE,
    tintColor: pColor.GREY60,
    width: 24 * WIDTH_SCALE,
  },
  iconOnHeaderBarSize: {
    height: IS_TABLET ? HEIGHT_SCALE * 70 : HEIGHT_SCALE * 80,
    width: IS_TABLET ? HEIGHT_SCALE * 70 : HEIGHT_SCALE * 80,
    zIndex: 9999,
  },
  iconOnHeaderBarShadow: {
    borderRadius: (HEIGHT_SCALE * 100) / 2,
    height: HEIGHT_SCALE * 100,
    width: HEIGHT_SCALE * 100,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 3,
        shadowOpacity: 0.6,
      },
    }),
    zIndex: 9999,
  },
  //shadow
  shadow: {
    ...pShadow.BLUR0,
  },
  shadow2: {
    borderColor: pColor.borderColor,
    borderWidth: WIDTH_SCALE,
    ...pShadow.BLUR0,
  },

  header: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: headerHeight,
    width: '100%',
    zIndex: 9999,
  },
  //modal
  textModal: {
    ...pText.H3,
    color: pColor.textColor,
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  content: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingHorizontal: 16 * WIDTH_SCALE,
  },
  center: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddingBottomTabbar: {
    paddingBottom: heightBottomBar + 20 * HEIGHT_SCALE,
  },
  iconMicButton: {
    alignItems: 'center',
    backgroundColor: '#00000008',
    borderRadius: (36 * WIDTH_SCALE) / 2,
    height: 36 * WIDTH_SCALE,
    justifyContent: 'center',
    width: 36 * WIDTH_SCALE,
  },
});

export { pStyle, pShadow };
