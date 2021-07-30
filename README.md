# HelloWorld App <!-- omit in toc -->

- [First Run](#first-run)
- [Change Splash Screen Logo](#change-splash-screen-logo)
- [Vector Icon](#vector-icon)
  - [IOS](#ios)
  - [Android](#android)
- [Version Bump](#version-bump)
- [Absolute Aliased Import](#absolute-aliased-import)
  - [Example](#example)
    - [ESModule Systax](#esmodule-systax)
    - [Require Syntax (Generally Used for Assets)](#require-syntax-generally-used-for-assets)
- [Global State Management](#global-state-management)
- [Navigation](#navigation)
  - [Pre Configured Navigators](#pre-configured-navigators)
  - [Navigator Nesting](#navigator-nesting)
- [Deep Link](#deep-link)
  - [URL and Schema](#url-and-schema)
  - [Testing Deep Links](#testing-deep-links)
  - [More Info](#more-info)
- [Components](#components)
  - [Container](#container)
  - [Fixed Container](#fixed-container)
  - [Keyboard Avoiding Container](#keyboard-avoiding-container)
- [Troubleshooting](#troubleshooting)

This was bootstrapped with [TS-Redux Template](https://github.com/phattran1201/react-native-template-ts-redux)

## First Run

Remember to install Pods if you are developing for ios (On MacOS)

`cd ios && pod install && cd ..`

## Change Splash Screen Logo

Replace `src/assets/images/bootsplash_logo.png` with your own then run,

`yarn regenerate-bootsplash`

For more control, see [React Native Bootsplash - Setup - Assets Generation](https://github.com/zoontek/react-native-bootsplash#assets-generation)

## Vector Icon

By default, to reduce footprint, only `MaterialCommunityIcon` is enabled. You can easily enable other icons by following the instruction below.

### IOS

Edit `ios/HelloWorld/Info.plist` and add a property called `UIAppFonts` and add your desired fonts from the list below.

```xml
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
  <string>Fontisto.ttf</string>
</array>
```

Then Rebuild The App.

### Android

Edit `android/app/build.gradle` and find:

```shell
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialCommunityIcons.ttf' ]
]
```

Now add your desired fonts inside the `iconFontNames` array.

```shell
iconFontNames: [
  'AntDesign.ttf',
  'Entypo.ttf',
  'EvilIcons.ttf',
  'Feather.ttf',
  'FontAwesome.ttf',
  'FontAwesome5_Brands.ttf',
  'FontAwesome5_Regular.ttf',
  'FontAwesome5_Solid.ttf',
  'Foundation.ttf',
  'Ionicons.ttf',
  'MaterialIcons.ttf',
  'MaterialCommunityIcons.ttf',
  'SimpleLineIcons.ttf',
  'Octicons.ttf',
  'Zocial.ttf',
  'Fontisto.ttf'
]
```

Then rebuild the app.

## Version Bump

This template comes with react-native-version. Just do,

`yarn version`

to bump version number on both ios and android.

## Absolute Aliased Import

You can import any files inside `src/` directory using `~/` prefix.

### Example

#### ESModule Systax

```ts
// src/stores/store/storeHook.ts
import { useAppSelector } from '~/stores/store/storeHooks';
```

#### Require Syntax (Generally Used for Assets)

```tsx
// src/components/custom-drawer.tsx
const CoolestImage = () => (
   <Avatar.Image
      source={require('~/assets/bootsplash_logo.png')}
   />
);
```

## Global State Management

The Excellent [redux](http://redux.js.org) is preconfigured with [@react-native-community/async-storage] (https://github.com/react-native-community/react-native-async-storage) persistence using [redux-persist](https://github.com/rt2zz/redux-persist).

You can access the store using `useAppSelector` hook that's exported from `storeHooks.ts`.

You can view the pre-configured Root Store Model and customize it in `store.ts`.
## Navigation

React Navigation is pre-configured with the Root Stack Being a Native Stack.

### Pre Configured Navigators

1. Native Stack Navigator
2. Drawer Navigator (With Custom Drawer Component using React Native Paper)
3. Material Top Tab Navigator
4. Material Bottom Tab Navigator

### Navigator Nesting

The aforementioned navigators are nested in the following way:

```
Root Stack Navigator (navigators/root-stack.tsx)
|-- Loader Screen (screens/loader.tsx)
|-- Drawer Navigator (navigators/drawer.tsx)
| |-- Welcome Screen (screens/welcome.tsx)
| |-- Top Tab Navigator (navigators/top-tab.tsx)
| | |-- Screen One (screens/one.tsx)
| | |-- Screen Two (screens/two.tsx)
| | |-- Screen Three (screens/three.tsx)
| |-- Bottom Tab Navigator (navigators/bottom-tab.tsx)
| | |-- Home Screen (screens/home.tsx)
| | |-- Details Screen (screens/details.tsx)
```

## Deep Link

Deep Link & Universal Link is also pre-configured for React Navigation. It should `just work` on android. Universal Link for IOS may need additional setup.

### URL and Schema

_URL:_ `https://www.helloworld.com`
_Schema:_ `helloworld://`

### Testing Deep Links

You can use `uri-scheme` to test deep links on both ios and android.

```sh
npx uri-scheme open helloworld://loader/3000/Test_Deep_Link --android
npx uri-scheme open helloworld://loader/3000/Test_Deep_Link --ios

px uri-scheme open https://www.helloworld.com/loader/3000/Test_Deep_Link --android
npx uri-scheme open https://www.helloworld.com/loader/3000/Test_Deep_Link --ios
```

### More Info

See [React Navigation - Deep linking](https://reactnavigation.org/docs/deep-linking/) & [React Navigation - Configuring links](https://reactnavigation.org/docs/configuring-links/) for more information.

## Components

### Container

A scrollable container that respects safe area and accepts both SafeAreaView and ScrollView props.

### Fixed Container

For non scrollable pages, respects safe area and accepts SafeAreaView props.

### Keyboard Avoiding Container

Same as Container, but plays nicely with keyboard. Useful for screens with forms.

## Troubleshooting

See [Here](https://github.com/phattran1201/react-native-template-ts-redux#troubleshooting) for a list of potential issues and their solutions.
