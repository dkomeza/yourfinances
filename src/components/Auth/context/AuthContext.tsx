import React, { useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, 
    signInWithEmailAndPassword, signOut, GoogleAuthProvider, 
    FacebookAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth } from "../../../firebase/Firebase"

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

interface AuthUser {
    uid: string;
}

export const AuthContext = React.createContext<any | null>(null);;

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}:{children: any}) {
    const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = { 
        currentUser,
        signup,
        signin,
        signout,
        googleSignin,
        facebookSignin,
    };

    function signup(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function signin(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signout() {
        return signOut(auth);
    }

    function googleSignin(width: number) {
        if (width < 768) {
            return signInWithRedirect(auth, googleProvider);
        } else {
        return signInWithPopup(auth, googleProvider);
        }
    }

    function facebookSignin(width: number) {
        if (width < 768) {
            return signInWithRedirect(auth, facebookProvider);
        } else {
        return signInWithPopup(auth, facebookProvider);
        }
    }

    return (
        <AuthContext.Provider value={ value }>
            { !loading && children }
        </AuthContext.Provider>
    )
}
