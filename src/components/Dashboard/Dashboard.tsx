import React from 'react'
import { useAuth } from '../Auth/context/AuthContext';

function Dashboard() {
  const { currentUser, signout } = useAuth();
  return (
    <div>Dashboard
      {currentUser && <button onClick={signout}>Signout</button>}
    </div>
  )
}

export default Dashboard