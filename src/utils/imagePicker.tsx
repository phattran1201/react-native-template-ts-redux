// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import ImageResizer from 'react-native-image-resizer';
// import strings from '../constants/strings';

// const options = {
//   // title: strings.image_picker.image_picker_title,
//   // takePhotoButtonTitle: strings.image_picker.take_picture_on_camera_text,
//   // chooseFromLibraryButtonTitle: strings.image_picker.choose_picture_from_library,
//   // cancelButtonTitle: strings.image_picker.cancel_button_text,
//   mediaType: 'photo',
//   maxWidth: 1024,
//   maxHeight: 1024,
//   quality: 1,
// };

// const width = 1024;
// const height = 1024;

// export const onImagePicker = () =>
//   new Promise((resolve, reject) => {
//     launchImageLibrary(options, response => {
//       if (response.didCancel) {
//         reject();
//       } else if (response.error) {
//         reject();
//       } else if (response.customButton) {
//         reject();
//       } else {
//         console.log('phat: coi thu response ne', response);
//         if (response.originalRotation && response.originalRotation === 90) {
//           ImageResizer.createResizedImage(response.uri, width, height, 'JPEG', 100, 90)
//             .then(({ uri }) => resolve({ uri }))
//             .catch(err => reject(err));
//         } else {
//           ImageResizer.createResizedImage(response.uri, width, height, 'JPEG', 100)
//             .then(({ uri }) => resolve({ uri }))
//             .catch(err => reject(err));
//         }
//       }
//     });
//   });

// export const onLaunchCamera = () =>
//   new Promise((resolve, reject) => {
//     launchCamera(options, response => {
//       if (response.didCancel) {
//         reject();
//       } else if (response.error) {
//         reject();
//       } else if (response.customButton) {
//         reject();
//       } else {
//         console.log('phat: coi thu response ne', response);
//         if (response.originalRotation && response.originalRotation === 90) {
//           ImageResizer.createResizedImage(response.uri, 356, 200, 'JPEG', 100, 90)
//             .then(({ uri }) => resolve({ uri }))
//             .catch(err => reject(err));
//         } else {
//           ImageResizer.createResizedImage(response.uri, 356, 200, 'JPEG', 100)
//             .then(({ uri }) => resolve({ uri }))
//             .catch(err => reject(err));
//         }
//       }
//     });
//   });

// export const cameraRoll = () =>
//   new Promise((resolve, reject) => {
//     CameraRoll.getPhotos({
//       first: 100,
//       assetType: 'Photos',
//     })
//       .then(r => {
//         const photos = [];
//         r.edges.forEach((e, index, array) => {
//           // ImageResizer.createResizedImage(e.node.image.uri, 356, 200, 'JPEG', 100)
//           // .then(({ uri }) => {
//           //   photos. navigate({
//           //     uri,
//           //     fileName: e.node.image.filename,
//           //     checked: false,
//           //   });
//           //   if (index >= array.length - 1) resolve(photos);
//           // })
//           // .catch(err => reject(err));

//           //TODO: Don't resize images here as there are so much work to do, the UI couldn't render properly
//           photos.navigate({
//             uri: e.node.image.uri,
//             fileName: e.node.image.filename,
//             checked: false,
//           });
//           if (index >= array.length - 1) {
//             resolve(photos);
//           }
//         });
//       })
//       .catch(err => reject(err));
//   });
