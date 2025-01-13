const { Movie } = require('../models/Movie');
const fs = require('fs').promises;

// Helper function to read the JSON file
async function readJSON(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// Helper function to write data to the JSON file
async function writeJSON(object, filename) {
    try {
        const allObjects = await readJSON(filename);
        allObjects.push(object);
        await fs.writeFile(filename, JSON.stringify(allObjects), 'utf8');
        return allObjects;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// Edit movie function
async function editMovie(req, res) {
    try {
        const { id } = req.params;
        const { movieImage, movieTitle, movieDescription, movieDirectors, movieWriters, movieStars } = req.body;

        // Validation for movieTitle
        if (!movieTitle) {
            return res.status(400).json({ message: 'The movie title must be filled' });
        }
        if (typeof movieTitle !== 'string') {
            return res.status(400).json({ message: 'The movie title must be a string' });
        }
        if (movieTitle.trim().length === 0) {
            return res.status(400).json({ message: 'The movie title must not be empty' });
        }

        // Read existing movies data from JSON file
        const allMovies = await readJSON('utils/movies.json');

        // Find and modify the movie
        let modified = false;
        for (let i = 0; i < allMovies.length; i++) {
            if (allMovies[i].id === id) {
                allMovies[i].movieImage = movieImage || allMovies[i].movieImage;
                allMovies[i].movieTitle = movieTitle;
                allMovies[i].movieDescription = movieDescription || allMovies[i].movieDescription;
                allMovies[i].movieDirectors = movieDirectors || allMovies[i].movieDirectors;
                allMovies[i].movieWriters = movieWriters || allMovies[i].movieWriters;
                allMovies[i].movieStars = movieStars || allMovies[i].movieStars;
                modified = true;
                break;
            }
        }

        // If movie is modified, save the updated data
        if (modified) {
            await fs.writeFile('utils/movies.json', JSON.stringify(allMovies), 'utf8');
            return res.status(200).json({ message: 'Movie modified successfully!' });
        } else {
            return res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'An error occurred while modifying the movie' });
    }
}

module.exports = {
    readJSON, 
    writeJSON, 
    editMovie
};

