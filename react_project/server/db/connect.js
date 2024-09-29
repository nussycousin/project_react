const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Connecting to the MongoDB database
main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/projectBooks');
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Cannot connect to MongoDB:', error);
    }
}

// Example routes
router.get('/books', (req, res) => {
    res.send('List of books');
});

// Exporting the router
module.exports = router;
