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
  //G Champions
  'Galio': require('./Card Pictures/Galio.png'),
  'Gangplank': require('./Card Pictures/Gangplank.png'),
  'Garen': require('./Card Pictures/Garen.png'),
  'Gnar': require('./Card Pictures/Gnar.png'),
  'Gragas': require('./Card Pictures/Gragas.png'),
  'Graves': require('./Card Pictures/Graves.png'),
  'Gwen': require('./Card Pictures/Gwen.png'),
  //H Champions
  'Hecarim': require('./Card Pictures/Hecarim.png'),
  'Heimerdinger': require('./Card Pictures/Heimerdinger.png'),
  'Hwei': require('./Card Pictures/Hwei.png'),
  //I Champions
  'Illaoi': require('./Card Pictures/Illaoi.png'),
  'Irelia': require('./Card Pictures/Irelia.png'),
  'Ivern': require('./Card Pictures/Ivern.png'),
  //J Champions
  'Janna': require('./Card Pictures/Janna.png'),
  'Jarvan IV': require('./Card Pictures/Jarvan IV.png'),
  'Jax': require('./Card Pictures/Jax.png'),
  'Jayce': require('./Card Pictures/Jayce.png'),
  'Jhin': require('./Card Pictures/Jhin.png'),
  'Jinx': require('./Card Pictures/Jinx.png'),
  //K Champions
  'KaiSa': require('./Card Pictures/KaiSa.png'),
  'Kalista': require('./Card Pictures/Kalista.png'),
  'Karma': require('./Card Pictures/Karma.png'),
  'Karthus' : require('./Card Pictures/Karthus.png'),
  'Kassadin': require('./Card Pictures/Kassadin.png'),
  'Katarina': require('./Card Pictures/Katarina.png'),
  'Kayle': require('./Card Pictures/Kayle.png'),
  'Kayn': require('./Card Pictures/Kayn.png'),
  'Kennen': require('./Card Pictures/Kennen.png'),
  'Khazix': require('./Card Pictures/Khazix.png'),
  'Kindred': require('./Card Pictures/Kindred.png'),
  'Kled': require('./Card Pictures/Kled.png'),
  'Kogmaw': require('./Card Pictures/Kogmaw.png'),
  'KSante': require('./Card Pictures/KSante.png'),
  //L Champions
  'LeBlanc': require('./Card Pictures/LeBlanc.png'),
  'Lee Sin': require('./Card Pictures/Lee Sin.png'),
  'Leona': require('./Card Pictures/Leona.png'),
  'Lillia': require('./Card Pictures/Lillia.png'),
  'Lissandra': require('./Card Pictures/Lissandra.png'),
  'Lucian': require('./Card Pictures/Lucian.png'),
  'Lulu': require('./Card Pictures/Lulu.png'),
  'Lux': require('./Card Pictures/Lux.png'),
  //M Champions
  'Malphite': require('./Card Pictures/Malphite.png'),
  'Malzahar': require('./Card Pictures/Malzahar.png'),
  'Maokai': require('./Card Pictures/Maokai.png'),
  'Master Yi': require('./Card Pictures/Master Yi.png'),
  'Milio': require('./Card Pictures/Milio.png'),
  'Miss Fortune': require('./Card Pictures/Miss Fortune.png'),
  'Mordekaiser': require('./Card Pictures/Mordekaiser.png'),
  'Morgana': require('./Card Pictures/Morgana.png'),
  //N Champions
  'Naafiri': require('./Card Pictures/Naafiri.png'),
  'Nami': require('./Card Pictures/Nami.png'),
  'Nasus': require('./Card Pictures/Nasus.png'),
  'Nautilus': require('./Card Pictures/Nautilus.png'),
  'Neeko': require('./Card Pictures/Neeko.png'),
  'Nidalee': require('./Card Pictures/Nidalee.png'),
  'Nilah': require('./Card Pictures/Nilah.png'),
  'Nocturne': require('./Card Pictures/Nocturne.png'),
  'Nunu&Willump': require('./Card Pictures/Nunu & Willump.png'),
  //O Champions
  'Olaf': require('./Card Pictures/Olaf.png'),
  'Orianna': require('./Card Pictures/Orianna.png'),
  'Ornn': require('./Card Pictures/Ornn.png'),
  //P Champions
  'Pantheon': require('./Card Pictures/Pantheon.png'),
  'Poppy': require('./Card Pictures/Poppy.png'),
  'Pyke': require('./Card Pictures/Pyke.png'),
  //Q Champions
  'Qiyana': require('./Card Pictures/Qiyana.png'),
  'Quinn': require('./Card Pictures/Quinn.png'),
  //R Champions
  'Rakan': require('./Card Pictures/Rakan.png'),
  'Rammus': require('./Card Pictures/Rammus.png'),
  'RekSai': require('./Card Pictures/RekSai.png'),
  'Rell': require('./Card Pictures/Rell.png'),
  'Renata Glasc': require('./Card Pictures/Renata Glasc.png'),
  'Renekton': require('./Card Pictures/Renekton.png'),
  'Rengar': require('./Card Pictures/Rengar.png'),
  'Riven': require('./Card Pictures/Riven.png'),
  'Rumble': require('./Card Pictures/Rumble.png'),
  'Ryze': require('./Card Pictures/Ryze.png'),
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
  //G Champions
  { id: 36, name: 'Galio' },
  { id: 37, name: 'Gangplank' },
  { id: 38, name: 'Garen' },
  { id: 39, name: 'Gnar' },
  { id: 40, name: 'Gragas' },
  { id: 41, name: 'Graves' },
  { id: 42, name: 'Gwen' },
  //H Champions
  { id: 43, name: 'Hecarim' },
  { id: 44, name: 'Heimerdinger' },
  { id: 45, name: 'Hwei' },
  //I Champions
  { id: 46, name: 'Illaoi' },
  { id: 47, name: 'Irelia' },
  { id: 48, name: 'Ivern' },
  //J Champions
  { id: 49, name: 'Janna' },
  { id: 50, name: 'Jarvan IV' },
  { id: 51, name: 'Jax' },
  { id: 52, name: 'Jayce' },
  { id: 53, name: 'Jhin' },
  { id: 54, name: 'Jinx' },
  //K Champions
  { id: 55, name: 'KaiSa' },
  { id: 56, name: 'Kalista' },
  { id: 57, name: 'Karma' },
  { id: 58, name: 'Karthus' },
  { id: 59, name: 'Kassadin' },
  { id: 60, name: 'Katarina' },
  { id: 61, name: 'Kayle' },
  { id: 62, name: 'Kayn' },
  { id: 63, name: 'Kennen' },
  { id: 64, name: 'Khazix' },
  { id: 65, name: 'Kindred' },
  { id: 66, name: 'Kled' },
  { id: 67, name: 'Kogmaw' },
  { id: 68, name: 'KSante' },
  //L Champions
  { id: 69, name: 'LeBlanc' },
  { id: 70, name: 'Lee Sin' },
  { id: 71, name: 'Leona' },
  { id: 72, name: 'Lillia' },
  { id: 73, name: 'Lissandra' },
  { id: 74, name: 'Lucian' },
  { id: 75, name: 'Lulu' },
  { id: 76, name: 'Lux' },
  //M Champions
  { id: 77, name: 'Malphite' },
  { id: 78, name: 'Malzahar' },
  { id: 79, name: 'Maokai' },
  { id: 80, name: 'Master Yi' },
  { id: 81, name: 'Milio' },
  { id: 82, name: 'Miss Fortune' },
  { id: 83, name: 'Mordekaiser' },
  { id: 84, name: 'Morgana' },
  //N Champions
  { id: 85, name: 'Naafiri' },
  { id: 86, name: 'Nami' },
  { id: 87, name: 'Nasus' },
  { id: 88, name: 'Nautilus' },
  { id: 89, name: 'Neeko' },
  { id: 90, name: 'Nidalee' },
  { id: 91, name: 'Nilah' },
  { id: 92, name: 'Nocturne' },
  { id: 93, name: 'Nunu&Willump' },
  //O Champions
  { id: 94, name: 'Olaf' },
  { id: 95, name: 'Orianna' },
  { id: 96, name: 'Ornn' },
  //P Champions
  { id: 97, name: 'Pantheon' },
  { id: 98, name: 'Poppy' },
  { id: 99, name: 'Pyke' },
  //Q Champions
  { id: 100, name: 'Qiyana' },
  { id: 101, name: 'Quinn' },
  //R Champions
  { id: 102, name: 'Rakan' },
  { id: 103, name: 'Rammus' },
  { id: 104, name: 'RekSai' },
  { id: 105, name: 'Rell' },
  { id: 106, name: 'Renata Glasc' },
  { id: 107, name: 'Renekton' },
  { id: 108, name: 'Rengar' },
  { id: 109, name: 'Riven' },
  { id: 110, name: 'Rumble' },
  { id: 111, name: 'Ryze' },
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
