import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../Designs/NavigationBar.css";
import Logo from "../Pictures/Logo Zoom.png";
import UserIcon from "../Pictures/People Icon.png";
import CartIcon from "../Pictures/Cart Icon.png";
import axios from 'axios';

const NavigationBar = () => {
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
  const [isAllCategoriesHovered, setAllCategoriesHovered] = useState(false);
  const [isAestheticsHovered, setAestheticsHovered] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [CheatClick, setCheatClick] = useState(0);

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [user, setUser] = useState(null);

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
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Fill-up Fields');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/accounts', { email, password });
  
      if (response.data.success) {
        alert('Successfully Logged In');
        console.log('Email to be saved:', email); // Debugging
        localStorage.setItem('email', email); // Save only email
        closeLoginModal();
        setIsLoggedIn(true);
      } else {
        alert('Login failed: ' + response.data.message);
      }
    } catch (err) {
      alert('Invalid Credentials');
      setPassword('');
      setEmail('');
    }
  };

  const handleCheckout = () => {
      alert(` Receipt Seller: StayCrafty, Buyer: Krizzy - Kriztenlapuz@gmail.com. Items Purchased: 1PC Botanical Pen - ₱10.00, 1PC Lunar Sticker - ₱10.00, 1PC Sakura Stamp Set - ₱10.00, Total: ₱30.00, Status: On Pending`);
  }

  const handleCheatCode = () => {
      if(CheatClick===0){
        setCartItems(prevItems => [...prevItems, "Botanical Pen"]);
      }
      if(CheatClick===1){
        setCartItems(prevItems => [...prevItems, "Lunar Sticker"]);
      }
      if(CheatClick===2){
        setCartItems(prevItems => [...prevItems, "Sakura Stamp"]);
      }
      setCheatClick(CheatClick+1);
  }
  
  
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password || !firstName || !lastName) {
      alert('Please fill in all fields');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
      alert('Password must be at least 8 characters long, contain a letter, and a number');
      return;
    }
  
    try {
      console.log('Sending registration data to server...'); // Debugging line
      const response = await axios.post('http://localhost:5000/api/register', { email, password, firstName, lastName });
      console.log('Server Response:', response); // Debugging
  
      if (response.data.success) {
        alert('Successfully Registered');
        localStorage.setItem('email', email);
        closeCreateAccountModal();
      } else {
        alert('Registration failed: ' + response.data.message);
      }
    } catch (err) {
      console.error('Error during registration:', err); // Debugging line
      alert('Registration failed: Please try again later');
    }
  };
  
  




  
  const handleLogout = () => {
  localStorage.removeItem('email'); // Remove email from localStorage
  setUser(null);
  setEmail('');
  setIsLoggedIn(false);
  navigate('/');
};



  const handleCreateAccount = (email) => {
    // Save the email as the username in localStorage
    localStorage.setItem("username", email); 
    
    // Optionally, you can add other actions related to account creation here.
    
    // Close the modal after account creation
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

  const handleDropdownToggle = () => {
    setDropdownVisible(prevState => !prevState);
  };

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(savedUsers);
  }, []);
  
  const saveUsers = () => {
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  const goToSellerCentre = () => {
    console.log('Before navigation:', { isLoggedIn, email });
    navigate('/seller-centre');
    console.log('After navigation:', { isLoggedIn, email });
  };

  return (
    <div className="NavigationBar">
      <header className="header">
        <div className="logo-container">
          <Link onClick={handleCheatCode}>
            <img src={Logo} alt="Stay Crafty By Krizzy" className="logo" />
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li 
              onMouseEnter={() => setAllCategoriesHovered(true)} 
              onMouseLeave={() => setAllCategoriesHovered(false)}
            >
              <Link to="/categories">All Categories</Link>
              {isAllCategoriesHovered && (
                <ul className="dropdown">
                  <li><Link to="/journals">Journals</Link></li>
                  <li><Link to="/pen">Pen</Link></li>
                  <li><Link to="/tote-bags">Tote Bags</Link></li>
                  <li><Link to="/pencil-case">Pencil Case/Pouch</Link></li>
                  <li><Link to="/calendars">Calendars</Link></li>
                  <li><Link to="/bundle">Bundle</Link></li>
                </ul>
              )}
            </li>
            <li className="nav-item"><Link to="/new"><span className="bubble new">New</span>Newest</Link></li>
            <li className="nav-item"><Link to="/bestsellers"><span className="bubble trending">Trending</span>Best Sellers✶</Link></li>
            <li 
              onMouseEnter={() => setAestheticsHovered(true)} 
              onMouseLeave={() => setAestheticsHovered(false)}
            >
              <Link to="/aesthetic">Choose your Aesthetic✦</Link>
              {isAestheticsHovered && (
                <ul className="dropdown">
                  <li><Link to="/sakura">Sakura💮</Link></li>
                  <li><Link to="/lunar">Lunar🌙</Link></li>
                  <li><Link to="/sol-and-luna">Sol and Luna☀️🌙</Link></li>
                  <li><Link to="/tsuki">Tsuki🌕</Link></li>
                  <li><Link to="/botanical">Botanical🌿</Link></li>
                  <li><Link to="/vintage">Vintage📜</Link></li>
                  <li><Link to="/zodiac">Zodiac🏹</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <div className="header-icons">
        <div className="search-bar-container">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        {isLoggedIn ? (
          <div className="user-info">
            <span className="user-name">
              Hello, Krizzy!
            </span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="icon user-icon" onClick={openLoginModal}>
            <img src={UserIcon} alt="User Icon" className="icon-image" />
          </div>
        )}


        <div className="icon cart-icon" onClick={openCart}>
          <img src={CartIcon} alt="Cart Icon" className="icon-image" />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </div>
      </div>
    </header>
      
      {isCartOpen && (
        <div className="cart-popout">
          <div className="cart-header">
            <span>MY CART</span>
            <button className="close-btn" onClick={closeCart}>x</button>
          </div>
          <div className="cart-items-container">
            {cartItems.length === 0 ? (
              <div className="cart-item"><p>No items in your cart yet!</p></div>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <p>{item}</p>  {/* Display item name */}
                </div>
              ))
            )}
          </div>
          <div className="cart-footer">
            <div className="subtotal">
              <span>Subtotal ({cartItems.length} items)</span>
              <span>₱{cartItems.length * 10}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>CHECKOUT</button>
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
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Remember Me</label>

              {warning && <div style={{ color: 'red' }}>{warning}</div>}
              <button onClick={() => handleLogin(email)}>Login</button> {/* Pass email to handleLogin */}
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
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button
                  onClick={handleRegisterSubmit}
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

export default NavigationBar;