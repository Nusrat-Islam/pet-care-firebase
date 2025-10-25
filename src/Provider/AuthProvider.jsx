import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase.config';



export const AuthContext = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)
console.log(user)

//for saving data
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=> {
        setUser(currentUser)
        setLoading(false)
    });
    return () => {
        unSubscribe();
    };
},[])

//for register
const register = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
};


//for login
const login = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
};

//google signin
const googleSignin = () => {
    return signInWithPopup (auth, googleProvider)
}

//for Logout
const logOut = () => {
    return signOut(auth)
}

//reset password
const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
}

//update profile
const profileUpdate = (displayName,photoURL) =>{
   
    return updateProfile(auth.currentUser, {
        displayName,
        photoURL
    })
}

const authData={
   
    user,
    setUser,
    register,
    login,
    logOut,
    loading,
    setLoading,
    resetPassword,
    googleSignin,
    profileUpdate,


}
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;