//require path to create file path
const path = require('path');
//export modules throughout app
module.exports = (app) => {
    //get file paths of htmls
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    app.get('/notes', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};
console.log("html.js loaded");