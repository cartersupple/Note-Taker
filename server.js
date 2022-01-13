// require express
const express = require('express');
const app = express();
//URL PORT
const PORT = process.env.PORT || 5000;
module.exports = app
//app.path
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// require routes for the files
const api = require('./routes/api')(app);
const html = require('./routes/html')(app);


// calling the port to functions
app.listen(PORT, () =>
  console.log(`API server now on port ${PORT}!`)
);
