//require path to create file path
const path = require('path');
//call the app
module.exports = (app) => {
    //get file path of notes.html 
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/index.html'));
    });
    app.get('/notes', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    //get file path of index.html
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '../../public/index.html'));
    });
};
console.log("html.js loaded");