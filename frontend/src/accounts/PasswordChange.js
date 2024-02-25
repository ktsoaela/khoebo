// src/accounts/PasswordChange.js

import React, { useState } from 'react';
import axios from 'axios';

function PasswordChange() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword1, setNewPassword1] = useState('');
  const [newPassword2, setNewPassword2] = useState('');
  const [error, setError] = useState('');

  const handleChangePassword = () => {
    if (newPassword1 !== newPassword2) {
      setError('New passwords do not match.');
      return;
    }

    axios.post('http://localhost:8000/api/password/change/', {
      old_password: oldPassword,
      new_password1: newPassword1,
      new_password2: newPassword2
    })
    .then(response => {
      // Handle successful password change
      console.log(response.data);
    })
    .catch(error => {
      // Handle password change error
      setError('Password change failed. Please try again.');
      console.error('Password change error:', error);
    });
  };

  return (
    <div className='page'>
      <h2>Change Password</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleChangePassword}>
        <div>
          <label htmlFor="oldPassword">Old Password:</label>
          <input type="password" id="oldPassword" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="newPassword1">New Password:</label>
          <input type="password" id="newPassword1" value={newPassword1} onChange={e => setNewPassword1(e.target.value)} />
        </div>
        <div>
          <label htmlFor="newPassword2">Confirm New Password:</label>
          <input type="password" id="newPassword2" value={newPassword2} onChange={e => setNewPassword2(e.target.value)} />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}

export default PasswordChange;
