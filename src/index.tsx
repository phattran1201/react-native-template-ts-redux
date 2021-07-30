import {
  LinkingOptions,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Linking, Platform } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import FlashMessage from 'react-native-flash-message';
import { changeBarColors } from 'react-native-immersive-bars';
import { Provider as PaperProvider } from 'react-native-paper';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import DarkTheme from '~/themes/dark-theme';
import DefaultTheme from '~/themes/default-theme';
import useIsDarkTheme from '~hooks/use-is-dark-theme';
import RootStack from '~navigators/root-stack';
import store from '~store/store';

const linking: LinkingOptions = {
  prefixes: [
    /* your linking prefixes */
    'helloworld://',
    'https://www.helloworld.com',
  ],
  config: {
    /* configuration for matching screens with paths */
    screens: {
      initialRouteName: 'Loader',
      Welcome: 'welcome',
      Loader: {
        path: 'loader/:delay?/:text?',
        parse: {
          delay: (ms) => Number(ms),
          text: (text) => decodeURIComponent(text),
        },
        stringify: {
          delay: (ms) => String(ms),
          text: (text) => encodeURIComponent(text),
        },
      },
    },
  },
};

const Main = () => {
  const nav = useRef<NavigationContainerRef>(null);
  const [isDark] = useIsDarkTheme();
  const theme = useMemo(() => {
    if (isDark) {
      return DarkTheme;
    }
    return DefaultTheme;
  }, [isDark]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      changeBarColors(isDark);
    }
  }, [isDark]);

  const onReady = useCallback(async () => {
    try {
      const uri = await Linking.getInitialURL();
      if (uri) {
        RNBootSplash.hide({ fade: true });
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <PaperProvider theme={theme}>
        <NavigationContainer linking={linking} theme={theme} ref={nav} onReady={onReady}>
          <RootStack />
          <FlashMessage />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
