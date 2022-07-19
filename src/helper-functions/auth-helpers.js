import { auth, db } from "../backend";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const userSignup = async (
  e,
  email,
  pass,
  name,
  setUserData,
  navigate,
  notifySuccess,
  notifyError
) => {
  try {
    e.preventDefault();
    const res = await createUserWithEmailAndPassword(auth, email, pass, name);
    updateProfile(auth.currentUser, {
      displayName: name,
    });
    setUserData(res.user);
    notifySuccess();
    navigate("/themes");
  } catch (err) {
    notifyError(err);
  }
};

const userLogOut = async (
  navigate,
  setCurrentUser,
  notifySuccess,
  notifyError
) => {
  try {
    await signOut(auth);
    setCurrentUser(null);
    notifySuccess();
    navigate("/");
  } catch (err) {
    notifyError(err);
  }
};

const userLogin = async (
  e,
  email,
  password,
  setCurrentUser,
  navigate,
  notifySuccess,
  notifyError
) => {
  try {
    e.preventDefault();
    const res = await signInWithEmailAndPassword(auth, email, password);
    getUser(res.user.uid, setCurrentUser);
    notifySuccess();
    navigate("/themes");
  } catch (error) {
    notifyError(error);
  }
};

const getUserDataFromFireStore = async () => {
  try {
    const res = await getDocs(collection(db, "users"));
    return res;
  } catch (error) {
    console.log(error);
  }
};

const doesExist = async (email) => {
  try {
    const querySnapshot = await getUserDataFromFireStore();
    const data = querySnapshot
      ? querySnapshot.docs.map((snap) => snap.data())
      : undefined;
    return data ? data.find((user) => user.email === email) : false;
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (uid, setCurrentUser) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setCurrentUser(docSnap.data());
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  getUser,
  doesExist,
  getUserDataFromFireStore,
  userLogOut,
  userLogin,
  userSignup,
};
