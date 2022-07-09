import  React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase-config'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
  } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd);


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth , (user) => {
        setCurrentUser(user);
        setLoading(false)
      })

      return unsubscribe
    }, [])
    

    const value = {
        currentUser,
        signUp
    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}