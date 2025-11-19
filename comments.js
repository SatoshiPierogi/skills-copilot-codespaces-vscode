// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for comments
let comments = [];

// Endpoint to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Endpoint to add a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    if (comment && comment.text) {
        comments.push(comment);
        res.status(201).json({ message: 'Comment added successfully' });
    } else {
        res.status(400).json({ message: 'Invalid comment format' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Comments server running at http://localhost:${port}`);
});
