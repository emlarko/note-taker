const api = require('express').Router();
const uniqid = require('uniqid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

api.get('/', (req, res) =>
readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

api.post('/', (req, res) => {
    const { title, text } = req.body;

    if (title, text) {
        const newNote = {
            title,
            text,
            noteId : uniqid
        };
        
        readAndAppend(newNote, './db/db.json');
        const response = {
            status: 'success',
            body: newNote,
          };
      
          res.json(response);
        } else {
          res.json('Error in posting feedback');
        }
});

module.exports = api;