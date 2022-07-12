import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  const signUp = async (email, password, pseudo, age, sexe) => {
    const body = {
      pseudo: pseudo,
      email: email,
      date_of_birth: age,
      sexe: sexe,
      password: password,
    };
    let user = await apiCall(
      "http://localhost:8000/users/create",
      "POST",
      body
    );
    setCurrentUser(user);
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/homepage");
  };

  const fetchUser = async () => {
    return await apiCall(
      `http://localhost:8000/users/${auth.currentUser.uid}`,
      "GET"
    );
  };

  const login = async (email, pwd) => {
    await signInWithEmailAndPassword(auth, email, pwd);
    setCurrentUser(await fetchUser());
    navigate("/homepage");
  };

  const logout = () => {
    signOut(auth);
    setCurrentUser(null);
    navigate("/login");
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  const apiCall = async (url, method = "GET", body, params, options) => {
    if (options === undefined) {
      options = { responseType: "json" };
    } else if (options.responseType === undefined) {
      options.responseType = "json";
    }

    const headers = new Headers();
    const requestInit = { method };
    const urlParams = new URLSearchParams(params);
    if (auth.currentUser) {
      headers.append("authorization", await auth.currentUser.getIdToken());
    }
    if (body !== undefined) {
      requestInit.body = JSON.stringify(body);
      headers.append("content-type", "application/json");
    }
    requestInit.headers = headers;
    const request = new Request(url + urlParams.toString(), requestInit);
    const resp = await fetch(request);
    if (resp.ok) {
      let data;
      if (options.responseType === "json") {
        data = await resp.json();
      } else if (options.responseType === "blob") {
        data = await resp.blob();
      }
      return data;
    } else throw new Error("Error");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && user.uid != (currentUser && currentUser.id)) {
        setCurrentUser(await fetchUser());
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signUp,
    logout,
    resetPassword,
    apiCall,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
