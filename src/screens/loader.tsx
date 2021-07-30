import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { ActivityIndicator } from 'react-native-paper';
import FixedContainer from '~components/fixed-container';
import PrimaryText from '~components/primary-text';
import { IMAGE } from '~constants/imagePath';
import { RootStackScreenProps } from '~navigators/root-stack';

const Loader = (props: RootStackScreenProps<'Loader'>) => {
  const { navigation, route } = props;

  useEffect(() => {
    (async () => {
      try {
        await RNBootSplash.hide({ fade: true });
        navigation.replace('Drawer');
      } catch (error) {
        console.error(error);
      }
    })();
  }, [navigation]);

  return (
    <FixedContainer style={styles.center} edges={[]}>
      <Image style={styles.logo} source={IMAGE.bootsplash_logo} />
      <View style={styles.report}>
        <ActivityIndicator style={styles.progress} />
        <PrimaryText>{route.params?.text ?? 'Initializing'}</PrimaryText>
      </View>
    </FixedContainer>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative',
  },
  logo: {
    width: 200,
    height: 200,
  },
  report: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
  },
  progress: {
    marginVertical: 15,
  },
  copy: {
    marginTop: 75,
  },
});

export default Loader;
