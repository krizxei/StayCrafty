import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Designs/Homepage.css";
import Logo from "../Pictures/Logo Zoom.png";
import UserIcon from "../Pictures/People Icon.png";
import CartIcon from "../Pictures/Cart Icon.png";
import HomepageBanner from "../Pictures/Banner1.png"; 

const Homepage = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isCreateAccountModalOpen, setCreateAccountModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState(""); 
  const [users, setUsers] = useState([]); 
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [forgotPasswordName, setForgotPasswordName] = useState("");
  const [forgotPasswordLastName, setForgotPasswordLastName] = useState("");
  const [forgotPasswordBirthday, setForgotPasswordBirthday] = useState("");
  const [newPassword, setNewPassword] = useState(""); 

  
  const [isCartOpen, setCartOpen] = useState(false); 
  const [cartItems, setCartItems] = useState([]); 

  
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openCreateAccountModal = () => setCreateAccountModalOpen(true);
  const closeCreateAccountModal = () => setCreateAccountModalOpen(false);

  const openForgotPasswordModal = () => setForgotPasswordModalOpen(true);
  const closeForgotPasswordModal = () => setForgotPasswordModalOpen(false);

  const openCart = () => setCartOpen(true); 
  const closeCart = () => setCartOpen(false); 

  const handleLogin = () => {
    if (!email || !password) {
      setWarning("Input first!");
      return;
    }
    if (!validateEmail(email)) {
      setWarning("Please enter a valid email!");
      return;
    }
    if (password.length > 8) {
      setWarning("Password should be at most 8 characters");
      return;
    }

    
    const user = users.find((user) => user.email === email);
    if (!user) {
      setWarning("No account registered with this email. Please create an account first.");
      return;
    }

    if (user.password !== password) {
      setWarning("Wrong password! Please try again.");
      return;
    }

    
    setUserName(user.firstName);
    closeLoginModal();
    setWarning(""); 
  };

  const handleCreateAccount = (firstName, lastName, email, password) => {
    setUsers([
      ...users,
      { firstName, lastName, email, password },
    ]);
    setUserName(firstName);
    closeCreateAccountModal();
  };

  const handleForgotPassword = () => {
    const user = users.find((user) => user.email === forgotPasswordEmail);
    if (!user) {
      setWarning("No account found with this email.");
      return;
    }

    if (user.firstName === forgotPasswordName && user.lastName === forgotPasswordLastName) {
      
      setWarning("");
      setNewPassword(""); 

      return; 
    } else {
      setWarning("Incorrect name or details. Please try again.");
    }
  };

  const handleNewPassword = () => {
    const user = users.find((user) => user.email === forgotPasswordEmail);
    if (user && newPassword) {
      user.password = newPassword;
      alert("Your password has been updated!");
      setNewPassword(""); 
      closeForgotPasswordModal(); 
    } else {
      setWarning("Please enter a new password.");
    }
  };

  return (
    <div className="homepage">
    
      <header className="header">
        <div className="logo-container">
          <img src={Logo} alt="Stay Crafty By Krizzy" className="logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/categories">All Categories</Link></li>
            <li><Link to="/bestsellers">Best Sellers</Link></li>
            <li><Link to="/newest">Newest</Link></li>
            <li><Link to="/stock">Back in Stock!</Link></li>
            <li><Link to="/aesthetic">Choose your Aesthetic</Link></li>
          </ul>
        </nav>
        <div className="header-icons">
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
            />
          </div>
          {userName && <span className="user-name">Hello, {userName}!</span>}
          <div className="icon user-icon" onClick={openLoginModal}>
            <img src={UserIcon} alt="User Icon" className="icon-image" />
          </div>
          <div className="icon cart-icon" onClick={openCart}>
            <img src={CartIcon} alt="Cart Icon" className="icon-image" />
          </div>
        </div>
      </header>

      {/* Banner Image */}
      <div className="banner-container">
        <img src={HomepageBanner} alt="Homepage Banner" className="banner-image" />
      </div>

      {isCartOpen && (
        <div className="cart-popout">
          <div className="cart-header">
            <span>MY CART</span>
            <button className="close-btn" onClick={closeCart}>x</button>
          </div>
          <div className="cart-items-container">
            <div className="cart-item">
              <p>No items in your cart yet!</p>
            </div>
          </div>
          <div className="cart-footer">
            <div className="subtotal">
              <span>Subtotal (1 item)</span>
              <span>₱0.00</span>
            </div>
            <button className="checkout-btn">CHECKOUT</button>
          </div>
        </div>
      )}

      {/* Login, Create Account, and Forgot Password Modals */}
      {isLoginModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-logo-container">
              <img src={Logo} alt="Logo" className="modal-logo" />
            </div>
            <h2>Login to Your Account</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {warning && <div style={{ color: 'red' }}>{warning}</div>}
            <button onClick={handleLogin}>Login</button>
            <button onClick={openForgotPasswordModal}>Forgot Password?</button>
            <p>New to our shop?</p>
            <button onClick={openCreateAccountModal}>Create an Account</button>
            <button onClick={closeLoginModal}>Close</button>
          </div>
        </div>
      )}

      {isCreateAccountModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create an Account</h2>
            <input type="text" placeholder="First Name" id="firstName" />
            <input type="text" placeholder="Last Name" id="lastName" />
            <input type="email" placeholder="Email" id="emailCreate" />
            <input type="password" placeholder="Password" id="passwordCreate" />
            <button
              onClick={() => {
                const firstName = document.getElementById('firstName').value;
                const lastName = document.getElementById('lastName').value;
                const emailCreate = document.getElementById('emailCreate').value;
                const passwordCreate = document.getElementById('passwordCreate').value;
                handleCreateAccount(firstName, lastName, emailCreate, passwordCreate);
              }}
            >
              Create Account
            </button>
            <button onClick={closeCreateAccountModal}>Close</button>
          </div>
        </div>
      )}

      {isForgotPasswordModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Forgot Password</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={forgotPasswordEmail}
              onChange={(e) => setForgotPasswordEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your first name"
              value={forgotPasswordName}
              onChange={(e) => setForgotPasswordName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your last name"
              value={forgotPasswordLastName}
              onChange={(e) => setForgotPasswordLastName(e.target.value)}
            />
            <button onClick={handleForgotPassword}>Submit</button>
            <button onClick={closeForgotPasswordModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;