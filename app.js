// Requiring module
const express = require('express');

// Creating express object
const app = express();

// Handling GET request
app.get('/', (req, res) => { 
    res.send('Hello, this is Tanvi Laddha/n. I am a business applications analyst at AUC.\n'
        + 'This is my task submission for PearlThoughts.') 
    res.end() 
}) 

// Port Number
const PORT = process.env.PORT ||5050;

// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));
