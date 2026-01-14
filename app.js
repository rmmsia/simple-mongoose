const express = require('express');
const mongoose = require('mongoose');
const Message = require('./models/Message');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/simple-mongoose';

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
});

// Route to create a new message
app.post('/api/messages', async (req, res) => {
    try {
        const { text } = req.body;
        const newMessage = new Message({ text });
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (err) {
        console.error('Error creating message:', err);
        res.status(500).json({ error: 'Failed to create message' });
    }
});

// Route to get all messages
app.get('/api/messages', async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.status(200).json(Array.isArray(messages) ? messages : []);
    } catch (err) {
        res.status(200).json([]);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});