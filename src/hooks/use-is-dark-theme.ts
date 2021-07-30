import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { useAppSelector } from '~store/storeHooks';

const useIsDarkTheme = () => {
  const userTheme = useAppSelector((state) => state.settingsReducer.userTheme);
  const systemColorScheme = useColorScheme();

  const isDark = useMemo(
    () => userTheme === 'dark' || (!userTheme && systemColorScheme === 'dark'),
    [systemColorScheme, userTheme]
  );

  return [isDark, !userTheme];
};

export default useIsDarkTheme;
