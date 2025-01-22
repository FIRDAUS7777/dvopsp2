const { Movie } = require('../models/Movie');
const fs = require('fs').promises;

// Helper function to read the JSON file
async function readJSON(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Error reading file: ${filename}`, err);
        throw new Error('Failed to read the data file');
    }
}

// Helper function to write data to the JSON file
async function writeJSON(data, filename) {
    try {
        await fs.writeFile(filename, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.error(`Error writing to file: ${filename}`, err);
        throw new Error('Failed to write to the data file');
    }
}

// Edit movie function
async function editMovie(req, res) {
    try {
        const { id } = req.params;
        const { movieImage, movieTitle, movieDescription, movieDirectors, movieWriters, movieStars } = req.body;

        // Validate ID
        if (!id) {
            return res.status(400).json({ message: 'Movie ID is required' });
        }

        // Validate movieTitle
        if (!movieTitle) {
            return res.status(400).json({ message: 'The movie title must be filled' });
        }
        if (typeof movieTitle !== 'string' || movieTitle.trim().length === 0) {
            return res.status(400).json({ message: 'The movie title must be a non-empty string' });
        }

        // Read existing movies data from JSON file
        const allMovies = await readJSON('utils/movies.json');

        // Find the movie by ID
        const movieIndex = allMovies.findIndex(movie => movie.id === id);

        if (movieIndex === -1) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        // Update the movie details
        allMovies[movieIndex] = {
            ...allMovies[movieIndex],
            movieImage: movieImage || allMovies[movieIndex].movieImage,
            movieTitle,
            movieDescription: movieDescription || allMovies[movieIndex].movieDescription,
            movieDirectors: movieDirectors || allMovies[movieIndex].movieDirectors,
            movieWriters: movieWriters || allMovies[movieIndex].movieWriters,
            movieStars: movieStars || allMovies[movieIndex].movieStars,
        };

        // Save the updated data
        await writeJSON(allMovies, 'utils/movies.json');

        return res.status(200).json({ message: 'Movie modified successfully!' });
    } catch (error) {
        console.error('Error modifying movie:', error);
        return res.status(500).json({ message: 'An error occurred while modifying the movie' });
    }
}

module.exports = {
    readJSON,
    writeJSON,
    editMovie
};
