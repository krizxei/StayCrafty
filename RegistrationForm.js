import React, { useState } from 'react';
import './JhoferDesign.css';

// Create a mapping of card names to images
const imageMap = {
  'Aatrox': require('./Card Pictures/Aatrox.png'),
  'Ahri': require('./Card Pictures/Ahri.png'),
  'Akali': require('./Card Pictures/Akali.png'),
  'Akshan' : require('./Card Pictures/Akshan.png'),
  'Alistar': require('./Card Pictures/Alistar.png'),
  'Amumu': require('./Card Pictures/Amumu.png'),
  'Anivia': require('./Card Pictures/Anivia.png'),
  'Annie': require('./Card Pictures/Annie.png'),
  'Aphelios': require('./Card Pictures/Aphelios.png'),
  'Ashe': require('./Card Pictures/Ashe.png'),
  'Aurelion Sol': require('./Card Pictures/Aurelion Sol.png'),
  'Aurora': require('./Card Pictures/Aurora.png'),
  'Azir': require('./Card Pictures/Azir.png'),
  // Add more cards as needed
};

// Create an array of card data
const cardData = [
  { id: 1, name: 'Aatrox' },
  { id: 2, name: 'Ahri' },
  { id: 3, name: 'Akali' },
  { id: 4, name: 'Akshan' },
  { id: 5, name: 'Alistar' },
  { id: 6, name: 'Amumu' },
  { id: 7, name: 'Anivia' },
  { id: 8, name: 'Annie' },
  { id: 9, name: 'Aphelios' },
  { id: 10, name: 'Ashe' },
  { id: 11, name: 'Aurelion Sol' },
  { id: 12, name: 'Aurora' },
  { id: 13, name: 'Azir' },
  // Continue adding cards...
];

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [randomCard, setRandomCard] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Simulate successful registration
    setTimeout(() => {
      setIsRegistered(true); // Navigate to account portal after successful registration
    }, 2000); // Adjust delay as needed
  };

  const handleLogout = () => {
    setIsRegistered(false);
    setName('');
    setEmail('');
    setPassword('');
    setSubmitted(false);
    setRandomCard(null); // Reset random card
  };

  const generateRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    const selectedCard = cardData[randomIndex];
    // Set random card with its corresponding image
    setRandomCard({ ...selectedCard, image: imageMap[selectedCard.name] });
  };

  return (
    <div>
      {!submitted && !isRegistered ? (
        <form onSubmit={handleSubmit}>
          <h2>Registration Form</h2>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Register</button>
        </form>
      ) : submitted && !isRegistered ? (
        <form>
          <h3>Registration Successful!</h3>
          <p>Redirecting to your account portal...</p>
        </form>
      ) : (
        <form>
          <h3>{name}</h3>
          <button onClick={handleLogout}>Logout</button>
          <button type="button" onClick={generateRandomCard}>Generate Random Card</button>
          {randomCard && (
            <div className="card">
              <h4>{randomCard.name}</h4>
              <img src={randomCard.image} alt={randomCard.name} loading="lazy" />
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default RegistrationForm;
