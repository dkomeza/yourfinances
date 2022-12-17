import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@Auth/context/AuthContext";
import Login from "@Auth/components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
