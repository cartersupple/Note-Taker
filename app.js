// require express
const express = require('express');
const app = express();
//URL PORT
const PORT = process.env.PORT || 3000;
//app.path
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// call the routes for the files
 require('./routes/api')(app);
 require('./routes/html')(app);
// calling the port to functions
app.listen(PORT, () =>
  console.log(`API server now on port ${PORT}!`)
);