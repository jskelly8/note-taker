const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001; // You can choose a different port

// Serve static files from a public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to send a file (e.g., an HTML file)
app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'example.html'));
});

// Route with an HTML response
app.get('/html', (req, res) => {
  res.send('<html><body><h1>Hello, Express.js!</h1></body></html>');
});

// Route with query parameters (e.g., '/path/:variable')
// Store the user-provided variable using the :variable name specified in the path
app.get('/path/:variable', (req, res) => {
  const variable = req.params.variable;
  res.send(`Variable value: ${variable}`);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});