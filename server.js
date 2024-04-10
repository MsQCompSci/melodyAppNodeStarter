//Import express
let express = require('express');

// Create the Express app
let app = express();

// Set the port used for server traffic.
let port = 3000;

// Middleware to serve static files from 'public' directory
app.use(express.static('public'));

//Initialize file system module
let fs = require('fs');

// Middleware to serve static files from 'songs' directory
app.use(express.static('songs'));

// Middleware for parsing JSON files
app.use(express.json());

// API endpoint to get songs folder
app.get('/songs', (req, res) => {
 // File directory endpoint to get list of file names
 fs.readdir('./songs', (err, files) => {
   if (err) {
     // Throws an error - if no file found, etc
     res.status(500).send('Error reading song files');
   } else {
     // Read file names into a JSON object
     res.json({files});
   }
 });
});

//Run server at port
app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
