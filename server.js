const express = require('express');
const path = require('path');
const mainRoute = require('./routes/main.js');
const notesRoute = require('./routes/notes.js');
const app = express();
const PORT = process.env.PORT || 3001; 


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(mainRoute);
app.use(notesRoute);

// Starts the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on local host port ${PORT}`);
});
