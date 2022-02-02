import { FIREBASE_FILE_STORAGE_URL } from './config';

function getUrl (imageName) {
  const url = `${FIREBASE_FILE_STORAGE_URL}${imageName}?alt=media`;

  return url;
}

export const imageService = {
  getUrl
};
