// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import messaging from '@react-native-firebase/messaging';
// import { Platform } from 'react-native';
// import { checkPermissions, requestPermissions } from './notifications';

// export const requestUserPermission = async () => {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//   }
// };

// export const _requestFirebasePermission = async () => {
//   const _getToken = async () => {
//     let token = await messaging().getToken();

//     if (!token) {
//       token = await messaging().getToken();
//     }

//     if (__DEV__) {
//       console.log(['FCM token: ', token]);
//     }
//   };

//   if (Platform.OS === 'ios') {
//     checkPermissions(async (permissions: any) => {
//       if (
//         permissions.authorizationStatus !==
//         PushNotificationIOS.AuthorizationStatus.UNAuthorizationStatusAuthorized
//       ) {
//         const res = await requestPermissions();

//         if (res.authorizationStatus === 2) {
//           await _getToken();
//         }
//       } else {
//         await _getToken();
//       }
//     });
//   } else {
//     const enabled = await messaging().hasPermission();

//     if (!enabled) {
//       await messaging().requestPermission();
//     }

//     await _getToken();
//   }
// };
