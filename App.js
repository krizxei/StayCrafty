import React, { useState } from 'react';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Account from './Screens/Account';

function App() {
  const [isLogin, setIsLogin] = useState(true); // true for login screen, false for register screen

  // Function to toggle between Login and Register screens
  const toggleScreen = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <Login toggleScreen={toggleScreen} /> : <Register toggleScreen={toggleScreen} />}
      {isLogin ? <Login toggleScreen={toggleScreen} /> : <Account changeScreen={toggleScreen} />}
    </div>
  );
}

export default App;
