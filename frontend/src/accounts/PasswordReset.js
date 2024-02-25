// src/accounts/PasswordReset.js

import React, { useState } from 'react';
import axios from 'axios';

function PasswordReset() {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordReset = () => {
    axios.post('http://localhost:8000/api/password/reset/', {
      email: email
    })
    .then(response => {
      setSuccessMessage('Password reset email sent. Please check your email.');
      setError('');
      setEmail('');
      console.log(response.data);
    })
    .catch(error => {
      setError('Password reset failed. Please try again.');
      setSuccessMessage('');
      console.error('Password reset error:', error);
    });
  };

  return (
    <div className='page'>
      <h2>Reset Password</h2>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handlePasswordReset}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default PasswordReset;
