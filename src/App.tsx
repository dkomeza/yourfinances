import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/Auth/context/AuthContext';
import PrivateRoute from './components/Auth/components/PrivateRoute';

import Signup from './components/Auth/components/Signup';
import Login from './components/Auth/components/Login';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<PrivateRoute> <Dashboard /> </PrivateRoute>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
