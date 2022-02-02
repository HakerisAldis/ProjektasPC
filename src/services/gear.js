import { firebaseService } from './firebase';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { COLLECTIONS } from '../constants/collections';

async function getAll (collection) {
  const result = await firebaseService.get(
    collection
  );

  return result;
}

async function addSnowboard (name, length, flex, profile, image) {
  const database = getFirestore();
  const docRef = await addDoc(collection(database, COLLECTIONS.SNOWBOARDS), {
    name: name,
    length: length,
    flex: flex,
    profile: profile,
    image: image.name
  });
  const imageUpload = await firebaseService.imageUpload(image);

  return (docRef, imageUpload);
}

async function addSkis (name, length, profile, image) {
  const database = getFirestore();
  const docRef = await addDoc(collection(database, COLLECTIONS.SKIS), {
    name: name,
    length: length,
    profile: profile,
    image: image.name
  });
  const imageUpload = await firebaseService.imageUpload(image);

  return (docRef, imageUpload);
}

async function addHelmet (name, size, image) {
  const database = getFirestore();
  const docRef = await addDoc(collection(database, COLLECTIONS.HELMETS), {
    name: name,
    size: size,
    image: image.name
  });
  const imageUpload = await firebaseService.imageUpload(image);

  return (docRef, imageUpload);
}

async function addSnowboardBoots (name, size, flex, image) {
  const database = getFirestore();
  const docRef = await addDoc(collection(database, COLLECTIONS.SNOWBOARDBOOTS), {
    name: name,
    size: size,
    flex: flex,
    image: image.name
  });
  const imageUpload = await firebaseService.imageUpload(image);

  return (docRef, imageUpload);
}

async function addSkiBoots (name, size, flex, image) {
  const database = getFirestore();
  const docRef = await addDoc(collection(database, COLLECTIONS.SKIBOOTS), {
    name: name,
    size: size,
    flex: flex,
    image: image.name
  });
  const imageUpload = await firebaseService.imageUpload(image);

  return (docRef, imageUpload);
}

export const gearService = {
  getAll,
  addSnowboard,
  addSkis,
  addHelmet,
  addSnowboardBoots,
  addSkiBoots
};
