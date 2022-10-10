import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./style.scss"
import Sidebar from './Sidebar/Sidebar';

import { useAuth } from '../Auth/context/AuthContext';

function InnerRouter() {
    const { currentUser, signout } = useAuth();
    return (
        <main>
            <Sidebar children={signout} />
            <Routes>
                <Route path="/" element={<div>Dashboard</div>} />
                <Route path="/statistics" element={<div>Statistics</div>} />
                <Route path="/investments" element={<div>Investments</div>} />
                <Route path="/loans" element={<div>Loans</div>} />
                <Route path="/budget" element={<div>Budget</div>} />
                <Route path="/settings" element={<div>Settings</div>} />
            </Routes>
        </main>
    )
}

export default InnerRouter