const htmlRoute = require('express').Router();
const path = require('path');

// GET request responding with index.js -- Should return index.html even if user attempts to visit routes that don't exist
htmlRoute.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// GET request responding with notes.html
htmlRoute.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});



module.exports = htmlRoute;