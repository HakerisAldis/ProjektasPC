import { firebaseService } from './firebase';
import { COLLECTIONS } from '../constants/collections';

async function login (email, password) {
  const result = await firebaseService.login(email, password);
  return result;
}

async function signOutUser () {
  const result = await firebaseService.signOutUser();
  return result;
}

async function isAdmin (user) {
  if (user !== null) {
    const result = await getById(user.uid);
    return result.isAdmin;
  }
}

async function getUserName (user) {
  if (user !== null) {
    const result = await getById(user.uid);
    return result.name;
  }
}

async function register (email, password, city, name, lastname) {
  const result = await firebaseService.register(email, password, city, name, lastname);
  return result;
}

async function getById (id) {
  const result = await firebaseService.getById(COLLECTIONS.USERS, id);
  return result;
}

export const userService = {
  login,
  signOutUser,
  register,
  getById,
  isAdmin,
  getUserName
};
