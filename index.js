import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { name as appName } from './app.json';
import App from './src';
import { initAppDefaultsProps } from './src/utils/initAppDefaultsProps';

/**
 * Enable React Native Screen
 * Permormance Gain & Less Memory Usage
 * In React Navigation
 */
enableScreens();
initAppDefaultsProps();

AppRegistry.registerComponent(appName, () => App);
