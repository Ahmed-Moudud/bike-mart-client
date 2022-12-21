import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
    return signInWithPopup(auth, googleProvider);
   }

   const resetPassword =(email) =>{
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
   }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log('user observing');
            setUser(currentUser);
            setLoading(false)
        });
        return () => unsubscribe();
    },[])

    const authInfo = {
        createUser,
        signIn,
        googleSignIn,
        updateUser,
        resetPassword,
        user,
        loading,
        logOut
    }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;