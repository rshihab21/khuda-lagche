import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const AuthProviders = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [success, setSucces] = useState("");
  const [error, setError] = useState("");

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPassWord = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const profileUpdate = () => {
    return updateProfile();
  };
  const userSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createUser,
    userSignIn,
    userSignOut,
    success,
    setSucces,
    error,
    setError,
    resetPassWord,
    profileUpdate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
