import React, { useState } from 'react';
import '../Designs/Login.css';

function Login({ toggleScreen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }
    setError('');
    console.log('Logged in with', email, password); 
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <header className="banner">
        <h1>Runeterra Cardscraft</h1>
      </header>
      <div className="sidebar">
        <button className="fake-btn" disabled>Login</button>
        <button className="nav-btn" onClick={toggleScreen}>Register</button>
      </div>
      <div className="login-form-container">
        <h3>LOGIN Screen</h3>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
