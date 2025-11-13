// Import the express module
const express = require('express');
const app = express();

// Define the port
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

// Example route with parameters
app.get('/user/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Welcome, ${name}!`);
});

// Example POST route
app.post('/data', (req, res) => {
  const data = req.body;
  res.json({
    message: 'Data received successfully!',
    yourData: data
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
