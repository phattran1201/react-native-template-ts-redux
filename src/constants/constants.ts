import { Dimensions, Platform } from 'react-native';
import deviceInfoModule from 'react-native-device-info';

export const DEBUG = __DEV__ ? true : false;

export const KEYGEOCODER = '';
export const BASE_URL = 'https://hitek-01.hitek.com.vn:4001';
export const SPEECHACE_URL = 'https://api.speechace.co/api';
export const SOCKET_URL = '';
export const PAYPAL_URL = 'https://www.sandbox.paypal.com';
export const PAYPAL_API_URL = 'https://api.sandbox.paypal.com';
export const PAYPAL_CLIENT_ID = '';
export const PAYPAL_SECRET_ID = '';
export const PAYPAL_LOGIN_RETURN_URL = '';
export const PAYPAL_SCOPE = 'openid email';
export const PAYPAL_LOGIN_INITIAL_URL = '';
export const FACEBOOK_PERMISSION = ['public_profile', 'email'];

//! TODO: check lại do modal của android
export const { width, height } = Dimensions.get('screen');
export const WIDTH = Math.min(width, height);
export const HEIGHT = Math.max(width, height);

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const IS_TABLET = deviceInfoModule.isTablet();

export const baseWidth = 375;
export const baseHeight = 667;
export const WIDTH_SCALE = WIDTH / baseWidth;
export const HEIGHT_SCALE = HEIGHT / baseHeight;

export const headerHeight = WIDTH_SCALE * 60;
export const iconSize = WIDTH_SCALE * 20;
export const heightBottomBar = WIDTH_SCALE * 69;
export const textInputHeight = WIDTH_SCALE * 54;
export const heightButton = WIDTH_SCALE * 36;
