const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000', methods: ['GET', 'POST'] }));
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yukimaru211x',
  database: 'staycrafty',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Login Route
app.post('/api/accounts', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Please provide both email and password' });
  }

  db.query('SELECT * FROM account_info WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(400).json({ success: false, message: 'User not found or incorrect password' });
    }

    const user = results[0];

    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        email: email,
        username: email,
      },
    });
  });
});

// Registration Route
app.post('/api/create-account', (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  const query = 'INSERT INTO account_info (email, password, first_name, last_name) VALUES (?, ?, ?, ?)';
  db.query(query, [email, password, firstName, lastName], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      return res.status(500).json({ success: false, message: 'Registration failed due to a database error' });
    }

    console.log('Insert Result:', result);
    res.status(201).json({ success: true, message: 'Registration successful' });
  });
});

// Add to Cart API
app.post('/api/AddToCart', (req, res) => {
  const { email, productName, quantity } = req.body;

  console.log(req.body);

  if (!email || !productName || !quantity) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields' });
  }

  // Check if the product is already in the cart for the given email
  db.query(
    `UPDATE account_cart SET ${productName} = ? WHERE email = ?`,
    [quantity, email],
    (err, results) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Database error' });
      }

      res.status(200).json({ success: true, message: 'Product added to cart successfully' });
    }
  );
});

app.post('/api/cart-check', (req, res) => {
  const { email, productName } = req.body;

  if (!email || !productName) {
    return res.status(400).json({ success: false, message: 'Please provide email and product name' });
  }

  // Check if the product already exists in the user's cart
  db.query('SELECT * FROM account_cart WHERE email = ? AND product_name = ?', [email, productName], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }

    if (results.length > 0) {
      return res.status(200).json({ success: false, message: 'Product already in cart' });
    }

    // Insert product into the cart if not already added
    db.query('INSERT INTO account_cart (email, product_name) VALUES (?, ?)', [email, productName], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Error adding to cart' });
      }

      return res.status(200).json({ success: true, message: 'Product added to cart' });
    });
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
