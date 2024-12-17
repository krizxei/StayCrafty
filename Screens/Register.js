import React, { useState } from 'react';
import '../Designs/Register.css';

function Login({ toggleScreen }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password || !username || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password!==confirmPassword){
      setError('Password Mismatch');
      return;
    }
    if (password.length   <8){
      setError('Password must have atleast than 8 Characters');
      return;
    }
    setError('');
    console.log('Logged in with', email, password); 
  };

  return (
    <div className="login-container">
      <header className="banner">
        <h1>Runeterra Cardscraft</h1>
      </header>
      <div className="sidebar">
        <button className="nav-btn" onClick={toggleScreen}>Login</button>
        <button className="fake-btn">Register</button>
      </div>
      <div className="login-form-container">
        <h3>REGISTER Screen</h3>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
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
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}  
              placeholder="Confirm your password"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="reg-btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
