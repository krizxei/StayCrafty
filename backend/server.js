const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors({
  origin: 'http://localhost:3000', // Specify tnpmhe allowed frontend origin
  methods: ['GET', 'POST'], // Allowed HTTP methods
}));

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // MySQL username
  password: 'yukimaru211x', // MySQL password
  database: 'staycrafty', // Your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Set up middleware to parse JSON
app.use(express.json());

// Handle Login
app.post('/api/accounts', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Please provide both email and password' });
  }

  // Query to check if the user exists by email and compare the password
  db.query('SELECT * FROM account_info WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(400).json({ success: false, message: 'User not found or incorrect password' });
    }

    const user = results[0];

    // If the password matches, send a success response
    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        email: user.Email,
        username: user.Username,
      }
    });
  });
});

// Handle Registration
app.post('/api/register', (req, res) => {
  const { email, password, firstName, lastName} = req.body;

  console.log(req.body);

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields' });
  }

  // Check if the email already exists
  db.query('SELECT * FROM account_info WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }

    if (results.length > 0) {
      return res.status(400).json({ success: false, message: 'Email already in use' });
    }

    // Insert the new user into the database
    db.query(
      'INSERT INTO account_info (email, password, firstName, lastName) VALUES (?, ?, ?, ?)',
      [email, password, firstName, lastName],
      (err, results) => {
        if (err) {
          return res.status(500).json({ success: false, message: 'Error registering user' });
        }

        db.query('SELECT * FROM account_info WHERE Email = ?', [email], (err, userResults) => {
          if (err) {
            return res.status(500).json({ success: false, message: 'Error fetching user data' });
          }

        res.status(201).json({ success: true, message: 'Registration successful'});
      });
      }
    );

    db.query(
      'INSERT INTO account_info (email) VALUES (?)', [email],
      (err, results) => {
        if (err) {
          return res.status(500).json({ success: false, message: 'Error registering user' });
        }
      }
    )
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
