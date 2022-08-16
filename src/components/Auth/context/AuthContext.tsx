import React, { useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, 
    signInWithEmailAndPassword, signOut, GoogleAuthProvider, 
    FacebookAuthProvider, signInWithRedirect } from "firebase/auth";
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
        handleErrorCodes
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

    function googleSignin() {
        return signInWithRedirect(auth, googleProvider);
    }

    function facebookSignin() {
        return signInWithRedirect(auth, facebookProvider);
    }

    function handleErrorCodes(code: string) {
        switch (code) {
            case 'auth/user-not-found':
                return 'User not found';
            case 'auth/wrong-password':
                return 'Wrong password';
            case 'auth/invalid-email':
                return 'Invalid email';
            case 'auth/email-already-in-use':
                return 'Email already in use';
            case 'auth/weak-password':
                return 'Weak password';
            default:
                return 'Unknown error';
        }
    }

    return (
        <AuthContext.Provider value={ value }>
            { !loading && children }
        </AuthContext.Provider>
    )
}
