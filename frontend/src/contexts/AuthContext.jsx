import  React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase-config'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signOut
  } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  fetch("http://localhost:8000/users/")        
  // .then((response) => response.json())
  // .then((response) => console.log(response))

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd);

    const signUpBack = (email, pseudo, age, sexe) => {
      console.log('test');
      const body = {"pseudo": pseudo, "email": email, "date_of_birth": age, "sexe": sexe};
      fetch("http://localhost:8000/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      setCurrentUser(body);
    };

    const login = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);

    const loginBack = (email, pwd) => {
      fetch(`http://localhost:8000/users/get/${email}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => response.json())
      .then((response) => console.log(response))
      signInWithEmailAndPassword(auth, email, pwd)
    }

    const logout = () => signOut(auth);

    const resetPassword = (email) => sendPasswordResetEmail(auth, email);

    useEffect(() => {

      const unsubscribe = onAuthStateChanged(auth , (user) => {
        setCurrentUser(user);
        setLoading(false);
      })

      return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        loginBack,
        signUp,
        signUpBack,
        logout,
        resetPassword
    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
