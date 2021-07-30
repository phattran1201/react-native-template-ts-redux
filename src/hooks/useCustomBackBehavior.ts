import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { BackHandler } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { pStyle } from '~styles/styles';

let countTap = 0;
export default function useCustomBackBehavior(navigation: any) {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (!navigation?.canGoBack()) {
          showMessage({
            floating: true,
            message: 'Tap again to exit',
            duration: 2000,
            position: 'center',
            titleStyle: { ...pStyle.textButton },
          });
          if (countTap === 0) {
            countTap = 1;
          } else if (countTap === 1) {
            BackHandler.exitApp();
          }
          setTimeout(() => {
            countTap = 0;
          }, 2000); // 2 seconds to tap second-time
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [navigation])
  );
}
