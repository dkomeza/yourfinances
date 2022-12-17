import React from 'react'
import { Navigate } from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

export default function PrivateRoute({ children }:{children: any}) {
    const { currentUser } = useAuth();
    return (
        currentUser ? children : <Navigate to={'/login'} />
    )
}