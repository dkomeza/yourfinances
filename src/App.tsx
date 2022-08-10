import React from 'react';
import { AuthProvider } from './components/Auth/context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <header className="App-header">
        </header>
      </AuthProvider>
    </div>
  );
}

export default App;
