const apiRoute = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); 

// GET request to endpoint /api/notes -- GETS saved notes and joins it to dbJSON
apiRoute.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

// POST request to endpoint /api/notes -- POSTS/adds new notes to dbJSON
apiRoute.post('/api/notes', (req, res) => {
    let noteList = JSON.parse(fs.readFileSync('./db/db.json'));
    let newNote = req.body;

    newNote.id = uuidv4();
    noteList.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(noteList));
    res.json(noteList);
});

// DELETE request to endpoint /api/notes -- DELETES a note
apiRoute.delete('/api/notes/:id', (req, res) => {
    let noteList = JSON.parse(fs.readFileSync('./db/db.json'));
    const noteId = req.params.id;

    // Find the index of the note with the given id
    const noteIndex = noteList.findIndex(note => note.id === noteId);

    if (noteIndex !== -1) {
        // Remove the note from the array
        noteList.splice(noteIndex, 1);

        // Save the updated list to the file
        fs.writeFileSync('./db/db.json', JSON.stringify(noteList));

        res.json({ success: true, message: 'Note deleted successfully.' });
    } else {
        // If note can't be found
        res.status(404).json({ success: false, message: 'Note not found.' });
    }
})

// -------------------------------------
module.exports = apiRoute;