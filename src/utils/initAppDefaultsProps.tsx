import { Dimensions, LogBox, Platform, StatusBar } from 'react-native';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import Modal from 'react-native-modal';

const typographyInit = () => {
  const customTextProps = {
    allowFontScaling: false,
    style: {},
  };
  const customTextInputProps = {
    underlineColorAndroid: 'transparent',
    allowFontScaling: false,
    style: {},
  };

  // Calling the functions and passing the custom props into their respective params
  setCustomTextInput(customTextInputProps);
  setCustomText(customTextProps);
};

const statusBarInit = () => {
  //! set statusbar
  if (Platform.OS === 'android') {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
  }
  StatusBar.setBarStyle('dark-content', true);
  // StatusBar.setHidden(true);
};

const modalInit = () => {
  ///! fix modal full screen

  let { width, height } = Dimensions.get('screen');
  Modal.defaultProps.deviceWidth = Math.min(width, height);
  Modal.defaultProps.deviceHeight = Math.max(width, height);
  Modal.defaultProps.backdropColor = '#00000080';
  Modal.defaultProps.statusBarTranslucent = true;
  Modal.defaultProps.animationIn = 'fadeIn';
  Modal.defaultProps.animationOut = 'fadeOut';
  Modal.defaultProps.backdropTransitionOutTiming = 0;
  Modal.defaultProps.hideModalContentWhileAnimating = true;
};

const logBoxInit = () => {
  //! disable warning LogBox
  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested',
    'Require cycle: node_modules',
    'Calling `getNode()`',
    'Animated: `useNativeDriver` was not specified.',
    'Warning: componentWillReceiveProps has been renamed',
    'Warning: componentWillMount has been renamed',
    'Non-serializable values were found in the navigation state',
    'Sending `onAnimatedValueUpdate` with no listeners registered.',
    'Setting a timer',
    'Calling getNode()',
  ]);
};

const initAppDefaultsProps = () => {
  typographyInit();
  // statusBarInit();
  modalInit();
  logBoxInit();
};
export { initAppDefaultsProps, typographyInit, statusBarInit, modalInit, logBoxInit };
