import { db } from "../backend";
import { createContext, useContext, useState, useEffect } from "react";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import {
  getUser,
  doesExist,
  userLogOut,
  userLogin,
  userSignup,
} from "../helper-functions";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        if (userData) {
          const userExists = await doesExist(userData.email);
          if (!userExists) {
            const userRef = collection(db, "users");
            await setDoc(doc(userRef, userData.uid), {
              uid: userData.uid,
              displayName: userData.displayName,
              email: userData.email,
              timestamp: serverTimestamp(),
              score: [],
            });
            setCurrentUser({
              uid: userData.uid,
              displayName: userData.displayName,
              email: userData.email,
              timestamp: serverTimestamp(),
              score: [],
            });
          } else {
            await getUser(userData.uid, setCurrentUser);
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line
  }, [userData]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userSignup,
        userLogOut,
        userLogin,
        setCurrentUser,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
