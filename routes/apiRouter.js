const api = require('express').Router();
const uniqid = require('uniqid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils.js');
const fs = require('fs');

api.get('/notes', (req, res) =>
readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

api.post('/notes', (req, res) => {
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id : uniqid()
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

api.delete('/notes/:id', (req, res) => {
  let db = JSON.parse(fs.readFileSync('./db/db.json'))
  let deleteNotes = db.filter(item => item.id !== req.params.id);
  fs.writeFileSync('./db/db.json', JSON.stringify(deleteNotes));
  res.json(deleteNotes);
})
;

module.exports = api;