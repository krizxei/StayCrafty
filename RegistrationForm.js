import React, { useState } from 'react';
import './JhoferDesign.css';

// Create a mapping of card names to images
const imageMap = {
  //A Champions
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
  //B Champions
  'Bard': require('./Card Pictures/Bard.png'),
  'Belveth': require('./Card Pictures/Belveth.png'),
  'Blitzcrank': require('./Card Pictures/Blitzcrank.png'),
  'Brand': require('./Card Pictures/Brand.png'),
  'Braum': require('./Card Pictures/Braum.png'),
  'Briar': require('./Card Pictures/Briar.png'),
  //C Champions
  'Caitlyn': require('./Card Pictures/Caitlyn.png'),
  'Camille': require('./Card Pictures/Camille.png'),
  'Cassiopeia': require('./Card Pictures/Cassiopeia.png'),
  'Chogath': require('./Card Pictures/Chogath.png'),
  'Corki': require('./Card Pictures/Corki.png'),
  //D Champions
  'Darius': require('./Card Pictures/Darius.png'),
  'Diana': require('./Card Pictures/Diana.png'),
  'Dr. Mundo': require('./Card Pictures/Dr. Mundo.png'),
  'Draven': require('./Card Pictures/Draven.png'),
  //E Champions
  'Ekko': require('./Card Pictures/Ekko.png'),
  'Elise': require('./Card Pictures/Elise.png'),
  'Evelynn': require('./Card Pictures/Evelynn.png'),
  'Ezreal': require('./Card Pictures/Ezreal.png'),
  //F Champions
  'Fiddlesticks': require('./Card Pictures/Fiddlesticks.png'),
  'Fiora': require('./Card Pictures/Fiora.png'),
  'Fizz': require('./Card Pictures/Fizz.png'),
};

// Create an array of card data
const cardData = [
  //A Champions
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
  //B Champions
  { id: 14, name: 'Bard' },
  { id: 15, name: 'Belveth' },
  { id: 16, name: 'Blitzcrank' },
  { id: 17, name: 'Brand' },
  { id: 18, name: 'Braum' },
  { id: 19, name: 'Briar' },
  //C Champions
  { id: 20, name: 'Caitlyn' },
  { id: 21, name: 'Camille' },
  { id: 22, name: 'Cassiopeia' },
  { id: 23, name: 'Chogath' },
  { id: 24, name: 'Corki' },
  //D Champions
  { id: 25, name: 'Darius' },
  { id: 26, name: 'Diana' },
  { id: 27, name: 'Dr. Mundo' },
  { id: 28, name: 'Draven' },
  //E Champions
  { id: 29, name: 'Ekko' },
  { id: 30, name: 'Elise' },
  { id: 31, name: 'Evelynn' },
  { id: 32, name: 'Ezreal' },
  //F Champions
  { id: 33, name: 'Fiddlesticks' },
  { id: 34, name: 'Fiora' },
  { id: 35, name: 'Fizz' },
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
      <header>
        <h1 id="MainTitle"> RUNETERRA CARDCRAFT</h1>
      </header>
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
