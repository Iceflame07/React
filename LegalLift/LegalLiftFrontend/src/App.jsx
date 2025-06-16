import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Dashboard from './components/Dashboard.jsx'
import UserProfile from './components/UserProfile.jsx'
import './index.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState(null)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        try {
          const user = JSON.parse(savedUser);
          setIsAuthenticated(true);
          setUserRole(user.role);
        } catch (error) {
          console.error('Failed to parse user data', error);
          localStorage.removeItem('user');
        }
      }
      setIsCheckingAuth(false);
    };

    checkAuth();
  }, []);

  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
    localStorage.setItem('user', JSON.stringify({ role }));
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem('user');
  }

  if (isCheckingAuth) {
    return <div>Loading...</div>;
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
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Signup />} 
        />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard role={userRole} onLogout={handleLogout} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/profile" 
          element={isAuthenticated ? <UserProfile onLogout={handleLogout} /> : <Navigate to="/login" />} 
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