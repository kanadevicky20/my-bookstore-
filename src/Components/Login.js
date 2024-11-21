import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Styles/Login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Simple login check (replace with actual auth logic)
    if (username === 'vicky' && password === 'pass') {
      localStorage.setItem('isLogin', 'true'); // Save the login state in localStorage
      navigate('/admin'); // Navigate to the Admin page
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className='login-page'>
      <h2 className='login-title'>Login Page</h2>
      <form onSubmit={handleLogin} className='login-form'>
        <div>
          <label>Username:</label>
          <input
          login-input-group
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter username"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
          login-input-group
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
          />
          <div>
            <input
            show-password-container
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
            />
            <label> Show Password</label>
          </div>
        </div>
        {error && <p className='error-message'>{error}</p>}
        <button type="submit" className='login-button'>Login</button>
      </form>
    </div>
  );
}

export default Login;
