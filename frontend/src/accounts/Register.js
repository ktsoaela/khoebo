// src/accounts/Register.js

import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (password1 !== password2) {
      setError('Passwords do not match.');
      return;
    }

    axios.post('http://localhost:8000/accounts/register/', {
      username: username,
      password1: password1,
      password2: password2
    })
    .then(response => {
      // Handle successful registration
      console.log(response.data);
    })
    .catch(error => {
      // Handle registration error
      setError('Registration failed. Please try again.');
      console.error('Registration error:', error);
    });
  };

  return (
    <div className='page'>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password1">Password:</label>
          <input type="password" id="password1" value={password1} onChange={e => setPassword1(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password2">Confirm Password:</label>
          <input type="password" id="password2" value={password2} onChange={e => setPassword2(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
