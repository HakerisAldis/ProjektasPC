import { COLLECTIONS } from '../constants/collections';
import { firebaseService } from './firebase';

async function getAll () {
  const result = await firebaseService.get(
    COLLECTIONS.TRACKS
  );

  return result;
}

async function update (id, field, value) {
  const result = await firebaseService.update(COLLECTIONS.TRACKS, id, field, value);
  return result;
}

export const trackService = {
  getAll,
  update
};
