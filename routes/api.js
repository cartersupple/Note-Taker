const fs = require('fs');
const express = require('express');
//variable to create id for notes
const {v4: uuidv4} = require('uuid');
module.exports = (app) => {
// request db.json notes from db
app.get('/api/notes', (req,res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if(err)throw err;
        res.json(JSON.parse(data));

    });
});
// request to post data into db.json file
app.post('/api/notes', (req, res) => {
    // set data and return to the body
    const newNote = req.body;
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
    // save data and add it into db.json 
    const savedNotes = JSON.parse(data);
    newNote.id = uuidv4({length: 10});
    savedNotes.push(newNote);

});
});
}
