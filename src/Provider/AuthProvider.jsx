import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../Components/firebase.config';
export const AuthContext = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


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

//for Logout
const logOut = () => {
    return signOut(auth)
}

const authData={

    user,
    setUser,
    register,
    login,
    logOut,
    loading,
    setLoading,
}
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;