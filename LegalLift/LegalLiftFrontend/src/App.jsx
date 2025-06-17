import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import './index.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState(null)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setIsAuthenticated(true);
      setUserRole(user.role);
      setUserData(user);
    }
    setIsCheckingAuth(false);
  }, []);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUserRole(user.role);
    setUserData(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setUserData(null);
    localStorage.removeItem('user');
  }

  if (isCheckingAuth) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} 
        />
        <Route 
          path="/signup" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Signup onLogin={handleLogin} />} 
        />
        <Route 
          path="/dashboard/*" 
          element={
            isAuthenticated ? (
              <Dashboard 
                role={userRole} 
                userData={userData} 
                onLogout={handleLogout} 
              />
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  )
}

export default App