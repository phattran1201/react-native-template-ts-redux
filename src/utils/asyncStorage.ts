import AsyncStorage from '@react-native-community/async-storage';

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('@tokenBrush:key');
    return token !== null ? token : '';
  } catch (error) {
    return '';
  }
};

export const saveToken = async (token = '') => {
  try {
    await AsyncStorage.setItem('@tokenBrush:key', token);
  } catch (e) {
    console.log(e);
  }
};

export const getFirstTime = async () => {
  try {
    const isFirstTime = (await AsyncStorage.getItem('@FirstTime:key')) || 'true';
    return JSON.parse(isFirstTime);
  } catch (e) {
    console.log(e);
    return true;
  }
};

export const updateFirstTime = async () => {
  try {
    await AsyncStorage.setItem('@FirstTime:key', JSON.stringify(false));
  } catch (e) {
    console.log(e);
  }
};
