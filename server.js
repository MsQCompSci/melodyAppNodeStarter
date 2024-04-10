//import express
let express = require('express');

// Create the Express app
let app = express();

//Initialize file system module
let fs = require('fs');

// API endpoint to get folder with song files using folder path
app.get('/songs', (req, res) => {
  // File directory endpoint to get list of song file names
  //in the songs folder
  fs.readdir('songs', (err, files) => {
    if (err) {
      // Account for errors
      res.status(500).send('Error reading song files');
    } else {
      // Read file names as a JSON object
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
