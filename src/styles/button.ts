import { heightButton, HEIGHT_SCALE, WIDTH_SCALE } from '~constants/constants';
import { pColor } from '~styles/colors';

export const styleAllButton = {
  height: heightButton,
  paddingHorizontal: 32 * WIDTH_SCALE,
  borderRadius: 10 * HEIGHT_SCALE,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
};
export const pButton = {
  FILL: {
    // ...pShadow.BLUR0,
    backgroundColor: pColor.appColor,
  },
  FILL_DISABLED: {
    // ...pShadow.BLUR0,
    backgroundColor: pColor.appColorHover,
  },
  OUTLINE: {
    // ...pShadow.BLUR0,
    borderWidth: 1,
    borderColor: pColor.appColor,
    backgroundColor: '#ffffff',
  },
  OUTLINE_DISABLED: {
    // ...pShadow.BLUR0,
    borderWidth: 1,
    borderColor: pColor.black,
    backgroundColor: pColor.appColorHover,
  },
  OUTLINE_WHITE: {
    // ...pShadow.BLUR0,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
  },
  CIRCLE: {
    width: heightButton,
    height: heightButton,
    borderRadius: heightButton / 2,
    backgroundColor: pColor.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BACK_CIRCLE: {
    width: heightButton * 3,
    height: heightButton * 3,
    borderRadius: heightButton * 2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
