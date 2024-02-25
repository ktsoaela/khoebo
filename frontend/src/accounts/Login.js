import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    axios.post('http://localhost:8000/accounts/login/', {
      username: username,
      password: password
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      setError('Invalid credentials. Please try again.');
      console.error('Login error:', error);
    });
  };

  return (
    <div className='page'>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        <Link to="/register">Register</Link>
        <Link to="/password-reset">Forgot Password</Link>
      </form>
    </div>
  );
}

export default LoginPage;
