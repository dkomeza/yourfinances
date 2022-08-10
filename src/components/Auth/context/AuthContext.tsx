import React, { useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/Firebase"

interface AuthUser {
    uid: string;
}

export const AuthContext = React.createContext({});

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
    };

    function signup(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function signin(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    return (
        <AuthContext.Provider value={ value }>
            { !loading && children }
        </AuthContext.Provider>
    )
}
