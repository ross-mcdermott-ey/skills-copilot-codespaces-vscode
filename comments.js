// Create web server
// Use the express.js framework
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use the body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the 'comments' router
app.use('/comments', require('./routes/comments'));

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});