const fs = require('fs');
const express = require('express');
//uuid to create id for notes
const {v4: uuidv4} = require('uuid');
//function to add makeNote to madeNotes in db.json
const makeNote = (madeNotes) => {
    fs.writeFile('./db/db.json', JSON.stringify(madeNotes), (err) => {
       if(err) throw err;
    });
  };
//export modules throughout app
module.exports = (app) => {
// request db.json notes from db
app.get('/api/notes', (req,res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if(err)throw err;
        res.json(JSON.parse(data));

    });
});
// request to post data into db.json 
app.post('/api/notes', (req, res) => {
    // set data and return to the body
    const newNote = req.body;
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
    // save notes and add them into db.json 
    const savedNotes = JSON.parse(data);
    newNote.id = uuidv4({length: 10});
    savedNotes.push(newNote);
    
    makeNote(savedNotes);
    console.log(`A note has been added! Title: ${JSON.stringify(newNote.title)}, Text: ${JSON.stringify(newNote.text)}, Id: ${JSON.stringify(newNote.id)} `);
    // send savedNotes
   res.send(savedNotes);
});
});
//request to delete notes from db.json
app.delete('/api/notes/:id', (req, res) => {
    const noteDelete = req.params.id;
  //use file system to read db.json and delete notes 
    fs.readFile('./db/db.json',  (err, data) => {
      if (err) throw err;
      let savedNotes = JSON.parse(data);
      for(let i = 0; i < savedNotes.length; i++){
        if(savedNotes[i].id === noteDelete){
          savedNotes.splice(i, 1);
        }
      }
      makeNote(savedNotes);
      console.log(`${noteDelete} was deleted!`);
      res.send(savedNotes);
    
    });
  });
}
console.log("api doing its thing")