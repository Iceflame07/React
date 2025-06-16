import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('client')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!username || !password || !role) {
      setError('Please fill in all fields')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    console.log('Signup data:', { username, password, role })
    setSuccess('Account created successfully! You can now login.')
    setTimeout(() => {
      navigate('/login')
    }, 2000)
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Create an Account</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password (min 6 characters)"
            />
          </div>
          <div className="form-group">
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="client">Client</option>
              <option value="lawyer">Lawyer</option>
              <option value="donor">Donor</option>
            </select>
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <div className="auth-link">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  )
}

export default Signup