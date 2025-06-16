import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!username || !password) {
      setError('Please fill in all fields')
      return
    }

    onLogin('user');
    navigate('/dashboard');
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login to your LegalLift</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Input your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Input your password"
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <div className="auth-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  )
}

export default Login