// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // For resolving file paths

const app = express();
const PORT = process.env.PORT || 5050;
const startPage = 'index.html';

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', startPage));
});

// Import route handlers from utils
const { addMovie } = require('./utils/MovieUilAlz');
const { editMovie } = require('./utils/MovieUilFaraan');
const { viewResources } = require('./utils/MovieUilFir');

// API endpoints
app.post('/add-resource', addMovie);
app.put('/edit-movie/:id', editMovie);
app.get('/view-resource/:search', viewResources);

// Start the server
const server = app.listen(PORT, () => {
    const address = server.address();
    const baseUrl = `http://${address.address === '::' ? 'localhost' : address.address}:${address.port}`;
    console.log(`Demo project running at: ${baseUrl}`);
});

// Export app and server for testing
module.exports = { app, server };
