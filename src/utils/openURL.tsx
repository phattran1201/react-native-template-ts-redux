import { Linking } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { pColor } from '~styles/colors';
import { pStyle } from '~styles/styles';

export const openURL = async (url: string) => {
  Linking.openURL(url).catch((err) => {
    showMessage({
      message: 'URL could not be opened',
      description: url,
      duration: 4000,
      backgroundColor: '#D3CFB5',
      textStyle: { ...pStyle.text2, color: pColor.textColor2 },
      titleStyle: pStyle.textTitle,
      style: { marginTop: 0 },
    });
    console.error('openURL -> An error occurred ', err);
  });
};
