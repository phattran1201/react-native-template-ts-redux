import { Platform } from 'react-native';
import API from '~services/api';
import { IS_ANDROID } from '../constants/constants';

const createFormData = (photo: string) => {
  const body = new FormData();
  const indexOfDot = photo?.lastIndexOf('.');
  const fileName = photo?.slice(indexOfDot - 20, photo.length);
  let checkImageFile = photo || '';
  if (IS_ANDROID && !photo.includes('file://')) {
    checkImageFile = 'file://' + photo;
  }
  body.append('image', {
    uri: Platform.OS === 'android' ? checkImageFile : checkImageFile.replace('file://', ''),
    name: fileName,
    type: 'image/png',
  });
  return body;
};

export const uploadImage = (listImage: []) => {
  return new Promise((resolve, reject) => {
    if (listImage?.length === 0) {
      resolve([]);
    }
    const requests = listImage?.map((image: string) => {
      if (image?.includes('http')) {
        return image;
      } else {
        const formData = createFormData(image);
        return API.post('/image/upload/1024', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then((res) => {
            console.log('phat: uploadImage -res', res.data.results.object.url);
            return res.data.results.object.url;
          })
          .catch((error) => {
            console.log('phat: uploadImage -> error', error);
            return null;
          });
      }
    });

    Promise.all(requests)
      .then((res) => {
        console.log('phat: list đã upload', res);
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};
