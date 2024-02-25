import React from 'react';

const CallToAction = ({ text, onClick }) => {
  return (
    <div className="call-to-action">
        <h1>Let’s build your business together</h1>

        <button className="button">Find Your Plan</button>
        <p>Terms and Conditions Apply</p>
    </div>
  );
};

export default CallToAction;
