import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./style.scss"
import Sidebar from './Sidebar/Sidebar';

import Dashboard from './Dashboard/Dashboard';

import { useAuth } from '../Auth/context/AuthContext';

function InnerRouter() {
    const { currentUser, signout } = useAuth();
    return (
        <div className='root'>
            <Sidebar children={{signout: signout, user: currentUser}} />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/statistics" element={<div>Statistics</div>} />
                <Route path="/investments" element={<div>Investments</div>} />
                <Route path="/loans" element={<div>Loans</div>} />
                <Route path="/budget" element={<div>Budget</div>} />
                <Route path="/settings" element={<div>Settings</div>} />
            </Routes>
        </div>
    )
}

export default InnerRouter