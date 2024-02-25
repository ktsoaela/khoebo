// src/accounts/Logout.js

import React from 'react';
import axios from 'axios';

function Logout() {
  const handleLogout = () => {
    axios.post('http://localhost:8000/accounts/logout/')
      .then(response => {
       
        console.log(response.data);
      })
      .catch(error => {
    
        console.error('Logout error:', error);
      });
  };

  return (
    <div className='page'>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
