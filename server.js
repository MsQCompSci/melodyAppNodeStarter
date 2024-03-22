//import express
let express = require('express');

// Create the Express app
let app = express();

//Initialize file system module
let fs = require('fs');

// API endpoint to get list of songs
app.get('/songs', (req, res) => {
  fs.readdir('songs', (err, files) => {
    if (err) {
      res.status(500).send('Error reading song files');
    } else {
      res.json({ files });
    }
  });
});

// Set the port used for server traffic.
let port = 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

//run server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});