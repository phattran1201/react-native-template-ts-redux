import { PixelRatio } from 'react-native';
import { HEIGHT_SCALE, IS_ANDROID, WIDTH_SCALE } from '~constants/constants';
import { pColor } from '~styles/colors';

export const pFont = {
  BLACK: 'NotoSansKR-Bold',
  BOLD: 'NotoSansKR-Bold',
  MEDIUM: 'NotoSansKR-Medium',
  REGULAR: 'NotoSansKR-Regular',
  THIN: 'NotoSansKR-Regular',
  LIGHT: 'NotoSansKR-Regular',
};
export const pFontWeight = {
  BLACK: IS_ANDROID ? { fontFamily: pFont.BLACK } : { fontWeight: '900' },
  BOLD: IS_ANDROID ? { fontFamily: pFont.BOLD } : { fontWeight: '700' },
  MEDIUM: IS_ANDROID ? { fontFamily: pFont.MEDIUM } : { fontWeight: '600' },
  NORMAL: IS_ANDROID ? { fontFamily: pFont.REGULAR } : { fontWeight: 'normal' },
  THIN: IS_ANDROID ? { fontFamily: pFont.THIN } : { fontWeight: '300' },
  LIGHT: IS_ANDROID ? { fontFamily: pFont.LIGHT } : { fontWeight: '100' },
};

const fontSize =
  PixelRatio.get() <= 1.5 ? 12 : PixelRatio.get() > 1.5 && PixelRatio.get() < 3 ? 13 : 14;
const scale = Math.min(WIDTH_SCALE, HEIGHT_SCALE);
export const pFontSize = (size = fontSize) => Math.ceil(size * scale);

export const pText = {
  H0: {
    fontSize: pFontSize(fontSize) + 16,
    fontFamily: pFont.MEDIUM,
    lineHeight: pFontSize(fontSize) + 16 + (IS_ANDROID ? 3 : 6),
  },
  H01: {
    fontFamily: pFont.MEDIUM,
    lineHeight: pFontSize(fontSize) + 13 + (IS_ANDROID ? 3 : 6),
    fontSize: pFontSize(fontSize) + 13,
  },
  H1: {
    fontSize: pFontSize(fontSize) + 8,
    fontFamily: pFont.MEDIUM,
    lineHeight: pFontSize(fontSize) + 8 + (IS_ANDROID ? 3 : 6),
  },
  H11: {
    fontSize: pFontSize(fontSize) + 10,
    fontFamily: pFont.MEDIUM,
    lineHeight: pFontSize(fontSize) + 10 + (IS_ANDROID ? 3 : 6),
  },
  H2: {
    fontSize: pFontSize(fontSize) + 6,
    fontFamily: pFont.MEDIUM,
    lineHeight: pFontSize(fontSize) + 6 + (IS_ANDROID ? 3 : 6),
  },
  H3: {
    fontSize: pFontSize(fontSize) + 4,
    fontFamily: pFont.MEDIUM,
    lineHeight: pFontSize(fontSize) + 4 + (IS_ANDROID ? 3 : 6),
  },
  H4: {
    fontSize: pFontSize(fontSize) + 2,
    fontFamily: pFont.MEDIUM,
    lineHeight: pFontSize(fontSize) + 2 + (IS_ANDROID ? 3 : 6),
  },
  BODY1: {
    fontSize: pFontSize(fontSize) + 0,
    fontFamily: pFont.REGULAR,
    lineHeight: pFontSize(fontSize) + 0 + (IS_ANDROID ? 3 : 6),
  },
  BODY12: {
    fontSize: pFontSize(fontSize) - 1.75,
    fontFamily: pFont.REGULAR,
    lineHeight: pFontSize(fontSize) - 1.75 + (IS_ANDROID ? 3 : 6),
  },
  BODY2: {
    fontSize: pFontSize(fontSize) - 2,
    fontFamily: pFont.REGULAR,
    lineHeight: pFontSize(fontSize) - 2 + (IS_ANDROID ? 3 : 6),
  },
  SMALL1: {
    fontSize: pFontSize(fontSize) - 3,
    fontFamily: pFont.REGULAR,
    lineHeight: pFontSize(fontSize) - 3 + (IS_ANDROID ? 3 : 6),
  },
  SMALL12: {
    fontSize: pFontSize(fontSize) - 4,
    fontFamily: pFont.REGULAR,
    lineHeight: pFontSize(fontSize) - 4 + (IS_ANDROID ? 3 : 6),
  },
  SMALL2: {
    fontSize: pFontSize(fontSize) - 5,
    fontFamily: pFont.MEDIUM,
    lineHeight: pFontSize(fontSize) - 5 + (IS_ANDROID ? 3 : 6),
  },
  BUTTON: {
    fontSize: pFontSize(fontSize) - 2,
    fontFamily: pFont.MEDIUM,
    lineHeight: pFontSize(fontSize) - 2 + (IS_ANDROID ? 3 : 6),
    textTransform: 'uppercase',
  },
  TITLE: {
    fontSize: pFontSize(fontSize) + 50,
    fontFamily: pFont.MEDIUM,
    lineHeight: pFontSize(fontSize) + 50 + (IS_ANDROID ? 3 : 6),
  },
  RANKING: {
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4 * HEIGHT_SCALE,
    textShadowColor: 'black',
    fontSize: pFontSize(fontSize) + 6,
    fontFamily: pFont.MEDIUM,
    lineHeight: pFontSize(fontSize) + 6 + (IS_ANDROID ? 3 : 6),
    color: pColor?.textColor,
    ...pFontWeight.BOLD,
  },
};
