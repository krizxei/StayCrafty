import React from 'react';

function Account({ changeScreen }) {
  return (
    <div className="account-container">
      <h2>Welcome to your account</h2>
      <button onClick={() => changeScreen('login')}>Logout</button>
    </div>
  );
}

export default Account;
