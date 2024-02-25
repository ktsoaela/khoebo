import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Pages
import HeroSection from '../snippets/Hero';

function Training() {
  const [message, setMessage] = useState('');


  useEffect(() => {
    axios.get('http://localhost:8000/api/hello-world/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='page container'>
      <HeroSection />
      <h1>Hello, World!</h1>
      <p>{message}</p>



    </div>
  );
}

export default Training;