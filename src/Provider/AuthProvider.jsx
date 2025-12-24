import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [roleLoading, setRoleLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [userStatus, setUserStatus] = useState("");

  const registerWithEmailPassword = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const handleGoogleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!user) return;
    axios
      .get(`https://backend11-two.vercel.app/users/role/${user.email}`)
      .then((res) => {
        setRole(res.data.role);
        setUserStatus(res.data.status);
        setRoleLoading(false);
      });
  }, [user]);

  console.log(role);

  const authData = {
    registerWithEmailPassword,
    setUser,
    user,
    handleGoogleSignin,
    loading,
    role,
    roleLoading,
    userStatus,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
