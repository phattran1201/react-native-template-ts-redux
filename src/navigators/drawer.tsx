import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import CustomDrawer from '~components/custom-drawer';
import BottomTab, { BottomTabScreensParams } from '~navigators/bottom-tab';
import { RootStackScreensParams } from '~navigators/root-stack';
import TopTabNavigator, { TopTabScreensParams } from '~navigators/top-tab';
import Welcome from '~screens/welcome';

export type DrawerScreensParams = {
  Welcome: undefined;
  BottomTab: undefined | NavigatorScreenParams<BottomTabScreensParams>;
  TopTab: undefined | NavigatorScreenParams<TopTabScreensParams>;
};

export type DrawerScreens = keyof DrawerScreensParams;

export type DrawerScreenProps<T extends DrawerScreens> = {
  navigation: CompositeNavigationProp<
    DrawerNavigationProp<DrawerScreensParams, T>,
    NativeStackNavigationProp<RootStackScreensParams>
  >;
  route: RouteProp<DrawerScreensParams, T>;
};

const { Navigator, Screen } = createDrawerNavigator<DrawerScreensParams>();

const Drawer = () => (
  <Navigator
    lazy={true}
    drawerContent={(props) => <CustomDrawer {...props} />}
    drawerStyle={styles.drawer}
  >
    <Screen name="Welcome" component={Welcome} options={{ drawerIcon: () => 'home' }} />
    <Screen
      name="TopTab"
      component={TopTabNavigator}
      options={{ drawerIcon: () => 'numeric', title: 'Top Tab' }}
    />
    <Screen
      name="BottomTab"
      component={BottomTab}
      options={{ drawerIcon: () => 'dots-horizontal', title: 'Bottom Tab' }}
    />
  </Navigator>
);

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
});

export default Drawer;
